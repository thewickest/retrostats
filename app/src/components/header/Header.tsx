import { Link, Outlet } from "react-router-dom";

export default function Header () {
  return (
    <>
      <nav className="left-0 top-0 z-20 mx-auto flex h-[76px] w-full border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-darkNavBg p-4 m500:h-16 ">
        <div className="mx-auto flex w-[1300px] text-text max-w-full items-center justify-center grid grid-cols-3">
          <div className="flex justify-center">
            <Link className="text-4xl font-heading m500:text-xl" to="/">RETROSTATS</Link>
          </div>
          <div className="flex items-center justify-center">
            <Link className="text-xl font-base" to="/leaderboard">Leaderboard</Link>
          </div>
          <div className="flex justify-center"></div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}