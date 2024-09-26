import React from "react";
import Title from "../../base/title/Title";
import MarkdownBody from "../../base/markdownbody/MarkdownBody";
import Button from "../../base/button/Button";
import { Link } from "react-router-dom";
import { default as usePage }from "../../lib/hooks/useApi";

function Home({ route }: { route: string}) {
  const [ page ] = usePage(route);

  return ( page &&
    <div className="flex flex-col items-center w-10/12 sm:w-8/12 md:w-10/12 lg:w-8/12 xl:w-5/12 p-4 mt-4 mx-auto">
      <Title title={page.attributes?.title}/>
      <MarkdownBody body={page.attributes?.body}/>
      <div className="flex xl:justify-end max-xl:justify-center mt-6 w-full items-center">
        <Link to="/leaderboard">
          <Button onClick={()=> {}}>Check the leaderBoard!</Button>
        </Link>
      </div>
    </div>
    )
}

export default Home;
