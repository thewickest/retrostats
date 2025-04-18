import Link from "next/link";
import { LuUser } from "react-icons/lu";

export default function LoginButton() {

  return (
    <Link href='/profile'>
      <button
        aria-label="Click to perform an action"
        onClick={() => {}}
        className="flex text-text items-center rounded-base 
        border-2 border-border dark:border-darkBorder text-sm
        font-base shadow-light dark:shadow-dark transition-all 
        hover:translate-x-boxShadowX
        hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none
        h-9 w-9 sm:h-12 sm:w-12"
      >
        <div className="flex items-center mx-auto">
          <LuUser className="h-4 w-4 sm:h-6 sm:w-6 text-text dark:text-darkText"/>
        </div>
      </button>
    </Link>
  )
}