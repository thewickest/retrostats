import React from "react";
import Tabs from '../../components/Tabs';
import GameInfoList from '../../components/GameInfoList';

function Home() {
  return (
    <div className='grid w-full place-content-center'>
      <Tabs 
        tabsArray={['Home']}
        activeTab={'home'}
        setActiveTab={()=> console.log('hi')}
      />
      <GameInfoList />
    </div>
    )
}

export default Home;
