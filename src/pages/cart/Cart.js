import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './Cartcontext';
import { SnackbarContext } from '../snackbar/Snackbar';



function Cart () {
    const { cart, removeFromCart } = useContext(CartContext);
    const showSnackbar = useContext(SnackbarContext);
    const handleRemove = (index) => {
      removeFromCart(index);
      showSnackbar('Product removed from cart!', 'info');
    };
  
    return (
      <div className='bg-white text-gray-700 shadow-sm shadow-pink-200 z-10 w-[100%] h-80 p-6'>
        <h1 className='text-center font-bold text-xl py-4'>Cart</h1>
        <div className='text-center text-lg justify-center '>
        {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            product ? (
              <li key={index} className='flex gap-4 align-middle bg-gray-50 p-8'>
               <img src={product.img} alt={product.name} className='w-24px h-24'/>
               <div className='block gap-4'>
                <div>{product.name}</div>
                <div>${product.price}</div>
               </div>
               <FontAwesomeIcon icon={faTrash} className='text-3xl' onClick={handleRemove} style={{ cursor: 'pointer' }}/>
             </li>
            ): null
          ))}
        </ul>
      )}

    </div>
        </div>

    );
  };

export default Cart;




