import React from "react";
import Icon from "../Icon";

function toLocaleDate(date: string) {
  const nd = new Date(date);
  return nd.toLocaleDateString('es-ES');
}

export default function GameInfoCard({info}: any) {
  return (
    <div className="w-[300px] rounded-md border-2 border-black font-bold transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none bg-main shadow-dark" >
      <div className="border-b-2 border-black p-1">
        <h2 className="text-lg">{info.attributes.game.data.attributes.name}</h2>
      </div>
      <div className="grid grid-cols-10">
        <Icon imageUrl={info.attributes.game.data.attributes.image.data.attributes.url}/>
        <div className="col-span-7 text-left">
            <p>Fecha: {toLocaleDate(info.attributes.initDate)}</p>
            <p>Puntuación: {info.attributes.score}</p>
            <p>Duración: {info.attributes.duration}</p>
        </div>
      </div>
    </div>
  )
}