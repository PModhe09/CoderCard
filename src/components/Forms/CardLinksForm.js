'use client'
import { useState } from "react"
import SectionBox from "../layouts/SectionBox"
import SubmitButton from "../Buttons/SubmitButton";
import { saveUserProfiles } from "@/app/actions/grabCardOwnerInfo";
import toast from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";

const websites = [
    {key:'github','label':'Github'},
    {key:'leetcode','label':'Leetcode'},
    {key:'linkedin','label':'Linkedin'},
    {key:'codeforces',label:'Codeforces'},
    {key:'codechef',label:'Codechef'},
    {key:'atcoder',label:'Atcoder'},
    {key:'codestudio',label:'Codestudio'},
    {key:'peerlist',label:'Peerlist'}
]
export default function CardLinksForm({card,user}){

    const savedProfilesKeys = Object.keys(card.profileLinks);
    const savedProfilesInfo = savedProfilesKeys.map(w => websites.find(k => k.key === w) || { key: w, label: 'N/A' });


    

    const [activeProfiles,setActiveProfiles] = useState(savedProfilesInfo);
  //  const [activeProfiles,setActiveProfiles] = useState([]);
    function AddProfileToCard(w){
        setActiveProfiles(prevProfiles=>{
            return [...prevProfiles, w];
        })
    }

    const availWebsites = websites.filter(w1 => !activeProfiles.find(w2=>w1.key === w2.key))
    

    const saveProfiles=async(formData)=>{
        console.log('inside formdata');
        await saveUserProfiles(formData);
        toast.success('Profile Saved')
    }

    function removeProfile({key:keyToRemove}){
        setActiveProfiles(
            prevButtons=>{
                return prevButtons.filter(profile=>profile.key!==keyToRemove);
            }
        )
    }
    return(
        <SectionBox className='mt-2 bg-slate-300'>
        {/* {JSON.stringify(savedProfilesKeys)} */}
        {/* {JSON.stringify(card)} */}
        
        {console.log(card)}
         <form action={saveProfiles}>
            <h2 className="text-4xl flex-wrap mb-4">Coding Profiles</h2>
               <ReactSortable list={activeProfiles} setList={setActiveProfiles}>
               {   
             activeProfiles.map((p, index) => (
                     <div className="mb-4 flex items-center" key={p.key}>
                           <div className="w-30 flex h-full text-gray-700 bg-white items-center gap-2">
                               {/* {JSON.stringify(p)} */}
                               {console.log(p)}
                               <span className="">{p.label || 'N/A'}</span>
                    
                            </div>
                            <input name={p.key} type="text" defaultValue={card.profileLinks[p.key]} style={{marginBottom:'0'}}/>
                            <button type="button" onClick={()=>removeProfile(p)} className="p-2 bg-gray-400 text-red-500 cursor-pointer">
                                <span>D</span>
                            </button>
                     </div>
                    
               ))}
               </ReactSortable>
                           
            <div className="flex gap-3 flex-wrap mt-4 border-y py-4">
            {availWebsites.map(w=>(
                <button className="flex items-center gap-2 p-2 bg-gray-300" type="button" onClick={()=>AddProfileToCard(w)}>
                   <span>{w.label}</span>
                </button>
            ))}
            </div>
            <div className="max-w-xs mx-auto mt-8">
             <SubmitButton>
                <span>Save Profiles</span>
             </SubmitButton>
            </div>
            </form>
        </SectionBox>
    )
}