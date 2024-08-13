import React, { useState } from "react";
import SideNav from "../../components/sideNav/SideNav";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { pathname: route } = location;
  // const [ route, useRoute ] = useState('/sessions');
  return (
    <div className='flex w-full bg-bg text-text border-border'>
      <SideNav />
      <LeaderBoard route={route}/>
    </div>
    )
}

export default Home;
