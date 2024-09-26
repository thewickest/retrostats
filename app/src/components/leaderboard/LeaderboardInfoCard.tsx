import React from "react";
import Icon from "../Icon";

export default function LeaderboardInfoCard({info}: any) {
  const { game, score} = info.attributes;
  const { name, image } = game.data?.attributes ? game.data.attributes : { name: 'noname', image: null}
  const { url } = image?.data?.attributes ? image.data.attributes : ''
  return (
    <div className="flex flex-wrap text-center p-2
      bg-main border-2 border-black rounded-base
      font-bold
      shadow-dark transition-all duration-300 hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <div className="flex max-sm:border-b-2 max-sm:border-black max-sm:w-full max-sm:pb-1">
        <div className="flex-none">
          <Icon imageUrl={url}/>
        </div>
        <div className="max-sm:flex-auto w-56 place-content-center sm:border-r-2 sm:border-black text-text">
          <p>{name}</p>
        </div>
      </div>
      <div className="flex flex-auto w-28 max-sm:w-full justify-around sm:justify-between max-sm:pt-1 sm:p-2">
        <div className="place-content-center">
          <p>algrlo</p>
        </div>
        <div className="place-content-center">
          <p>{score}</p>
        </div>
      </div>
    </div>
  )
}