import { useState } from "react";
import GameInfoList from "./GameInfoList";
import Tabs from "./Tabs";

export default function LeaderBoard({route}:{route:string}) {
  const [ activeTab, setActiveTab ] = useState('Home')
  return (
    <>
      <div className="grid w-full justify-center">
        <div className="grid w-[500px] p-4">

          {/* <Tabs
            tabsArray={['Home', 'LeaderBoard']}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            /> */}
          <GameInfoList route={route} />
          </div>
      </div>
    </>
  );
}