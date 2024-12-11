import { signIn, signOut } from "auth"
import Button from "src/base/button/Button"

export function SignIn({
  provider
}: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(provider)
      }}
    >
      <Button>Sign In</Button>
    </form>
  )
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className="w-full"
    >
      <Button>
        Sign Out
      </Button>
    </form>
  )
}