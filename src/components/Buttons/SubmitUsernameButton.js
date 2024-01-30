import {useFormStatus} from 'react-dom'
export default function SubmitUsernameButton({children}){
    const {pending}= useFormStatus();
    return(
        <button type='submit' disabled={pending} className='bg-green-400 disabled:bg-blue-100 disabled:text-slate-800 text-white py-2 px-3 block mx-auto'>{children}</button>
    )
    
}