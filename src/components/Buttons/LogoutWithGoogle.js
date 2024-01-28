'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

const LogoutWithGoogle = () => {
  return (
    <button className='border gap-2 p-2 flex items-center px-4 shadow' onClick={()=>signOut()}>
        Log Out from Google
    </button>
  )
}

export default LogoutWithGoogle
