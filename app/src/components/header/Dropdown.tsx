'use client'

import { ChevronDown } from 'lucide-react'

import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Dropdown({
  items,
  text,
}: {
  items: { name: string; link: string }[]
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
        className="flex text-text cursor-pointer items-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-2 text-sm font-base shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {text}
          <ChevronDown
            className={
              'h-5 w-5 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        className="absolute left-0 w-[160px] group-data-[state=open]:top-20 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-base border-2 border-border dark:border-darkBorder text-center font-base shadow-light dark:shadow-dark transition-all"
      >
        {items.map((item, index) => {
          return (
            <Link key={index} to={item.link} className="block w-full border-b-2 border-border dark:border-darkBorder bg-main px-7 py-3 no-underline first:rounded-t-base last:rounded-b-base hover:bg-mainAccent">
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}