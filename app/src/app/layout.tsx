import { Metadata } from "next"
import '../index.css'
import Header from "src/components/header/Header"

export const metadata: Metadata = {
    title: 'RetroStats',
    description: 'Leaderboard website for Arcade Games',
    // themeColor: '#000000'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
        <body>
          <Header />
          <div id="root">
            <div className="mt-[76px] dark:bg-darkBg bg-bg">
              <div className="flex flex-col items-center w-10/12 sm:w-8/12 md:w-10/12
              lg:w-8/12 xl:w-5/12 p-4 mt-4 mx-auto text-text dark:text-darkText">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
      
    )
  }