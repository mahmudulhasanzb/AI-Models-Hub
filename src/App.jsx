import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer, FaUser } from 'react-icons/fa';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Models from './components/Models/Models';
import { Suspense, use, useState } from 'react';
import Cart from './components/Cart/Cart';

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
       <div className="tabs tabs-box justify-center gap-10 bg-transparent mt-10 mb-10">
         <input
           type="radio"
           name="my_tabs_1"
           className="tab rounded-full w-40"
           aria-label="Models"
           defaultChecked
           onClick={()=> setActiveTab("model")}
         />
         <input
           type="radio"
           name="my_tabs_1"
           className="tab rounded-full w-40"
           aria-label="Cart"
           onClick={()=> setActiveTab("cart")}
         />
       </div>

       {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}

      {activeTab === "cart" && <Cart carts={carts}></Cart>}

       {/* Footer */}
       <Footer />

       {/* Toast Container */}
       <ToastContainer />
     </>
   );
}

export default App
