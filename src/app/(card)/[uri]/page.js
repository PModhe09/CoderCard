import Image from "next/image";
import Link from "next/link";
import mongoose from "mongoose";

import { UserPage } from "@/app/models/UserPage";
import { User } from "@/app/models/UserSchema";

import { SiGithub } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { RxGlobe } from "react-icons/rx";
import { SiPeerlist } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";

export default async  function Card({params}){
    const username = params.uri;
    mongoose.connect(process.env.MONGODB_URI);
    const card = await UserPage.findOne({username});
    const user = await User.findOne({email:card.pageOf});
    function Capitalise(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
     console.log(user);
     console.log(card);
    return(
        <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-10 mt-10 py-10 rounded-2xl">
            <div className="h-40 w-400 bg-cover bg-center rounded-2xl" style={card.coverType === 'color' ? {backgroundColor:card.coverColor}:{backgroundImage:`url($(card.coverImage))`}}>
            </div>
            <div>
              <div className="w-36 h-36 mx-auto relative -top-14">
                <Image alt="profile picture" width={256} height={256} src={user.image} className="rounded-full w-full h-full object-cover"/>
              </div>
              <h2 className="text-4xl text-center"><span className="bg-gray-100 ml-auto p-2 rounded-lg">{card.cardOwnerDisplayName}</span></h2>
              <h3 className="max-w-xs mx-auto text-center my-2 bg-gray-200 mt-10 p-1 rounded-lg  text-xl">{card.bio}</h3>
            </div>
            

            <div className="flex gap-2 mt-20  justify-center">
  {
  Object.keys(card.profileLinks).map((key, index) => (
    <span key={index} className="flex items-center bg-gray-200 p-2 rounded-2xl  hover:shadow-2xl hover:shadow-gray-300">
      {/* {console.log(card.profileLinks[key])} */}
      {/* You can render the value or perform other operations here */}
      {
        key === 'github' ?
          <SiGithub />
          :
          key === 'leetcode' ?
            <SiLeetcode />
            :
          key === 'codechef'?
            <SiCodechef/>
            :
            key === 'codeforces'?
            <SiCodeforces/>
            :
            key === 'codestudio'?
            <SiCodingninjas/>
            :
            key === 'atcoder'?
            <RxGlobe/>
            :
            key === 'peerlist'?
            <SiPeerlist/>
            :
            key === 'linkedin'?
            <AiOutlineLinkedin/>
            :
            null
          
      }
      <Link target="_blank" href={card.profileLinks[key]} className="ml-2 text-lg">{Capitalise(key)}</Link>
    </span>
  ))
}

</div>
        </div>
    )
}