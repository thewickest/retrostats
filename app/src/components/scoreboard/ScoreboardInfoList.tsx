'use client'
import React, { useEffect, useState } from "react";
import ScoreboardInfoCard from "./ScoreboardInfoCard";
import ScoreboardHeader from "./ScoreboardHeader";
import _ from 'lodash'
import { BoardSession } from "src/app/leaderboard/[...slug]/types";

export interface Info {
  attributes: {
    score: number
    initDate: Date
    duration: number
  }
}

export default function ScoreboardInfoList({ items }: { items: BoardSession[] }){
  // const { page, pageSize } = pagination;
  const [order, setOrder] = useState('name')
  const [ dir, setDir] = useState('desc')
  const [ listItems, setListItems ] = useState(items)

  useEffect(()=>{
    const orderedItems = _.orderBy(items,[ order], [ dir ])
    setListItems(orderedItems)
  }, [order, dir])

  return (
    <>
      { listItems?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base">
          <ScoreboardHeader onClick={setOrder} dir={dir} setDir={setDir}/>
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