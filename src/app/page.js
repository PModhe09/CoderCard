import Link from "next/link";

export default function Home() {
  return (
    <main>
        
       <section className="pt-32">
         <div className="max-w-md mb-8 ">
            <h1 className="text-6xl font-bold text-green-500">Beyond the <span className="text-blue-500">IDE</span><br/>
            <div className="mt-5">Your Card, Your Identity</div></h1>
            <h2 className="text-green-500 ml-2 text-xl mt-2">Empowering Developers to Shine in One Place</h2>
         </div>
         <form className="inline-flex items-center shadow-lg shadow-green-500">
            <span className="bg-white py-4 pl-4">
              codecard.com/
            </span>
            {/* focus:border-blue-20 focus:ring focus:ring-blue-2 */}
            <input type="text" className="py-4 focus:outline-none 0" placeholder="your-username"/>
            <button type="submit" className="bg-green-500  text-white py-4 px-6 rounded-lg">
              Get Started
            </button>
         </form>
       </section>
    </main>
  );
}
