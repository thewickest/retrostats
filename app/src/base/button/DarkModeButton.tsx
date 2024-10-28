import { LuMoon, LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function DarkModeButton() {
  const [isDark, setIsDark] = useState(true);

  useEffect(()=>{
    if(isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  },[isDark])

  return (
    <button
      onClick={()=> setIsDark(!isDark)}
      className="flex text-text cursor-pointer items-center rounded-base 
      border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-sm
      font-base shadow-light dark:shadow-dark transition-all 
      hover:translate-x-boxShadowX
      hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none
      h-9 w-9 sm:h-12 sm:w-12"
    >
      <div className="flex items-center mx-auto">
        {!isDark && <LuMoon className="h-4 w-4 sm:h-6 sm:w-6"></LuMoon> }
        {!!isDark && <LuSun className="h-4 w-4 sm:h-6 sm:w-6 dark:text-darkText"></LuSun>}
      </div>
    </button>
  )
}