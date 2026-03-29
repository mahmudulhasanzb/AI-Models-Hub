import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer, FaUser } from 'react-icons/fa';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Models from './components/Models/Models';
import { Suspense, use, useState } from 'react';
import Cart from './components/Cart/Cart';
import Playground from './components/Playground/Playground';

const getModels = async () => {
  const res = await fetch('models.json')
  return res.json()
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])

  
   return (
     <>
       <NavBar></NavBar>

       <Hero></Hero>

       {/* Filter Buttons */}
       <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-10 mb-10 px-4 relative z-10">
         <button
           className={`px-6 md:px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border backdrop-blur-md whitespace-nowrap ${
             activeTab === "model"
               ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
               : "bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-800/50"
           }`}
           onClick={()=> setActiveTab("model")}
         >
           AI Models
         </button>
         <button
           className={`px-6 md:px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border backdrop-blur-md whitespace-nowrap ${
             activeTab === "cart"
               ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
               : "bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-800/50"
           }`}
           onClick={()=> setActiveTab("cart")}
         >
           View Cart {carts.length > 0 && <span className="ml-2 bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full text-xs border border-cyan-400/30">{carts.length}</span>}
         </button>
         <button
           className={`px-6 md:px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 border backdrop-blur-md whitespace-nowrap ${
             activeTab === "playground"
               ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
               : "bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-white hover:border-white/10 hover:bg-zinc-800/50"
           }`}
           onClick={()=> setActiveTab("playground")}
         >
           Playground
         </button>
       </div>

       {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

      {activeTab === "playground" && <Playground />}

       {/* Footer */}
       <Footer />

       {/* Toast Container */}
       <ToastContainer theme="dark" toastClassName="bg-zinc-900 border border-white/10 text-white" />
     </>
   );
}

export default App
