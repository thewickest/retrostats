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
    <div className="grid grid-cols-3 justify-items-center justify-left">
      <div className='col-span-1'>
        <svg
          width={radius * 2 + strokeWidth}
          height={radius * 2 + strokeWidth}
          viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}
        >
          {/* Background Circle */}
          {/* <circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            fill="none"
          /> */}
          {/* Foreground Circle */}
          <circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            stroke='#9e66ff'
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
          {/* Text in the middle */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="18"
            fill="#a388ee"
          >
            {level}
          </text>
        </svg>
      </div>
      {/* Button 1 */}
      {/* <button className="flex items-center justify-center w-12 h-12
      rounded-full border-4 border-gray-500 bg-gray-800 text-white
      text-3xl font-bold hover:bg-gray-700 transition">
        +
      </button> */}
      <div className='col-span-1'>
        <svg
          width={radius * 2 + strokeWidth}
          height={radius * 2 + strokeWidth}
          viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`}
        >
          {/* Background Circle */}
          {/* <circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            fill="none"
          /> */}
          {/* Foreground Circle */}
          <circle
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            stroke='#9e66ff'
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="butt"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
          {/* Text in the middle */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="18"
            fill="#a388ee"
          >
            {level}
          </text>
        </svg>
      </div>
      {/* Button 3 */}
      <button className="flex items-center justify-center w-[45px] h-[45px]
      rounded-full text-3xl hover:bg-bg dark:hover:bg-darkBg transition">
        <LuBadgePlus /></button>
    </div>
  );
};

export default Badges;
