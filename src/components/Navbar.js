import React from 'react'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import LogoutWithGoogle from './Buttons/LogoutWithGoogle'
import Image from 'next/image'

const Navbar = async() => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="bg-white border-b py-4 shadow-green-500 shadow-lg">
        <div className='max-w-4xl flex justify-between mx-auto'>
        <div className="flex gap-60 px-6">
           <div className='flex gap-2 items-center border-b-2 p-2 rounded-lg shadow-green-500 shadow-lg'>
           <Link href={'/'} className='font-black'>
           <Image src={`/codecard.jpg`} alt="CodeCard logo" width="38" height="38" className='rounded-lg'/> 
           </Link>
           <Link href={'/'} className='font-lg'><span>CodeCard</span></Link>
           
           </div>
           
           <nav className='flex gap-5 text-blue-900 text-md items-center'>
              <Link href={'/pricing'}>Pricing</Link>
              <Link href={'/about-us'}>About</Link>
           </nav>
        </div>
        <nav className="flex gap-4 items-center text-md text-blue-900">
        {
          !!session && (
            <>
            <Link href={'/account'}>
              Hi, {session.user.name}
            </Link>
            <LogoutWithGoogle/>
            </>
          )
        }
        {
          !session && (
            <>
               <Link href={'/sign-in'}>Sign In</Link>
               <Link href={'/sign-up'}>Sign Up</Link>
            </>
          )
        }
          
        </nav>
        </div>
       </header>
  )
}

export default Navbar
