'use client'
import React, { useEffect, useState } from "react";
import ScoreboardInfoCard from "./ScoreboardInfoCard";
import ScoreboardHeader from "./ScoreboardHeader";
import _ from 'lodash'
import { BoardSession, ScoreBoard } from "src/app/leaderboard/[...slug]/types";
import { default as useSessions } from "src/lib/hooks/useApi";
import { toBoardList } from "src/lib/utils";
import { useParams } from "next/navigation";

export interface Info {
  attributes: {
    score: number
    initDate: Date
    duration: number
  }
}

export default function ScoreboardInfoList({ items }: { items: BoardSession[] }){
  const params = useParams<{slug: string[]}>()
  const [slug, page]= params?.slug
  const [order, setOrder] = useState(null)
  const [ dir, setDir] = useState('desc')
  const [ listItems, setListItems ]: [BoardSession[], any] = useState(items)
  const route = `sessions/game/${slug}`

  useEffect(()=>{
    if(order) {
      const params = {
        pagination: {
          page,
          pageSize: 10
        },
        sort: [`${order}:${dir}`, dir === 'desc' ? 'id:asc': 'id:desc']
      }
      useSessions(route, params)
      .then((items: ScoreBoard) => {
        /** Map the ScoreBoard type to BoardSession type */
        const scoreList: BoardSession[] = toBoardList(items?.data)
        setListItems(scoreList)
      })
      .catch(error => setListItems([]))
    }
  }, [order, dir])

  return (
    <>
      { listItems?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base">
          <ScoreboardHeader order={order} setOrder={setOrder} dir={dir} setDir={setDir}/>
        {
          listItems.map((info: BoardSession, index: number)=> {
            // const position = index+1+(page-1)*pageSize
            return (
              <ScoreboardInfoCard key={index} info={info}/>
            )
          })
        }
      </div>
      }
    </>
  )
}