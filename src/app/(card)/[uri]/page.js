import Image from "next/image";
import Link from "next/link";
import mongoose from "mongoose";

import { UserPage } from "@/app/models/UserPage";
import { User } from "@/app/models/UserSchema";




export default async  function Card({params}){
    const username = params.uri;
    mongoose.connect(process.env.MONGODB_URI);
    const card = await UserPage.findOne({username});
    const user = await User.findOne({email:card.pageOf});
     console.log(user);
     console.log(card);
    return(
        <div className="">
            <div className="h-36  bg-cover bg-center" style={card.coverType === 'color' ? {backgroundColor:card.coverColor}:{backgroundImage:`url($(card.coverImage))`}}>
            </div>
            <div>
              <div className="w-36 h-36 mx-auto relative -top-14">
                <Image alt="profile picture" width={256} height={256} src={user.image} className="rounded-full w-full h-full object-cover"/>
              </div>
            </div>
            <h2 className="text-4xl text-center">{card.cardOwnerDisplayName}</h2>
            <h3 className="max-w-xs mx-auto text-center my-2">{card.bio}</h3>

            <div className="flex gap-2 justify-center">
  {
    Object.keys(card.profileLinks).map((key, index) => (
      <div key={index} className="">
        {console.log(card.profileLinks[key])}
        {/* You can render the value or perform other operations here */}
        <Link targe="_blank" href={card.profileLinks[key]} className="ml-6 bg-green-400 text-lg">{key}</Link>
      </div>
    ))
  }
</div>
        </div>
    )
}