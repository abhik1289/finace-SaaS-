import Image from 'next/image'
import React from 'react'

export default function HeaderLogo() {
  return (
    <div className=" hidden lg:flex gap-x-3 items-center">
       <div className="image">
       <Image width={28} height={28} alt="log" src="logo.svg" />
       </div>
       <div className="text-white font-semibold">
        Finance
       </div>
    </div>
  )
}
