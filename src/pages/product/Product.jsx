// import React from 'react';
// import ImageWithPreview from '../Image_preview/imageWithPreview';
// import London_city from "../../images/London_city.jpg";

// function Product() {
//   return (
//     <div className='border border-gray-200 p-4'>
//       <div className='flex flex-col lg:flex-row gap-4'>
//         <div class="mx-auto mt-11 w-75 transform overflow-hidden bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
//           <ImageWithPreview className="h-48 w-full object-cover object-center" 
//           src = {London_city} alt='London_city'/>
//           <div class="p-4">
//             <p class="mb-2 text-lg font-medium text-gray-700">city</p>
//             <h2 class="mb-2 text-lg font-medium text-gray-900">London City</h2>
//             <p class="mb-2 text-base text-gray-500">$10</p>
//           </div>
//        </div>
//         <div class="mx-auto mt-11 w-75 transform overflow-hidden rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
//           <ImageWithPreview className="h-48 w-full object-cover object-center" 
//           src = {London_city} alt='London_city'/>
//           <div class="p-4">
//             <p class="mb-2 text-lg font-medium text-gray-700">city</p>
//             <h2 class="mb-2 text-lg font-medium text-gray-900">London City</h2>
//             <p class="mb-2 text-base text-gray-500">$10</p>
//           </div>
//        </div>
//         <div class="mx-auto mt-11 w-75 transform overflow-hidden rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
//           <ImageWithPreview className="h-48 w-full object-cover object-center" 
//           src = {London_city} alt='London_city'/>
//           <div class="p-4">
//             <p class="mb-2 text-lg font-medium text-gray-700">city</p>
//             <h2 class="mb-2 text-lg font-medium text-gray-900">London City</h2>
//             <p class="mb-2 text-base text-gray-500">$10</p>
//           </div>
//        </div>
//      </div>
//       <div className='flex flex-col lg:flex-row gap-4'>
//         <div class="mx-auto mt-11 w-75 transform overflow-hidden bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
//           <ImageWithPreview className="h-48 w-full object-cover object-center" 
//           src = {London_city} alt='London_city'/>
//           <div class="p-4">
//             <p class="mb-2 text-lg font-medium text-gray-700">city</p>
//             <h2 class="mb-2 text-lg font-medium text-gray-900">London City</h2>
//             <p class="mb-2 text-base text-gray-500">$10</p>
//           </div>
//        </div>
//         <div class="mx-auto mt-11 w-75 transform overflow-hidden rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
//           <ImageWithPreview className="h-48 w-full object-cover object-center" 
//           src = {London_city} alt='London_city'/>
//           <div class="p-4">
//             <p class="mb-2 text-lg font-medium text-gray-700">city</p>
//             <h2 class="mb-2 text-lg font-medium text-gray-900">London City</h2>
//             <p class="mb-2 text-base text-gray-500">$10</p>
//           </div>
//        </div>
//         <div class="mx-auto mt-11 w-75 transform overflow-hidden rounded-lg bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
//           <ImageWithPreview className="h-48 w-full object-cover object-center" 
//           src = {London_city} alt='London_city'/>
//           <div class="p-4">
//             <p class="mb-2 text-lg font-medium text-gray-700">city</p>
//             <h2 class="mb-2 text-lg font-medium text-gray-900">London City</h2>
//             <p class="mb-2 text-base text-gray-500">$10</p>
//           </div>
//        </div>
//      </div>
     

      
//     </div>
//   )
// }

// export default Product



import React, { useState } from 'react'; // Import React and useState hook
import { products } from '../../db/data'; // Import the products data from data.js
import ImageWithPreview from '../Image_preview/imageWithPreview';

const Product = ({ currentCategory }) => {
  const itemsPerPage = 6; // Number of products to display per page
  const [currentPage, setCurrentPage] = useState(1); // State to keep track of the current page

  // Filter products based on the selected category
  const filteredProducts = currentCategory
    ? products.filter(product => product.category === currentCategory)
    : products;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Calculate total number of pages

  // Get the products to display on the current page
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='border border-gray-200 p-4'>
      {/* Display the products in a grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {currentProducts.map((product) => (
        <div class="mx-auto mt-11 w-75 transform overflow-hidden bg-white duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-600 border border-gray-200">
          <ImageWithPreview className="h-48 w-full object-cover object-center" 
          src={product.image} alt={product.name}/>
          <div class="p-4">
            <p class="mb-2 text-lg font-medium text-gray-700">{product.category}</p>
            <h2 class="mb-2 text-lg font-medium text-gray-900">{product.name}</h2>
            <p class="mb-2 text-base text-gray-500">${product.price}</p>
          </div>
        </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
