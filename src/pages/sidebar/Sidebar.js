import React from 'react';
import Category from './category/Category';
import Price from './price/Price';

function Sidebar() {
  return (
    <div className='lg:basis-1/5'>
        <Category />
        <Price/>
    </div>
  )
}

export default Sidebar
