'use client'
import RadioTogglers from "../CardPageItems/RadioTogglers";
import Image from "next/image";
import SubmitButton from "../Buttons/SubmitButton";
import { grabCardOwnerInfo } from "@/app/actions/grabCardOwnerInfo";
import toast from "react-hot-toast";
import { useState } from "react";

export default   function CardSettings({card,user}){
    const [coverType,setCoverType] = useState(card.coverType);
    const [coverColor,setColor] = useState(card.coverColor);
    const [coverImage,setCoverImage] = useState(card.coverImage);
    const saveCardOwnerInfo=async(formData)=>{
       console.log(formData.get('cardOwnerDisplayName'));
       console.log(formData.get('currentLocation'));
       console.log(formData.get('bio'));
        //console.log(formData);
        
        const res = await grabCardOwnerInfo(formData);
        if(res===true){
            toast.success('Card Owner Details are saved!');
        }
        console.log({res});
        console.log('carowner');
    }

    const handleFileSubmit=(event)=>{
        const file = event.target.files?.[0];
        console.log(file);
        if(file){
            const data = new FormData;
            data.set('file',file);
            fetch('/api/upload',{
                method:'POST',
                body:data,
            }).then(response=>{
                response.json().then(link=>{
                    //console.log(link);
                    setCoverImage(link);
                })
            })
        }
    }
    return(
       <div className="-m-4">
          <form action={saveCardOwnerInfo}>
            <div className="bg-gray-200 py-16 flex justify-center items-center" style={
              coverType === 'color'
                ? {backgroundColor:coverColor}
                : {backgroundImage:`url(${coverImage})`}
            }>
            <div>
            <RadioTogglers defaultValue={card?.coverType}  options={[
                {value:'color',label:'Color'},
                {value:'image',label:'file'},
             ]} selected="" onChange={(val)=>{setCoverType(val)}}/>
             <input type="hidden" name="coverImage" value={coverImage} />
             {
                coverType === 'color' &&(
                    <div className="bg-white shadow-md text-gray-500 p-2 mt-2">
                    <div className="mt-2 flex justify-center gap-2">
                    <input type='color' name="coverColor" defaultValue={coverColor}  onChange={e=>setColor(e.target.value)}/>
                    <span> Pick color</span>
                    </div>
                    </div>
                )
             }
             {
                coverType === 'image' &&(
                    <div className="bg-white shadow-md text-gray-500 p-2 mt-2">
                    <div className="flex justify-center">
                     <label className='bg-white shadow px-4 py-4 mt-2'>
                     <input type='file' className="hidden" onChange={handleFileSubmit}/>
                     </label>
                    Pick Image
                    </div>
                    </div>
                )
             }
             
             
            </div>
             
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
                <input type="text" id="currentLocation" name="currentLocation" defaultValue={card?.currentLocation} placeholder="Enter your current Location"/>
                <label className="card-input-user-info">Bio</label>
                <textarea name="bio" id="bio" defaultValue={card?.bio} placeholder="Write your Bio"/>
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