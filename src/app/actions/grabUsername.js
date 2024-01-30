'use server'
import mongoose from "mongoose";
import { UserPage } from "../models/UserPage";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default  async function  grabUsername(formData){
    const username  = formData.get('username');
     mongoose.connect(process.env.MONGODB_URI);
     const isExistUserPage = await UserPage.findOne({username:username});
     if (isExistUserPage){
     // console.log(error);
     return false;
      //return  redirect('/account?usernameTaken=1');
      //return JSON.parse(JSON.stringify(UserPageDoc));     
     }
     else {
      const session = await getServerSession(authOptions);
      return await UserPage.create({username:username,pageOf:session?.user?.email});
     // return redirect('/account/'+username);
     }

   }