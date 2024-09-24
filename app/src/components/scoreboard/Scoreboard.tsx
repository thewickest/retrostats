import { useParams } from "react-router-dom"
import ScoreboardInfoList from "./ScoreboardInfoList";

function Scoreboard() {

  const { slug } = useParams()
  return (
    <>
      <div className="grid w-full justify-center">
        <div className="grid w-[800px] p-4">
            <ScoreboardInfoList route={`sessions/game/${slug}`}/>
          </div>
      </div>
    </>
  )
}

export default Scoreboard;