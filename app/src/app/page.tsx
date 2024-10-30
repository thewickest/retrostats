import Title from "src/base/title/Title";
import MarkdownBody from "src/base/markdownbody/MarkdownBody";
import Button from "src/base/button/Button";
import { default as usePage }from "src/lib/hooks/useApi";
import Link from "next/link";

export default async function Home() {
  const page = await usePage('pages/home');

  return (
    <div className="flex flex-col items-center w-10/12 sm:w-8/12 md:w-10/12
    lg:w-8/12 xl:w-5/12 p-4 mt-4 mx-auto text-text dark:text-darkText">
      <Title title={page.attributes?.title}/>
      <MarkdownBody body={page.attributes?.body}/>
      
      <div className="flex xl:justify-end max-xl:justify-center mt-6 w-full items-center">
        <Link href="/leaderboard">
          <Button>Check the leaderBoard!</Button>
        </Link>
      </div>
    </div>
    )
}