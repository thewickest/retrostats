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
  const [selectedBadge, setSelectedBadge ]: any = useState(null)

  const handleBadgeClick = (item: StrapiBadge) => {
    setSelectedBadge(item)
    setIsModalActive(true)
  }

  const handleBadgeAdd = () => {
    setSelectedBadge(null)
    setIsModalActive(true)
  }

  const handleBadgeSelect = (item: StrapiBadge) => {
    setSelectedBadge(item)
  }

  const handleSaveAction = async () => {
    if(selectedBadge && featBadges) {
      const tempFeatBadges = [...featBadges]
      tempFeatBadges.push(selectedBadge)
      setFeatBadges(tempFeatBadges)
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
      <Modal active={isModalActive} setActive={setIsModalActive} saveAction={handleSaveAction} deleteAction={handleDeleteAction}>
        <div className='flex flex-col'>
          { selectedBadge && 
            <div className='flex border-border border-2 rounded-base p-1'>
              <p>This is the badge: {selectedBadge.id}</p>
            </div>
          }
          <div className='flex flex-wrap border-border border-2 rounded-base'>
          {badges?.map((item, index)=>{
            return (
              <button key={item?.id} className={`m-1 border-2 border-border rounded-full ${item?.id == selectedBadge?.id ? 'bg-bg' : ''}`} onClick={()=> handleBadgeSelect(item)}>
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
