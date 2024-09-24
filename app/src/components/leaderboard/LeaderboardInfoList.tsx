import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeaderboardInfoCard from "./LeaderboardInfoCard";


export default function LeaderboardInfoList({ route }: { route: string}){
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}${route}`)
      .then(res => res.json())
      .then(data =>  setItems(data))
      .catch( e => setItems([]))
  }, [route])

  return (
    <>
      { items?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white p-5 font-bold">
        {
          items.map((info: any)=> {
            console.log('info', info);
            return (
              <div>
                <Link to={`${info.attributes.game.data.attributes.slug}`}>
                  <LeaderboardInfoCard info={info}/>
                </Link>
              </div>
            )
          }
          )
        }
      </div>
      }
    </>
  )
}