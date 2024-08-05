import React from "react";
import Icon from "../Icon";

function toLocaleDate(date: string) {
  const nd = new Date(date);
  return nd.toLocaleDateString('es-ES');
}

export default function GameInfoCard({info}: any) {
  const { game, initDate, score, duration} = info.attributes;
  const { name, image } = game.data?.attributes ? game.data.attributes : { name: 'noname', image: null}
  const { url } = image?.data?.attributes ? image.data.attributes : ''
  return (
    <div className="w-[300px] h-fit pb-4 rounded-base border-2 border-black font-bold transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-main shadow-dark" >
      <div className="border-b-2 border-black p-1">
        <h2 className="text-lg">{name}</h2>
      </div>
      <div className="grid grid-cols-10">
        <Icon imageUrl={url}/>
        <div className="col-span-7 text-left">
            <p>Fecha: {toLocaleDate(initDate)}</p>
            <p>Puntuación: {score}</p>
            <p>Duración: {duration}</p>
        </div>
      </div>
    </div>
  )
}