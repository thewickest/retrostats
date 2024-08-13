import { ClassValue } from "clsx";
import { cn } from "../../lib/utils"; 
import React from "react";

type Props = {
  className?: ClassValue
  tabsArray: string[]
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs({ className, tabsArray, activeTab, setActiveTab }: Props) {
  return (
    <div
      style={{
        gridTemplateColumns: Array(tabsArray.length)
          .fill('x')
          .map((tab: any) => '1fr')
          .join(' '),
      }}
      className={cn('grid rounded-base text-sm sm:text-base', className)}
    >
      {tabsArray.map((tab, index) => {
        const bg = activeTab === tab ? 'bg-mainAccent' : 'bg-main'
        return (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer text-text border-2 border-border py-2 text-center font-bold transition-colors first:rounded-ss-base last:rounded-se-base ${bg}`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
