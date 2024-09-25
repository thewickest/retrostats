import React from "react";
import { Link } from "react-router-dom";
import LeaderboardInfoCard from "./LeaderboardInfoCard";
import { default as useSessions } from "../../lib/hooks/useApi";


export default function LeaderboardInfoList({ route }: { route: string}){
  const [ items ] = useSessions(route);

  return (
    <>
      { items?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white p-5 font-bold">
        {
          items.map((info: any)=> {
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