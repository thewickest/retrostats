// import { handlers } from "../../../../../auth"
// export const { GET, POST } = handlers

// import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'

// import NextAuth from "next-auth"
// import type { NextAuthOptions } from "next-auth"

// export const authOptions: NextAuthOptions = {
//   providers: [
//     Github({
//       clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID || '',
//       clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET || ''
//     })
//   ]
// }

// export default NextAuth(authOptions)

import NextAuth from "next-auth"
import { authConfig } from 'auth'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }