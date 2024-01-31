'use client'
import RadioTogglers from "../CardPageItems/RadioTogglers";
import Image from "next/image";
import SubmitButton from "../Buttons/SubmitButton";
import { grabCardOwnerInfo } from "@/app/actions/grabCardOwnerInfo";

export default   function CardSettings({card,user}){
    const saveCardOwnerInfo=async(formData)=>{
       console.log(formData.get('cardOwnerDisplayName'));
       console.log(formData.get('currentLocation'));
       console.log(formData.get('bio'));
        //console.log(formData);
        
        const res = await grabCardOwnerInfo(formData);
        console.log({res});
        console.log('carowner');
    }
    return(
       <div className="-m-4">
          <form action={saveCardOwnerInfo}>
            <div className="bg-gray-200 h-32 flex justify-center items-center">
             <RadioTogglers options={[
                {name:'color',label:'Color'},
                {name:'image',label:'Label'},
             ]} selected="" onChange={()=>{}}/>
            </div>
              
            <div className="flex justify-center">
                <Image
                    className='rounded-full relative -top-8'
                    alt={'Profile Picture'}
                    src={user?.image}
                    width={128}
                    height={128}
                />
            </div>
            <div className="p-4">
                <label className="card-input-user-info">Enter your Name</label>
                <input type="text" id="cardOwnerDisplayName" name="cardOwnerDisplayName" defaultValue={user?.name} placeholder="Enter your Name"/>
                <label className="card-input-user-info">Location</label>
                <input type="text" id="currentLocation" name="currentLocation" defaultValue={user?.location} placeholder="Enter your current Location"/>
                <label className="card-input-user-info">Bio</label>
                <textarea name="bio" id="bio" defaultValue={user?.bio} placeholder="Write your Bio"/>
                <input/>
                <div className="max-w-[200px] mx-auto">
                  <SubmitButton>
                      <span>SAVE</span>
                  </SubmitButton>
                </div>
            </div>
          </form>
       </div>
    )
}