import React from "react";
import ScoreboardInfoCard from "./ScoreboardInfoCard";
import { Pagination } from "./types";

export default function ScoreboardInfoList({ items, pagination }: { items: any, pagination: Pagination }){
  const { page, pageSize } = pagination;
  return (
    <>
      { items?.length > 0 &&
        <div className="space-y-3 border-2 border-black rounded-base bg-white dark:bg-secondaryBlack p-5 font-base">
        {
          items.map((info: any, index: any)=> {
            const position = index+1+(page-1)*pageSize
            return (
              <ScoreboardInfoCard key={index} info={info} position={position}/>
            )
          })
        }
      </div>
      }
    </>
  )
}