export default function ScoreBoardLoading() {
  return (
    <>
      <div className="animate-pulse space-y-3 border-2 border-border dark:border-darkBorder rounded-base bg-white
        dark:bg-secondaryBlack p-5 font-base">
        {
          [...Array(11)].map(()=> (
            <div className="rounded-base border-2 shadow dark:border-darkBorder h-10 place-content-center">
              <div className="w-full items-center text-text p-2">
                <div className="grid grid-cols-10 gap-2 justify-items-strech items-center">
                  <div className="col-span-1 text-start">
                    <div className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div className="col-span-2 max-sm:col-span-4 text-center">
                    <div className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div className="col-span-2 text-center max-sm:hidden">
                    <div className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div className="col-span-2 text-center max-sm:hidden">
                    <div className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div className="col-span-3 max-sm:col-span-5 text-center">
                    <div className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}