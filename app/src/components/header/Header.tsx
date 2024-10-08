import { Link, Outlet } from "react-router-dom";
import Dropdown from "./Dropdown";
import DarkModeButton from "../../base/button/DarkModeButton";

export default function Header () {
  return (
    <>
      <nav className="left-0 top-0 z-20 mx-auto flex fixed h-[76px] w-full
        border-b-4 border-border dark:border-darkBorder bg-white
        dark:bg-secondaryBlack p-4 m500:h-16">
        <div className="mx-auto flex w-[1300px] text-text dark:text-darkText max-w-full items-center
          justify-center md:grid md:grid-cols-3">
          <div className="md:hidden fixed top-4 left-4">
            <Dropdown text={''} items={[{name: 'Leaderboard', link: '/leaderboard'}]}></Dropdown>
          </div>
          <div className="flex justify-center max-md:grow">
            <Link className="text-4xl font-heading max-md:text-xl" to="/">RETROSTATS</Link>
          </div>
          <div className="flex items-center justify-center max-md:hidden">
            <Link className="text-xl font-base" to="/leaderboard">Leaderboard</Link>
          </div>
          <div className="md:flex md:justify-end max-md:fixed max-md:top-4 max-md:right-4">
            <DarkModeButton/>
          </div>
        </div>
      </nav>
      <div className="mt-[76px] dark:bg-darkBg bg-bg">
        <Outlet/>
      </div>
    </>
  )
}