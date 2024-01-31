'use server'
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { UserPage } from "../models/UserPage";

export async function grabCardOwnerInfo(formData){
    await mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    console.log(10,session);
    for (const value of formData.values()) {
        console.log(value);
      }
      
    if(session){
        const cardOwnerDisplayName = formData.get('cardOwnerDisplayName');
        const currentLocation = formData.get('currentLocation');
        const bio = formData.get('bio');
        console.log(cardOwnerDisplayName+currentLocation+bio)
        await UserPage.updateOne(
            {pageOf:session?.user?.email},
            {cardOwnerDisplayName,currentLocation,bio},
        )
        return true;
    }
    return false
}