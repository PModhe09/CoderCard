import Link from "next/link";
import Form from '../../components/Forms/Form'

export default function Home() {
  return (
    <main>
        
       <section className="pt-32">
         <div className="max-w-md mb-8 ">
            <h1 className="text-6xl font-bold text-green-500">Beyond the <span className="text-blue-500">IDE</span><br/>
            <div className="mt-5">Your Card, Your Identity</div></h1>
            <h2 className="text-green-500 ml-2 text-xl mt-2">Empowering Developers to Shine in One Place</h2>
         </div>
         <Form/>
       </section>
    </main>
  );
}
