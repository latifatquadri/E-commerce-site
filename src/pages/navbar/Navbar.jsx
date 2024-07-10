import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className='w-full shadow-md z-30 sticky top-0 backdrop-blur-lg'>
     <div className='flex h-20 items-center justify-between bg-white mx-auto container pt-4 px-8'>
         <h2 className='text-black font-bold text-3xl'>BEJAMAS_</h2>
         <FontAwesomeIcon icon={faCartShopping} className='text-3xl '/>    
     </div> 
    </div>

  )
}

export default Navbar
