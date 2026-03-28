import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer, FaUser } from 'react-icons/fa';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {

   return (
     <>
       <NavBar></NavBar>
       <Hero></Hero>
       {/* Footer */}
       <Footer/>
       {/* Toast Container */}
       <ToastContainer />
     </>
   );
}

export default App
