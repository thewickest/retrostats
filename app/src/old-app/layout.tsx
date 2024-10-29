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
              {children}
            </div>
          </div>
        </body>
      </html>
      
    )
  }