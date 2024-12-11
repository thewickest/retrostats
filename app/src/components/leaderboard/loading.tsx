import { v4 as uuid } from 'uuid';

export default function Loading() {
  const elements = []
  for(let i=0; i<1; i++) {
    elements.push(
      <div key={uuid()} className="flex max-md:flex-wrap text-center p-2
      bg-white dark:bg-secondaryBlack border-2 rounded-base dark:border-darkBorder shadow">
      <div className="flex flex-auto w-1/3 max-md:w-full max-md:pb-1">
        {/* Image */}
        <div className="flex-none">
          <div className="rounded-full bg-bg dark:bg-darkBg h-8 w-8 md:h-12 md:w-12"></div>
        </div>
        {/* Game */}
        <div className="flex-auto place-content-center md:border-black items-center font-heading px-6">
          <div className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-auto w-2/3 max-md:w-full justify-around md:justify-between max-md:pt-1 md:p-2 text-text space-x-2 p-2">
        {/* Name */}
        <div className="place-content-center items-center w-min">
          <div className="h-2 w-24 bg-bg dark:bg-darkBg rounded-full"></div>
        </div>
        {/* Score */}
        <div className="place-content-center items-center w-min">
          <div className="h-2 w-16 bg-bg dark:bg-darkBg rounded-full"></div>
        </div>
      </div>
    </div>
    )
  }

  return (
    <>
      <div className="animate-pulse space-y-3 border-2 border-border dark:border-darkBorder rounded-base bg-white dark:bg-secondaryBlack p-5">
        {elements}
      </div>
    </>
  )
}