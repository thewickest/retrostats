import Title from "src/base/title/Title";
import MarkdownBody from "src/base/markdownbody/MarkdownBody";
import Button from "src/base/button/Button";
import { default as usePage }from "src/lib/hooks/useApi";
import Link from "next/link";

export default async function Home() {
  const page = await usePage('pages/home');

  return (
    <>
      <Title title={page.attributes?.title}/>
      <MarkdownBody body={page.attributes?.body}/>
      <div className="flex xl:justify-end max-xl:justify-center mt-6 w-full items-center mb-6">
        <Link href="/leaderboard">
          <Button>Check the leaderBoard!</Button>
        </Link>
      </div>
    </>
    )
}