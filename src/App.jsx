import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer, FaUser } from 'react-icons/fa';

function App() {

  const notify = () => {
    toast("test notify")
  }

   return (
     <>
       <div>
         <button onClick={notify} className='btn btn-primary text-2xl font-bold'>
           AI Model Hub <FaUser />
         </button>
       </div>

       {/* Toast Container */}
       <ToastContainer />
     </>
   );
}

export default App
