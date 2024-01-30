'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutWithGoogle = ({className='flex items-center gap-2 border p-2 px-4 shadow'}) => {
  return (
    <button className={className} onClick={()=>signOut()}>
        Log Out from Google
    </button>
  )
}

export default LogoutWithGoogle
