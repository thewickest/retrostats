// components/LoadingCircle.js
import React from 'react';

const Level = ({ level, percentage }: any) => {
  const radius = 10; // Radius of the circle
  const strokeWidth = 3; // Width of the circle border
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const color = 'text-green-500'

  // Calculate the stroke dash offset based on the percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className='flex justify-center alig-items-center p-1'>
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
          dy=".05em"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="12"
          fill="#a388ee"
          className='p-4'
        >
          {level}
        </text>
      </svg>
    </div>
  );
};

export default Level;
