export default function SideNav() {
  return (
    <div>
      <aside id="default-sidebar" className="scrollbar bg-white dark:bg-darkNavBg h-[100svh] max-h-[calc(100svh-76px)] w-[250px] border-r-4 border-border m900:hidden"aria-label="Sidebar">
        <a className="block border-b-4 border-border p-4 text-lg font-base text-text hover:bg-main" href="/">Sessions</a>
        <a className="block border-b-4 border-border p-4 text-lg font-base text-text hover:bg-main" href="/">LeaderBoard</a>
        <a className="block border-b-4 border-border p-4 text-lg font-base text-text hover:bg-main" href="/">Games</a>
      </aside>
    </div>
  )
}