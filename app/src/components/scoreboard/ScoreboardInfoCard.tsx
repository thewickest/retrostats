import React, { useEffect, useRef, useState } from "react";
import { BoardSession } from "src/app/leaderboard/[...slug]/types";

function formatDuration(seconds: number) {
  // Calculate hours, minutes, and remaining seconds
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  // Format hours, minutes, and seconds as two digits
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  // Return formatted string as "HH:MM:SS"
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function formatDate(date: Date) {
  const day = date.getDate();
  const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Function to get the suffix for the day
  function getDaySuffix(day: number) {
      if (day > 3 && day < 21) return 'th'; // Special case for 11th, 12th, 13th
      switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
      }
  }

  // Get the day suffix
  const suffix = getDaySuffix(day);

  // Return formatted date as "24th Dec 2024"
  return `${day}${suffix} ${month} ${year}`;
}


export default function ScoreboardInfoCard({info}: {info: BoardSession}) {
  const { score, initDate, duration, position, name} = info;
  const date: Date = new Date(initDate)

  const [showContent, setShowContent] = useState(false)
  const [contentHeight, setContentHeight] = useState('0px')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [showContent])


  return (
    <div data-state={showContent ? 'open' : 'closed'}
    className="rounded-base overflow-x-hidden border-2 border-border
    dark:border-darkBorder shadow-light dark:shadow-dark">
      <button
        className="w-full items-center text-text transition-[border-radius]
            border-b-0 group-data-[state=open]:border-b-2 border-b-border dark:border-b-darkBorder
            bg-main p-2"
        onClick={() => {
          setShowContent(!showContent)
        }}
      >
        <div className="grid grid-cols-10 gap-2 justify-items-strech items-center">
          <div className="col-span-1 text-start">
            <p>#{position}</p>
          </div>
          {/**TODO Change the username */}
          <div className="col-span-2 max-sm:col-span-4 text-center">
              {name}
          </div>
          <div className="col-span-2 text-center max-sm:hidden">
            <p>{duration ? formatDuration(duration) : 0}</p>
          </div>
          <div className="col-span-2 text-center max-sm:hidden">
            <p>{initDate ? formatDate(date) : '-'}</p>
          </div>
          <div className="col-span-3 max-sm:col-span-5 text-center">
              <p>{score}</p>
          </div>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ height: showContent ? `${contentHeight}` : '0' }}
        className="grid grid-cols-10 gap-2 justify-items-strech items-center overflow-hidden rounded-b-base bg-main font-base
        transition-[height] ease-in-out font-heading sm:hidden"
      >
        <div className="col-span-5 text-center p-2">
          <p>{duration ? formatDuration(duration) : 0}</p>
        </div>
        <div className="col-span-5 text-center p-2">
          <p>{initDate ? formatDate(date) : '-'}</p>
        </div>
      </div>
    </div>
  )
}