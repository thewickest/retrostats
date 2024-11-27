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
            <div className="mt-[76px] dark:bg-darkBg bg-bg text-text dark:text-darkText">
              <div className="flex flex-col items-center w-12/12 sm:w-10/12 xl:w-6/12 p-4 mt-4 mx-auto text-text dark:text-darkText">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
      
    )
  }