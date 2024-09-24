import React from "react";
import Icon from "../Icon";

export default function LeaderboardInfoCard({info}: any) {
  const { game, score} = info.attributes;
  const { name, image } = game.data?.attributes ? game.data.attributes : { name: 'noname', image: null}
  const { url } = image?.data?.attributes ? image.data.attributes : ''
  return (
    <div className="grid grid-cols-10 gap-2 justify-items-strech items-center p-2 px-2 rounded-base border-2 border-black font-bold transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-main shadow-dark">
      <div className="col-span-1 place-self-center">
        <Icon imageUrl={url} size="12"/>
      </div>
      <div className="col-span-3 text-center border-r-2 border-black">
        <p>{name}</p>
      </div>
      <div className="col-span-6 flex justify-between">
        <div>
          <p>algrlo</p>
        </div>
        <div>
          <p>{score}</p>
        </div>
      </div>
    </div>
  )
}