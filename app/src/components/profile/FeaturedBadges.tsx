'use client'
import React, { useState } from 'react';
import Badge from 'src/base/icon/Badge';
import { StrapiBadge } from './ProfileInfo';
import { LucideCirclePlus } from 'lucide-react';
import Modal from 'src/base/modal/Modal';
import { v4 as uuid } from 'uuid';
import { updateFeaturedBadges } from 'src/lib/hooks/useApi';
import _ from 'lodash'

const FeaturedBadges = ({ badges, featuredBadges }: {badges?: StrapiBadge[], featuredBadges?: StrapiBadge[]}) => {
  //TODO get the user from somehwere
  const userId = 2
  const [featBadges, setFeatBadges] = useState(featuredBadges)
  const [isModalActive, setIsModalActive] = useState(false)
  /**The selected badge inside the modal */
  const [selectedBadge, setSelectedBadge ]: any = useState(null)
  /**The badge from where the modal is open from. If the modal was open from a "+" sign, is null */
  const [clickedBadge, setClickedBadge ]: any = useState(null)

  /**When you click on a feat badge */
  const handleBadgeClick = (item: StrapiBadge) => {
    setClickedBadge(item)
    setSelectedBadge(item)
    setIsModalActive(true)
  }

  /** When you click on the plus sign */
  const handleBadgeAdd = () => {
    setClickedBadge(null)
    setSelectedBadge(null)
    setIsModalActive(true)
  }

  /**When you select a badge in the modal */
  const handleBadgeSelect = (item: StrapiBadge) => {
    if(!_.find(featBadges, (n) => n?.id === item?.id)) {
      setSelectedBadge(item)
    }
  }

  const handleSaveAction = async () => {
    if(selectedBadge && featBadges) {
      const tempFeatBadges = [...featBadges]
      if(clickedBadge) {
        _.remove(tempFeatBadges, (item) => item === clickedBadge)
      }
      tempFeatBadges.push(selectedBadge)
      setFeatBadges(tempFeatBadges)
      setClickedBadge(null)
      setSelectedBadge(null)
      const data = {
        data: {
          featuredBadges: tempFeatBadges.map(item=> item?.id)
        }
      }
      await updateFeaturedBadges(userId, data)
    }
  }
  
  const handleDeleteAction = async () => {
    if(selectedBadge && featBadges) {
      let tempFeatBadges = [...featBadges]
      _.remove(tempFeatBadges, (item) => item == selectedBadge)
      setFeatBadges(tempFeatBadges)
      setClickedBadge(null)
      setSelectedBadge(null)
      const data = {
        data: {
          featuredBadges: tempFeatBadges.map(item=> item?.id)
        }
      }
      await updateFeaturedBadges(userId, data)
    } 
  }

  return (
    <>
      <div className="flex justify-center items-center border-2 border-border rounded-base space-x-2 p-2">
        {featBadges?.map((item) => {
          const { url: imageUrl, hash } = item?.attributes?.image?.data?.attributes || {}
          return (
            <button key={hash ? hash : uuid()} onClick={() => handleBadgeClick(item)} 
              className='flex items-center justify-center rounded-full bg-bg shadow'>
              <Badge imageUrl={imageUrl} />
            </button>
          )
        })}
        {featBadges && featBadges?.length < 3 &&
          [...Array(3- featBadges?.length)].map(() => (
            <button key={uuid()} onClick={handleBadgeAdd} className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10
              rounded-full hover:bg-bg dark:hover:bg-darkBg transition">
                <LucideCirclePlus />
            </button>
          ))
        }
      </div>
      <Modal active={isModalActive} setActive={setIsModalActive} isBadgeSelected={!!selectedBadge} saveAction={handleSaveAction} deleteAction={handleDeleteAction}>
        <div className='flex flex-col space-y-4'>
          { selectedBadge && 
            <div className='flex items-center border-border border-2 rounded-base p-2'>
              <div className='flex-none m-1 border-2 border-border rounded-full '>
                <Badge imageUrl={selectedBadge?.attributes?.image?.data?.attributes?.url}/>
              </div>
              <div className="flex flex-col justify-center px-2">
                <div className="flex items-center font-heading text-left">{selectedBadge?.attributes?.title}</div>
                <div className="font-base text-left">{selectedBadge?.attributes?.description}</div>
              </div>
            </div>
          }
          <div className='flex flex-wrap border-border border-2 rounded-base p-2'>
          {badges?.map((item, index)=>{
            return (
              <button key={item?.id} className={`m-1 border-2 border-border rounded-full 
                ${(item?.id == selectedBadge?.id || _.find(featBadges, (n) => n?.id == item?.id)) ? 'bg-bg shadow-none' : 'shadow-light dark:shadow-dark hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none transition-all'}`} onClick={()=> handleBadgeSelect(item)}>
                <Badge imageUrl={item?.attributes?.image?.data?.attributes?.url}/>
              </button>
            )
          })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FeaturedBadges;
