import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../dropdown/dropdown';
import Sidebar from '../sidebar/Sidebar';
import Product from '../product/Product';

function Photography() {
  return (
    <div className='container w-[90%] mx-auto my-4 py-4'>
      <div className='flex justify-between py-4'>
        <h2 className='text-black text-2xl font-semibold'>Photography /<span className='text-gray-600 text-2xl font-semibold'>Premium Photos</span></h2>
        <div className='flex gap-2'>
          <FontAwesomeIcon icon={faArrowUp} />
          <FontAwesomeIcon icon={faArrowDown} />
          <p>Sort by:</p>
          <Dropdown /> 
        </div>
      </div>
      <div className='border border-gray-200 flex justify-between gap-4 p-4'>
        <Sidebar />
        <Product />
      </div>
    </div>
  )
}

export default Photography
