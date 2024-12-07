'use client'
import React, { useState } from 'react';
import Badge from 'src/base/icon/Badge';
import { StrapiBadge } from './ProfileInfo';
import { LucideCirclePlus } from 'lucide-react';
import Button from 'src/base/button/Button';
import Modal from 'src/base/modal/Modal';

const Badges = ({ badges, featuredBadges }: {badges?: StrapiBadge[], featuredBadges?: StrapiBadge[]}) => {
  const [fBadges, setFBadges] = useState(featuredBadges)
  const [isModalActive, setIsModalActive] = useState(false)

  const handleClick = () => {
    if(badges && fBadges) {
      setFBadges([...fBadges, badges[0]])
    }
  }

  return (
    <>
      <div key={Math.random()} className="flex justify-center items-center border-2 border-border rounded-base space-x-2 p-2">
        {fBadges?.map((item) => {
          const { url: imageUrl, hash } = item?.attributes?.image?.data?.attributes || {}
          return (
            <button key={Math.random()} onClick={() => {}} 
            className='flex items-center justify-center rounded-full bg-bg shadow'>
              <Badge imageUrl={imageUrl} />
            </button>
          )
        })}
        {fBadges && fBadges?.length < 3 &&
          [...Array(3- fBadges?.length)].map(() => (
            <button key={Math.random()} onClick={handleClick} className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10
            rounded-full hover:bg-bg dark:hover:bg-darkBg transition">
                <LucideCirclePlus />
            </button>
          ))
        }
      </div>
      <Button
        onClick={() => {
          setIsModalActive(true)
        }}
      >
        Open modal
      </Button>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <div className='flex flex-wrap'>
          {badges?.map((item, index)=>{
            console.log('badges', badges)
            return (
              <button key={index} className='m-1 border-2 border-border rounded-full'>
                {/* <img className='flex-none h-8 w-8 rounded-full bg-black' src="" alt="" /> */}
                <Badge imageUrl={item?.attributes?.image?.data?.attributes?.url}/>
              </button>
            )
          })}
        </div>
      </Modal>
    </>
  );
};

export default Badges;
