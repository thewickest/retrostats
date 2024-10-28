import { Metadata } from "next"
import '../index.css'

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
          <div id="root">{children}</div>
        </body>
      </html>
      
    )
  }