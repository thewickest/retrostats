import React from "react";


export default function ScoreboardHeader({ onClick, dir, setDir }: {onClick: Function, dir: string, setDir: any}) {

  return (
    <div data-state={'open'}
    className="rounded-base overflow-x-hidden border-2 border-border
    dark:border-darkBorder shadow-light dark:shadow-dark bg text-text dark:bg-secondaryBlack dark:text-darkText">
        <div className="grid grid-cols-10 gap-2 justify-items-strech items-center">
            {/**TODO Change the username */}
            <button className="col-span-3 max-sm:col-span-5 text-center" onClick={()=> { 
                onClick('name')
                setDir(dir === 'desc' ? 'asc' : 'desc')
              }}>
              Name
            </button>
            <button className="col-span-2 text-center max-sm:hidden" onClick={()=> {
                onClick('duration')
                setDir(dir === 'desc' ? 'asc' : 'desc')
            }}>
              Duration
            </button>
            <button className="col-span-2 text-center max-sm:hidden" onClick={()=> {
                onClick('initDate')
                setDir(dir === 'desc' ? 'asc' : 'desc')
              }}>
              Date session
            </button>
            <button className="col-span-3 max-sm:col-span-5 text-center" onClick={()=> {
                onClick('score')
                setDir(dir === 'desc' ? 'asc' : 'desc')
            }}>
              Score
            </button>
        </div>
    </div>
  )
}