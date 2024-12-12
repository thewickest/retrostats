'use client'

import { useSession } from 'next-auth/react'
import { SignIn } from "src/components/auth/auth-components";
import Dropdown from 'src/components/header/Dropdown';

export default function LoginButton() {
  const { data: session } = useSession()

  if(!session?.user) return <SignIn />
  
  const items = [
    {name: 'Profile', link: '/profile'},
    {name: 'Sign Out', link: '/api/auth/signout'}
  ]

  return (
    <>
      <Dropdown items={items} position={'left'}>
        <div
          style={{
            backgroundImage: `url(${session?.user?.image ?? ''})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer"
          }}
          className='rounded-base border-2 border-border dark:border-darkBorder bg-white dark:bg-secondaryBlack
          shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY
          hover:shadow-none dark:hover:shadow-none h-9 w-9 sm:h-12 sm:w-12'>
        </div>
      </Dropdown>
    </>
  )
}