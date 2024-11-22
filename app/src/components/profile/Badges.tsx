// components/ButtonContainer.js
import React from 'react';
import { LuBadgePlus, LuPlus } from "react-icons/lu";

const Badges = () => {
  const percentage = 100
  const level = ''
  const radius = 20; // Radius of the circle
  const strokeWidth = 5; // Width of the circle border
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const color = 'text-green-500'

  // Calculate the stroke dash offset based on the percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center">
      {/** This is a test*/}
      <div className='flex items-center justify-center w-[45px] h-[45px]'>
        <img src="/badge.png" alt="" />
      </div>
      <div className='flex items-center justify-center w-[45px] h-[45px]'>
        <img src="/badge.png" alt="" />
      </div>
      <button className="flex items-center justify-center w-[45px] h-[45px]
      rounded-full text-3xl hover:bg-bg dark:hover:bg-darkBg transition">
        <LuBadgePlus /></button>
    </div>
  );
};

export default Badges;
