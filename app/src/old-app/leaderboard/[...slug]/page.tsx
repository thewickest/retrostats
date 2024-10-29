import Link from 'next/link'
import ScoreboardInfoList from "src/components/scoreboard/ScoreboardInfoList";
import Button from "src/base/button/Button";
import { useState } from "react";
import { default as useSessions } from "src/lib/hooks/useApi";
import { Pagination } from "src/components/scoreboard/types";

// export async function generateStaticParams() {
//     const sessions = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sessions`).then((res) => res.json())
//     let games = {}
//     games = Object.groupBy(sessions, (s: any) => {
//         return s.attributes.game.attributes.slug
//     })

//     return Object.keys(games).map((slug) => ({
//       slug,
//     }))
//   }
   

export default async function Scoreboard(params : any) {

    console.log('params', params)

    const properties = await params
    const [ slug, page = 1] = properties.slug
    // const [ pageState, setPageState] = useState(Number(page) || 1)
    const pagination: Pagination = { page: Number(page), pageSize: 10}
    const route: string = `sessions/game/${slug}`
    const [ items ] = await useSessions(route, pagination)

    const getPageButtons = (pageCount: number) => {
        const pages = []
        for (let page=1; page<=pageCount; page++) {
        pages.push(
            <div key={page} className="p-1">
            <Link href={`/leaderboard/${slug}/${page}`}>
                <Button>{page}</Button>
            </Link>
            </div>
        )
        }
        return pages;
    }

    return (
        <>
        <div className="flex w-full justify-center">
            <div className="flex-initial w-[800px] p-4">
            <ScoreboardInfoList items={items?.data} pagination={pagination}/>
            <div className="flex justify-center">
                { items?.meta?.pagination?.pageCount > 1 &&
                getPageButtons(items?.meta?.pagination?.pageCount)
                }
            </div>
            </div>
        </div>
        </>
    )
}