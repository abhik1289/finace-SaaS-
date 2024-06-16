"use client"

import { useUser } from "@clerk/nextjs"

export default function WelcomeMessage() {
    const {user} = useUser();
    // console.log(user)
  return (
    <div className="space-y-2 mb-4">
        <h1 className="text-2xl lg:text-4xl font-medium text-white">Welcome Back {user && user.firstName}  </h1>
        <p className="text-sm lg:text-base text-slate-300">This is your Financial overview report</p>
    </div>
  )
}
