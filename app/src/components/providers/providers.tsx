'use client'
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export default function Providers({children}: {children: any}) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider attribute='class'>
          {children}
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}