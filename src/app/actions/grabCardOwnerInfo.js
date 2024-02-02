'use server'
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { UserPage } from "../models/UserPage";

export async function grabCardOwnerInfo(formData){
    await mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
   // console.log(10,session);
    
    if(session){
        const dataKeys=[
            'cardOwnerDisplayName',
            'currentLocation',
            'bio',
            'coverType',
            'coverColor',
            'coverImage',
        ]
    

    const dataToUpdate={};
    for(const key of dataKeys){
        if(formData.has(key)){
            dataToUpdate[key]=formData.get(key);
        }
    }
    console.log(9,dataToUpdate)
      
        await UserPage.updateOne(
            {pageOf:session?.user?.email},
            dataToUpdate,
        )
        return true;
    }

    return false
}