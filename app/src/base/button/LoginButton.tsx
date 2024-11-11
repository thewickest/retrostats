import { LuMoon, LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";

export default function LoginButton() {

  return (
    <Link href='/profile'>
      <Button>Profile</Button>
    </Link>
  )
}