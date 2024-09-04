import React, { useEffect, useState } from "react";
import SideNav from "../../components/sideNav/SideNav";
import LeaderBoard from "../../components/leaderBoard/LeaderBoard";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { pathname: route } = location;
  // const [ route, useRoute ] = useState('/sessions');
  const [ page, setPage ]: any = useState(null)
  useEffect(()=>{
    fetch('http://localhost:1337/api/home')
      .then(res => res.json())
      .then(data => setPage(data.data))
  }, [])
  return ( page &&
    <div>
      {/* <SideNav /> */}
      {/* <LeaderBoard route={route}/> */}
      <h1>{page.attributes?.title}</h1>
      <body>
        {page.attributes?.body}
      </body>
    </div>
    )
}

export default Home;
