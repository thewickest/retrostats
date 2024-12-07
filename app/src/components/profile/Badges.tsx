'use client'
import React, { useState } from 'react';
import Badge from 'src/base/icon/Badge';
import { StrapiBadge } from './ProfileInfo';
import { LucideCirclePlus } from 'lucide-react';
import Modal from 'src/base/modal/Modal';

const Badges = ({ badges, featuredBadges }: {badges: StrapiBadge[], featuredBadges: StrapiBadge[]}) => {
  const [fBadges, setFBadges] = useState(featuredBadges)
  const [ active, setActive ] = useState(false)

  const handleClick = () => {
    // open modal
    setActive(true)
    //
    setFBadges([...fBadges, badges[0]])
  }

  return (
    <>
    <div className="flex justify-center items-center border-2 border-border rounded-base space-x-2 p-2">
      {fBadges?.map((item) => {
        const { url: imageUrl, hash } = item?.attributes?.image?.data?.attributes || {}
        return (
          <button key={hash} onClick={() => {}} 
          className='flex items-center justify-center rounded-full bg-bg shadow'>
            <Badge imageUrl={imageUrl} />
          </button>
        )
      })}
      {fBadges && fBadges?.length < 3 &&
        [...Array(3- fBadges?.length)].map(() => (
          <button onClick={handleClick} className="flex items-center justify-center h-8 w-8 md:h-10 md:w-10
          rounded-full hover:bg-bg dark:hover:bg-darkBg transition">
              <LucideCirclePlus />
          </button>
        ))
      }
    </div>
    <Modal
        isOpen={active}
        onClose={() => setActive(false)}
        title="Modal Title"
      >
        <p>This is the modal content!</p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => setActive(false)}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Badges;
