'use client'
import { signOut } from 'next-auth/react'
import { FcGoogle } from "react-icons/fc";
import React from 'react'

const LogoutWithGoogle = () => {
  return (
    <button className='flex gap-2 mx-auto text-black justify-center items-center' onClick={()=>signOut()}>
        Log Out <FcGoogle/>
    </button>
  )
}

export default LogoutWithGoogle
