import { Link, useParams } from "react-router-dom"
import ScoreboardInfoList from "./ScoreboardInfoList";
import Button from "../../base/button/Button";
import { useState } from "react";
import { default as useSessions } from "../../lib/hooks/useApi";
import { Pagination } from "./types";

function Scoreboard() {

  const { slug, page } = useParams();
  const [ pageState, setPageState] = useState(Number(page) || 1)
  const pagination: Pagination = { page: pageState ? pageState: 1, pageSize: 10}
  const route: string = `sessions/game/${slug}`
  const [ items ] = useSessions(route, pagination)

  const getPageButtons = (pageCount: number) => {
    const pages = []
    for (let page=1; page<=pageCount; page++) {
      pages.push(
        <div key={page} className="p-1">
          <Link to={`/leaderboard/${slug}/${page}`}>
            <Button onClick={()=> setPageState(page)}>{page}</Button>
          </Link>
        </div>
      )
    }
    return pages;
  }

  return (
    <>
      <div className="grid w-full justify-center">
        <div className="grid w-[800px] p-4">
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

export default Scoreboard;