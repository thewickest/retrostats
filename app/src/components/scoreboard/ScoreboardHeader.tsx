import React, { useEffect } from "react";
import { LuChevronDown } from "react-icons/lu";

export default function ScoreboardHeader({ order, setOrder, dir, setDir }: {order: string, setOrder: Function, dir: string, setDir: any}) {

  useEffect(()=>{
    console.log('dir', dir)
  }, [dir])
  return (
    <div
    className="rounded-base overflow-x-hidden border-2 border-border
    dark:border-darkBorder shadow-light dark:shadow-dark bg text-text dark:bg-secondaryBlack dark:text-darkText overflow-hidden">
        <div className="grid grid-cols-10 gap-2 justify-items-strech items-center">
            <button className="flex justify-center col-span-3 max-sm:col-span-5 text-center" onClick={()=> { 
                setOrder('name')
                setDir(dir === 'desc' ? 'asc' : 'desc')
              }}>
              Name
              {order=='name' && <LuChevronDown
                className={
                  'h-6 w-6 transition-transform '+(dir==='desc' ? 'rotate-0': 'rotate-180')+' ease-in-out dark:text-darkText'
                }
                />
              }
            </button>
            <button className="flex justify-center col-span-2 text-center max-sm:hidden" onClick={()=> {
                setOrder('duration')
                setDir(dir === 'desc' ? 'asc' : 'desc')
            }}>
              Duration
              {order=='duration' && <LuChevronDown
                className={
                  'h-6 w-6 transition-transform '+(dir==='desc' ? 'rotate-0': 'rotate-180')+' ease-in-out dark:text-darkText'
                }
                />
              }
            </button>
            <button className="flex justify-center col-span-2 text-center max-sm:hidden" onClick={()=> {
                setOrder('initDate')
                setDir(dir === 'desc' ? 'asc' : 'desc')
              }}>
              Date session
              {order=='initDate' && <LuChevronDown
                className={
                  'h-6 w-6 transition-transform '+(dir==='desc' ? 'rotate-0': 'rotate-180')+' ease-in-out dark:text-darkText'
                }
                />
              }
            </button>
            <button className="flex justify-center col-span-3 max-sm:col-span-5 text-center" onClick={()=> {
                setOrder('score')
                setDir(dir === 'desc' ? 'asc' : 'desc')
            }}>
              Score
              {order=='score' && <LuChevronDown
                className={
                  'h-6 w-6 transition-transform '+(dir==='desc' ? 'rotate-0': 'rotate-180')+' ease-in-out dark:text-darkText'
                }
                />
              }
            </button>
        </div>
    </div>
  )
}