'use client'

// import { ChevronDown } from 'lucide-react'
import { LuChevronDown, LuGithub } from "react-icons/lu";

import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown({
  items,
  extraItems,
  text,
}: {
  items: { name: string; link: string }[]
  extraItems: { name: string; link: string, icon: any }[]
  text: string
}) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)

  return (
    <div
      data-state={isActiveDropdown ? 'open' : 'closed'}
      className="relative group text-text"
    >
      <button
        aria-haspopup="listbox"
        aria-expanded={isActiveDropdown}
        onBlur={() => {
          setIsActiveDropdown(false)
        }}
        onClick={() => {
          setIsActiveDropdown(!isActiveDropdown)
        }}
        className="flex text-text cursor-pointer items-center rounded-base
        border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack text-sm
        font-base shadow-light dark:shadow-dark transition-all
        hover:translate-x-boxShadowX hover:translate-y-boxShadowY
        hover:shadow-none dark:hover:shadow-none h-9 w-9 sm:h-12 sm:w-12"
      >
        <div className="mx-auto flex items-center">
          {text}
          <LuChevronDown
            className={
              'h-4 w-4 sm:h-6 sm:w-6 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out dark:text-darkText'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        className="absolute left-0 w-[160px] group-data-[state=open]:top-12 sm:group-data-[state=open]:top-16
        group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible
        group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0
        group-data-[state=open]:visible text-center font-base transition-all"
      >
        {items.map((item, index) => {
          return (
            <Link key={index} to={item.link} 
              className="block w-full border-2 border-border dark:border-darkBorder
              bg-main hover:bg-mainAccent px-7 py-3 no-underline rounded-base mb-2 
              shadow-light dark:shadow-dark duration-300">
              {item.name}
            </Link>
          )
        })}
        <hr className="mb-1 h-1 border-t-0 border-black rounded-sm bg-black" />
        {extraItems && extraItems.map((item, index) => {
          return (
            <>
              <Link key={index} to={item.link} target="_blank"
              className="block w-full border-2 border-border dark:border-darkBorder
              bg-main hover:bg-mainAccent px-7 py-3 no-underline rounded-base mb-2 
              shadow-light dark:shadow-dark duration-300">
                <div className="flex justify-center items-center">
                  {item.icon}
                  {item.name}
                </div>
            </Link>
            </>
          )
        })}
      </div>
    </div>
  )
}