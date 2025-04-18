import { auth } from "auth"
import { SignOut, SignIn } from "src/components/auth/auth-components"
import Icon from "../icon/Icon"

export default async function SignInButton() {
  const session = await auth()
  if(!session?.user) return (<SignIn />)
  return (
    <>
      <Icon imageUrl={session.user?.image ?? ''}></Icon>
      <SignOut/>
    </>
  )
} 