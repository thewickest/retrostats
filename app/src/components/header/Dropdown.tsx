'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Dropdown({
  items,
  children,
  position = 'right',
  extraItems,
}: {
  items: { name: string; link: string }[]
  children: any
  position?: 'left' | 'right'
  extraItems?: { name: string; link: string, icon: any }[]
}) {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false)
  const pos =  position === 'right' ? 'left-0' : 'right-0'

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
        className="flex text-text cursor-pointer items-center"
      >
        {children}
      </button>
      <div
        role="listbox"
        className={`absolute ${pos} w-[160px] group-data-[state=open]:top-12 sm:group-data-[state=open]:top-16
        group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible
        group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0
        group-data-[state=open]:visible text-center font-base transition-all`}
      >
        {items.map((item, index) => {
          return (
            <Link key={`${index}-items`} href={item.link} 
              className="block w-full border-2 border-border dark:border-darkBorder
              bg-main hover:bg-mainAccent px-7 py-3 no-underline rounded-base mb-2 
              shadow-light dark:shadow-dark duration-300">
              {item.name}
            </Link>
          )
        })}
        {extraItems && <hr className="mb-1 h-1 border-t-0 border-black rounded-sm bg-black" />}
        {extraItems && extraItems.map((item, index) => {
          return (
            <Link key={`${index}-extra`} href={item.link} target="_blank"
              className="block w-full border-2 border-border dark:border-darkBorder
              bg-main hover:bg-mainAccent px-7 py-3 no-underline rounded-base mb-2 
              shadow-light dark:shadow-dark duration-300">
                <div className="flex justify-center items-center">
                  {item.icon}
                  {item.name}
                </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}