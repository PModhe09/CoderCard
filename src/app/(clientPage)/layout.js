import { Inter } from "next/font/google";
 import "../globals.css";
import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import LogoutWithGoogle from "@/components/Buttons/LogoutWithGoogle";
import ClientPageAside from "@/components/layouts/ClientPageAside";
import { FaRegAddressCard } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import mongoose from "mongoose";
import { UserPage } from "../models/UserPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function ClientPageLayout({ children }) {
    const session = await getServerSession(authOptions);

    if(!session){
        redirect('/');
    }

    mongoose.connect(process.env.MONGODB_URI)
    const card = await UserPage.findOne({pageOf:session?.user?.email})
    console.log(card)
  return (
    <html lang="en">
      <body className={inter.className}>
         <main className="flex min-h-screen">
             <aside className="bg-blue-100 max-w-md p-4">
                <div>
                <Image alt={'profile'} src={session.user.image} width={150} height={48} className="rounded-full"
                />
                {
                  card && (
                    <Link target="_blank" href={'/'+card.username} className="text-center text-black mx-auto font-semibold block mt-2 underline">
                      <span className="flex gap-1 justify-center items-center">
                      <FaRegAddressCard/>
                      codercard.com/{card.username}
                      </span>
                    </Link>
                  )
                }
                </div>
                <ClientPageAside/>
             </aside>
             
             <div className="grow">
               <div className="bg-white shadow w-full m-4 p-4">
               {children}
                   <Toaster/>
               </div>
                 
             </div>
         </main>
      </body>
    </html>
  );
}
