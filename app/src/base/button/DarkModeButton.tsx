'use client'

import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const [ mounted, setMounted ] = useState(false)
  const { theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className="flex text-text cursor-pointer items-center rounded-base
        border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-sm
        font-base shadow-light dark:shadow-dark transition-all
        h-9 w-9 sm:h-12 sm:w-12"
      >
        <div className="flex items-center mx-auto">
          {/* 
              We decide to not show anything on first load. 
              Seems cleaner than render the moon and then show the sun if we are in dark mode
          */}
          {/* <LuMoon className="h-4 w-4 sm:h-6 sm:w-6 text-text dark:text-darkText"></LuMoon> */}
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex text-text cursor-pointer items-center rounded-base
      border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-sm
      font-base shadow-light dark:shadow-dark transition-all 
      hover:translate-x-boxShadowX
      hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none
      h-9 w-9 sm:h-12 sm:w-12"
    >
      <div className="flex items-center mx-auto">
        {theme === 'light' && <LuMoon className="h-4 w-4 sm:h-6 sm:w-6 text-text"></LuMoon> }
        {theme === 'dark' && <LuSun className="h-4 w-4 sm:h-6 sm:w-6 dark:text-darkText"></LuSun>}
      </div>
    </button>
  )
}