// import { auth } from "auth";
import { useSession } from 'next-auth/react'
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import { SignIn, SignOut } from "src/components/auth/auth-components";
import LoginPicture from "../icon/LoginPicture";
import Icon from '../icon/Icon';
import { auth } from 'auth';
// import * as authOptions from 'src/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import { useEffect, useState } from 'react';

export default function LoginButton() {
  const { data: session, status } = useSession()
  // const session = await auth()
  // const [ session, setSession ]: any = useState()

  // useEffect(() => {
  //   console.log('session', session)
  //   const getSession = async () => {
  //      const s = await getServerSession(auth)
  //      setSession(s)
  //   }
  //   getSession()
  // }, [])

  if(!session?.user) return (<SignIn provider="github"/>)

  return (
    // <Link href='/profile'>
    //   <button
    //     aria-label="Click to perform an action"
    //     className="flex text-text items-center rounded-base 
    //     border-2 border-border dark:border-darkBorder text-sm
    //     font-base shadow-light dark:shadow-dark transition-all 
    //     hover:translate-x-boxShadowX
    //     hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none
    //     h-9 w-9 sm:h-12 sm:w-12"
    //   >
    //     <div className="flex items-center mx-auto">
    //       <LuUser className="h-4 w-4 sm:h-6 sm:w-6 text-text dark:text-darkText"/>
    //     </div> 
    //   </button>
    // </Link>
    <>
      {/* <LoginPicture imageUrl={session?.user?.image ?? ''}></LoginPicture> */}
      <Icon imageUrl={session?.user?.image ?? ''}></Icon>
      <SignOut></SignOut>
    </>
  )
}