import React from "react";
import Link from 'next/link'
import LeaderboardInfoCard from "./LeaderboardInfoCard";
import useApi from "src/lib/hooks/useApi";

export default async function LeaderboardInfoList({user}: {user?: string}) {
  const route = user ? `sessions/leaderBoard/${user}` :'sessions/leaderBoard'
  const items: any = await useApi(route)

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
      { (items?.length === 0 || !items) && (
        <div className="text-center space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5">
          <p>You have no sessions</p>
        </div>
      )}
    </>
  )
}