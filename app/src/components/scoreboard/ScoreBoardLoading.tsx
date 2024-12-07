export default function ScoreBoardLoading() {
  return (
    <>
      <div className="animate-pulse space-y-3 border-2 border-border dark:border-darkBorder rounded-base bg-white
        dark:bg-secondaryBlack p-5 font-base">
        {
          [...Array(11)].map(()=> (
            <div key={Math.random()} className="rounded-base border-2 shadow dark:border-darkBorder h-10 place-content-center">
              <div key={Math.random()} className="w-full items-center text-text p-2">
                <div key={Math.random()} className="grid grid-cols-10 gap-2 justify-items-strech items-center">
                  <div key={Math.random()} className="col-span-1 text-start">
                    <div key={Math.random()} className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div key={Math.random()} className="col-span-2 max-sm:col-span-4 text-center">
                    <div key={Math.random()} className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div key={Math.random()} className="col-span-2 text-center max-sm:hidden">
                    <div key={Math.random()} className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div key={Math.random()} className="col-span-2 text-center max-sm:hidden">
                    <div key={Math.random()} className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
                  </div>
                  <div key={Math.random()} className="col-span-3 max-sm:col-span-5 text-center">
                    <div key={Math.random()} className="h-2 bg-bg dark:bg-darkBg rounded-full"></div>
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