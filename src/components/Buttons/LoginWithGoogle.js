'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {signIn} from 'next-auth/react';

const LoginWithGoogle  = () => {
  return (
    <button onClick={()=>signIn('google')} className='bg-white shadow-md flex gap-4 justify-center text-black text-center w-full py-4'>
            <span>Sign In</span>
            <FontAwesomeIcon icon="fa-brands fa-twitter" className='w-6'/>
    </button>
  )
}

export default LoginWithGoogle;
