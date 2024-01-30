'use server'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import grabUsername from '../../actions/grabUsername'
import UserNameForm from '@/components/Forms/UserNameForm'
import { redirect } from 'next/navigation'
import { UserPage } from '../../models/UserPage'
import mongoose from 'mongoose'

const AccountPage = async({searchParams}) => {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams.desiredUsername;
    if(!session){
      redirect('/')
    }
   // console.log(req);
   mongoose.connect(process.env.MONGODB_URI)
   const card = await UserPage.findOne({pageOf:session?.user?.email})
   if(card){
    return(
      <div>Ur page is {card.username}</div>
    )
   }
  return (
    <div>
      {session.user.name}
      account : {desiredUsername}
      <UserNameForm desiredUsername={desiredUsername}/>
    </div>
  )
}

export default AccountPage
