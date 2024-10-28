// import { Link, Outlet } from "react-router-dom";
import Link from 'next/link'
import Dropdown from "./Dropdown";
import DarkModeButton from "../../base/button/DarkModeButton";
import { LuCrown, LuGithub } from "react-icons/lu";
import GithubButton from "../../base/button/GithubButton";

export default function Header () {

  const items = [
    {name: 'Leaderboard', link: '/leaderboard'},
  ]
  const extraItems = [
    {name: 'Github', link:'https://github.com/thewickest/retrostats', icon: <LuGithub/> }
  ]
  return (
    <>
      <nav className="left-0 top-0 z-20 mx-auto flex fixed h-[76px] w-full
        border-b-4 border-border dark:border-darkBorder bg-white
        dark:bg-secondaryBlack p-4 m500:h-16">
        <div className="mx-auto flex w-[1300px] text-text dark:text-darkText max-w-full items-center
          justify-center md:grid md:grid-cols-3">
          <div className="md:hidden fixed top-4 left-4">
            <Dropdown text={''} items={items} extraItems={extraItems}></Dropdown>
          </div>
          <div className="flex justify-center max-md:grow">
            <Link className="text-4xl font-heading max-md:text-xl" href="/">RETROSTATS</Link>
          </div>
          <div className="flex items-center justify-center max-md:hidden">
            <Link className="flex content-center items-center justify-center text-xl font-base" href="/leaderboard">
              <LuCrown/>
              &nbsp;
              <p>Leaderboard</p>
            </Link>
          </div>
          <div className="md:flex md:justify-end max-md:fixed max-md:top-4 max-md:right-4 gap-4">
              <DarkModeButton/>
              <div className="max-md:hidden">
                <GithubButton/>
              </div>
          </div>
        </div>
      </nav>
      {/* <div className="mt-[76px] dark:bg-darkBg bg-bg">
        <Outlet/>
      </div> */}
    </>
  )
}