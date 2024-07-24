import React,{useContext,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cart/Cartcontext';
import Modal from '../modal/Modal';
import Cart from '../cart/Cart';
import Badge from '@mui/material/Badge';


function Navbar() {
  const { cart } = useContext(CartContext);

 const [open, setOpen] = useState(false);
  return (
    <div className='w-[100%] shadow-md z-30 sticky top-0 backdrop-blur-lg'>
     <div className='flex h-20 items-center justify-between bg-white mx-auto container pt-4 px-8'>
         <h2 className='text-gray-600 font-extrabold text-5xl font-serif italic '>~<span className='text-gray-400'>QL</span>~</h2>
         <Badge badgeContent={cart.length} color='primary' className='text-gray-400'>
           <FontAwesomeIcon icon={faCartShopping} className='text-3xl' onClick={() => setOpen(true)} color="action"/>
         </Badge>
     </div> 
     <Modal open={open} onClose={() => setOpen(false)}>
        <Cart />
     </Modal>
    </div>

  )
}

export default Navbar
