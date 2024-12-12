
// I will leave this just in case some day i need more configs

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   theme: { logo: "https://authjs.dev/img/logo-sm.png" },
//   providers: [
//     GitHub,
//     Google,
//   ],
//   callbacks: {
//     authorized({ request, auth }) {
//       const { pathname } = request.nextUrl
//       if (pathname === "/middleware-example") return !!auth
//       return true
//     },
//     jwt({ token, trigger, session, account }) {
//       if (trigger === "update") token.name = session.user.name
//       if (account?.provider === "keycloak") {
//         return { ...token, accessToken: account.access_token }
//       }
//       return token
//     },
//     async session({ session, token }) {
//       if (token?.accessToken) session.accessToken = token.accessToken

//       return session
//     },
//   },
//   experimental: { enableWebAuthn: true },
// })

// declare module "next-auth" {
//   interface Session {
//     accessToken?: string
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     accessToken?: string
//   }
// }

import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"

import Github from 'next-auth/providers/github'

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authConfig = {
  providers: [
    Github({
      clientId: process.env.NEXT_PUBLIC_AUTH_GITHUB_ID || '',
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GITHUB_SECRET || ''
    })
  ]
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authConfig)
}