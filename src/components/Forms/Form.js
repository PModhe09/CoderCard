'use client'
import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation';

const Form = () => {
    const [userName,setuserName] = useState('');

    useEffect(()=>{
        if('localStorage' in window && window.localStorage.getItem('desiredUsername')){
            const u_name = window.localStorage.getItem('desiredUsername');
            window.localStorage.removeItem('desiredUsername');
            redirect('/account?desiredUsername='+u_name);
        }
    },[])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        const inputVal = form.querySelector('input');
        const username = inputVal.value;
        if(username.length > 0){
            window.localStorage.setItem('desiredUsername', username);
            await signIn('google');
        }
        console.log({userName})
    }
  return (
    <form  onSubmit={handleSubmit} className="inline-flex items-center shadow-lg shadow-green-500">
            <span className="bg-white py-4 pl-4">
              codecard.com/
            </span>
            {/* focus:border-blue-20 focus:ring focus:ring-blue-2 */}
            <input value={userName} onChange={e=>setuserName(e.target.value)} type="text" className="py-4 focus:outline-none 0" placeholder="your-username"/>
            <button type="submit" className="bg-green-500  text-white py-4 px-6 rounded-lg">
              Get Started
            </button>
         </form>
  )
}

export default Form
