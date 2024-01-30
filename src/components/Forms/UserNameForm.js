'use client'
import grabUsername from "@/app/actions/grabUsername";
import { redirect } from "next/navigation";
import { useState } from "react";
import {useFormState} from 'react-dom'
import SubmitUsernameButton from "../Buttons/SubmitUsernameButton";

function UserNameForm({desiredUsername}){
    const [taken,setTaken] = useState(false);
    // const [isLoading,setLoading] = useState(false);
    const handleSubmit=async(formData)=>{
        // setLoading(true);
        const res = await grabUsername(formData);
        console.log(16,res);
        // setLoading(false);
        setTaken(res===false);
        
        if(res){
            redirect('/account?created='+formData.get('username'));
        }
        
    }
    const [state] = useFormState(grabUsername);
    console.log({state});
    return(
        <form action={handleSubmit}>
        <h1 className='text-4xl font-bold text-center mb-2'>Grab your username</h1>
        <p className='text-center mb-6 text-gray-500'>
            Choose your username
        </p>
        <div className='max-w-xs mx-auto'>
           <input type='text' name='username' placeholder='username' className='block p-2 mx-auto border-2 text-center' defaultValue={desiredUsername}/>
           {/* {
            location.href.includes('usernameTaken') && (
                <div className="bg-red-200 border-red-5000 p-2 mb-2 text-center">
                   Username taaken
                </div>
            )
           } */}
           <SubmitUsernameButton>Claim your username</SubmitUsernameButton>
        </div>
      </form>
    )
}
export default UserNameForm;