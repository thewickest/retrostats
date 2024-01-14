import { useEffect, useState } from "react";
import GameInfoCard from "./GameInfoCard";

export default function GameInfoList(){
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/sessions')
      .then(res => res.json())
      .then(data =>  setItems(data))
  }, [])

  return (
    <div className="grid place-content-center space-y-4 border-2 border-black bg-white p-5 font-bold">
        {
          items && items.map((info: any)=> (
            <GameInfoCard info={info}/>
          ))
        }
    </div>
  )
}