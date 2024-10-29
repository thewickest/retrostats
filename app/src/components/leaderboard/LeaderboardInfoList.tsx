'use client'

import React, { useEffect, useState } from "react";
import Link from 'next/link'
import LeaderboardInfoCard from "./LeaderboardInfoCard";
import useApi from "src/lib/hooks/useApi";

export default async function LeaderboardInfoList() {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    const items: any = useApi('sessions/leaderBoard')
    setItems(items);
  },[])

  return (
    <>
      { items && items?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5">
        {
          items.map((info: any)=> {
            const slug = info.attributes.game.data.attributes.slug;
            return (
              <div key={slug}>
                <Link href={`${slug}`}>
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