'use client'

import Link from 'next/link'
import ScoreboardInfoList from "src/components/scoreboard/ScoreboardInfoList";
import Button from "src/base/button/Button";
import { useEffect, useState } from "react";
import { default as useSessions } from "src/lib/hooks/useApi";
import { Pagination } from "src/components/scoreboard/types";
import { BoardSession, ScoreBoard } from './types';
import { toBoardList } from 'src/lib/utils';

export default function Scoreboard({ params } : any) {

    const [ slug, setSlug ] = useState()
    const [ pageState, setPageState]: [Number, any] = useState(1)
    const [ scoreBoard, setScoreBoard ]: [ScoreBoard, any] = useState({data: null, meta: null})
    const [ scoresList, setScoresList ]: [BoardSession[] | null, any] = useState(null)
    const pagination: Pagination = { page: Number(pageState) || 1, pageSize: 10}
    const route: string = `sessions/game/${slug}`

    useEffect(() => {
        const getSlug = async () => {
             /**
              * This is called slug because of the [...slug]. 
              * In reality, it gets all the params /:slug/:page, etc.
              * Everything after /leaderboard/.../.../
              * */
            const [slug, page] = (await params)?.slug
            setSlug(slug);
            setPageState(page)
        }
        getSlug()
    }, [params])

    useEffect(()=>{
        if(slug) {
            useSessions(route, { pagination, sort: ['score:desc', 'id:asc'] })
            .then((items: ScoreBoard) =>  {
                setScoreBoard(items)
                /** Map the ScoreBoard type to BoardSession type */
                const scoreList: BoardSession[] = toBoardList(items?.data)
                setScoresList(scoreList)
            })
            .catch(error => { 
              setScoreBoard([])
              setScoresList(null)
            })
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
            <div className="flex-initial w-full p-4">
            { scoresList && (
              <>
                <ScoreboardInfoList items={scoresList}/>
                <div className="flex justify-center">
                  { scoreBoard?.meta && scoreBoard.meta.pagination?.pageCount > 1 &&
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