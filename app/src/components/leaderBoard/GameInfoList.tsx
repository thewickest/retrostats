import React, { useEffect, useState } from "react";
import GameInfoCard from "./GameInfoCard";


export default function GameInfoList({route}:{route:string}){
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3001${route}`)
      .then(res => res.json())
      .then(data =>  setItems(data))
      .catch( e => setItems([]))
  }, [route])

  return (
    <>
      { items?.length > 0 &&
        <div className="grid justify-center space-y-4 border-2 border-black rounded-base bg-white p-5 font-bold">
        {
          items.map((info: any)=> (
            <GameInfoCard info={info}/>
          ))
        }
      </div>
      }
    </>
  )
}