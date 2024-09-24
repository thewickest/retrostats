import React from "react";
import Icon from "../Icon";

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


export default function ScoreboardInfoCard({info, position}: {info: any, position: number}) {
  const { game, score, initDate, duration} = info.attributes;
  const date: Date = new Date(initDate)
  const { name, image } = game.data?.attributes ? game.data.attributes : { name: 'noname', image: null}
  const { url } = image?.data?.attributes ? image.data.attributes : ''

  return (
    <div className="grid grid-cols-10 gap-2 justify-items-strech items-center p-2 px-2 rounded-base border-2 border-black font-bold transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-main shadow-dark">
      <div className="col-span-1 text-start">
        <p>#{position}</p>
      </div>
      <div className="col-span-2 text-center">
          <p>algrlo</p>
      </div>
      <div className="col-span-2 text-center">
        <p>{duration ? formatDuration(duration) : 0}</p>
      </div>
      <div className="col-span-2 text-center">
        <p>{initDate ? formatDate(date) : '-'}</p>
      </div>
      <div className="col-span-3 text-center">
          <p>{score}</p>
      </div>
    </div>
  )
}