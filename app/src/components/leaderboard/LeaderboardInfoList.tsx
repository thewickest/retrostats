import React from "react";
import Link from 'next/link'
import LeaderboardInfoCard from "./LeaderboardInfoCard";
import useApi from "src/lib/hooks/useApi";

export default async function LeaderboardInfoList() {
  const items: any = await useApi('sessions/leaderBoard')

  return (
    <>
      { items && items?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5">
        {
          items.map((info: any)=> {
            const slug = info?.attributes?.game?.data?.attributes?.slug;
            return (
              <div key={slug}>
                <Link href={`leaderboard/${slug}`}>
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