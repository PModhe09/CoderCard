import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle';
import React from 'react'


const SignIn = () => {
  return (
    <div>
      <div className='bg-white border p-4 max-w-xs mx-auto mt-5'>
        <h1 className='text-4xl font-bold text-center mb-6'>
            Sign In
        </h1>
        <LoginWithGoogle/>
      </div>
    </div>
  )
}

export default SignIn;
