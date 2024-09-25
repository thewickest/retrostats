import React from "react";
import ScoreboardInfoCard from "./ScoreboardInfoCard";
import { default as useSessions } from "../../lib/hooks/useApi";

export default function ScoreboardInfoList({ route }: { route: string}){
  const [ items ] = useSessions(route)

  return (
    <>
      { items?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white p-5 font-bold">
        {
          items.map((info: any, index: any)=> {
            return (
              <ScoreboardInfoCard info={info} position={index+1}/>
            )
          }
          )
        }
      </div>
      }
    </>
  )
}