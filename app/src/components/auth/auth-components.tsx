// import { auth } from "auth"
import Link from "next/link"
import Button from "src/base/button/Button"

export function SignIn({
  provider
}: { provider?: string }) {
  return (
    <Link href='api/auth/signin'>
      <Button>Sign In</Button>
    </Link>
  )
}

export function SignOut() {
  return (
    <Link href='api/auth/signout'>
      <Button>
        Sign Out
      </Button>
    </Link>
  )
}