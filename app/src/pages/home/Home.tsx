import React, { useEffect, useState } from "react";
import Title from "../../base/title/Title";
import MarkdownBody from "../../base/markdownbody/MarkdownBody";
import Button from "../../base/button/Button";
import { Link } from "react-router-dom";

// const route = '/api/home'a

function Home({ route }: { route: string}) {
  const [ page, setPage ]: any = useState(null)
  useEffect(()=>{
    // TODO: Change this with the API route
    fetch(`${process.env.REACT_APP_STRAPI_URL}/api/${route}`)
      .then(res => res.json())
      .then(data => setPage(data.data))
  }, [route])
  return ( page &&
    <div className="flex flex-col items-center w-10/12 sm:w-8/12 md:w-10/12 lg:w-8/12 xl:w-5/12 p-4 mt-4 mx-auto">
      <Title title={page.attributes?.title}/>
      <MarkdownBody body={page.attributes?.body}/>
      <div className="xl:justify-end lg:justify-center md:justify-center sm:justify-center mt-6 flex w-full items-center">
        <Link to="/leaderboard">
          <Button onClick={()=> {}}></Button>
        </Link>
      </div>
    </div>
    )
}

export default Home;
