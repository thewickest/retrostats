import { LuChevronDown } from "react-icons/lu";

export default function DropDownButton() {
  return (
    <div className="flex text-text cursor-pointer items-center rounded-base
      border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-sm
      font-base shadow-light dark:shadow-dark transition-all
      hover:translate-x-boxShadowX hover:translate-y-boxShadowY
      hover:shadow-none dark:hover:shadow-none h-9 w-9 sm:h-12 sm:w-12">
        <div className="flex mx-auto items-center">
          <LuChevronDown className='h-4 w-4 sm:h-6 sm:w-6 transition-transform group-data-[state=open]:rotate-180
            group-data-[state=closed]:rotate-0 ease-in-out dark:text-darkText'/>
        </div>
    </div>
  )
}