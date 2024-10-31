import { LuGithub } from "react-icons/lu";

export default function GithubButton() {
  return (
    <button
      onClick={()=> window.open('https://github.com/thewickest/retrostats','_blank', 'noreferrer')}
      className="flex text-text cursor-pointer items-center rounded-base 
      border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-sm
      font-base shadow-light dark:shadow-dark transition-all dark:text-darkText
      hover:translate-x-boxShadowX
      hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none
      h-9 w-9 sm:h-12 sm:w-12"
    >
      <div className="flex items-center mx-auto">
        <LuGithub className="h-4 w-4 sm:h-6 sm:w-6"></LuGithub>
      </div>
    </button>
  )
}