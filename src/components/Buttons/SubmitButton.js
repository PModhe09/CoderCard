import {useFormStatus} from 'react-dom'
export default function SubmitButton({children}){
    const {pending}= useFormStatus();
    return(
        <button type='submit' disabled={pending} className='bg-green-400 disabled:bg-blue-100 disabled:text-slate-800 m text-white py-2 px-3 block mx-auto w-full  gap-2 items-center justify-center'>
        {pending && (
            <span>Saving...</span>
        )}
        {!pending && (
            children
        )}
        
        </button>
    )
    
}