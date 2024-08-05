import React from "react";
import SideNav from "../../components/sidenav/SideNav";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";

function Home() {
  return (
    <div className='flex w-full bg-bg text-text border-border'>
      <SideNav/>
      <LeaderBoard/>
    </div>
    )
}

export default Home;
