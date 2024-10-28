'use client'
import Title from "../../base/title/Title";
import MarkdownBody from "../../base/markdownbody/MarkdownBody";
import Button from "../../base/button/Button";
import { default as usePage }from "../../lib/hooks/useApi";
import Link from "next/link";

function Home() {
  const [ page ] = usePage('pages/home');

  return (
    <div className="flex flex-col items-center w-10/12 sm:w-8/12 md:w-10/12
    lg:w-8/12 xl:w-5/12 p-4 mt-4 mx-auto text-text dark:text-darkText">
      <Title title={page.attributes?.title}/>
      <MarkdownBody body={page.attributes?.body}/>
      
      <div className="flex xl:justify-end max-xl:justify-center mt-6 w-full items-center">
        <Link href="/leaderboard">
          <Button onClick={()=> {}}>Check the leaderBoard!</Button>
        </Link>
      </div>
    </div>
    )
}

export default Home