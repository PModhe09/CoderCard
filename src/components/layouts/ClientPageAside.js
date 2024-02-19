'use client'
import Link from "next/link"
import LogoutWithGoogle from "../Buttons/LogoutWithGoogle"
import { useRouter } from "next/router"
import { usePathname } from "next/navigation";
export default function ClientPageAside(){
    const path = usePathname();
    console.log(path);
    return(
        <nav className="flex flex-col text-center mt-20 gap-4">
                   <Link href={'/account'} className={"flex gap-4 mx-auto"+ (path==='/account' ? 'flex gap-4 mx-auto text-xl text-white bg-green-400 rounded-full p-2':'')}><span>My Card</span></Link>
                   <Link href={'/analytics'} className={"flex gap-4 mx-auto"+ (path==='/analytics' ? 'flex gap-4 mx-auto text-xl text-white bg-green-400 rounded-full p-2 ':'')}><span>Analytics</span></Link>
                   {/* <button type="button" className="flex gap-4" onClick={()=>{}}>
                    <span>Logout</span>
                   </button> */}
                   <LogoutWithGoogle className={'flex gap-4 items-center'}/>
                   <Link href={'/'}>Home</Link>
            </nav>
    )
}