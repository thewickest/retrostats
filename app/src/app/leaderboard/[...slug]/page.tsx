'use client'

import Link from 'next/link'
import ScoreboardInfoList from "src/components/scoreboard/ScoreboardInfoList";
import Button from "src/base/button/Button";
import { useEffect, useState } from "react";
import { default as useSessions } from "src/lib/hooks/useApi";
import { Pagination } from "src/components/scoreboard/types";

export interface ScoreBoard {
    data: any
    meta: any
}

export default function Scoreboard({ params } : any) {

    const [ slug, setSlug ] = useState()
    const [ pageState, setPageState]: [Number, any] = useState(1)
    const [ scoreBoard, setScoreBoard ]: [ScoreBoard, any] = useState({data: null, meta: null})
    const pagination: Pagination = { page: Number(pageState) || 1, pageSize: 10}
    const route: string = `sessions/game/${slug}`

    useEffect(() => {
        const getSlug = async () => {
            const [slug, page] = (await params)?.slug
            setSlug(slug);
            setPageState(page)
        }
        getSlug()
    }, [params])

    useEffect(()=>{
        if(slug) {
            useSessions(route, pagination)
            .then(items =>  {
                setScoreBoard(items)
            })
            .catch(error =>setScoreBoard(null))
        }
    }, [slug])

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
            { scoreBoard?.data && (
              <>
                <ScoreboardInfoList items={scoreBoard?.data} pagination={pagination}/>
                  <div className="flex justify-center">
                        { scoreBoard?.meta?.pagination?.pageCount > 1 &&
                        getPageButtons(scoreBoard?.meta?.pagination?.pageCount)
                      }
                  </div>
              </>
            )}
            </div>
        </div>
        </>
    )
    return <></>
} 