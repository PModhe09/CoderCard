'use server'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import grabUsername from '../../actions/grabUsername'
import UserNameForm from '@/components/Forms/UserNameForm'
import { redirect } from 'next/navigation'
import { UserPage } from '../../models/UserPage'
import mongoose from 'mongoose'
import CardSettings from '@/components/Forms/CardSettings'

const AccountPage = async({searchParams}) => {
    const session = await getServerSession(authOptions);
    const desiredUsername = searchParams.desiredUsername;
    if(!session){
      redirect('/')
    }
   // console.log(req);
  // console.log(2)
   mongoose.connect(process.env.MONGODB_URI)
   const card = await UserPage.findOne({pageOf:session?.user?.email})
   if(card){
    return(
      <CardSettings card={card} user={session.user}/>
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
