import React, { useState,useContext } from 'react';
import { products } from '../../db/data';
import ImageWithPreview from '../Image_preview/imageWithPreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cart/Cartcontext';
import { PriceContext } from '../sidebar/price/PriceContext';
import { CategoryContext } from '../sidebar/category/CategoryContext';


const Product = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { selectedPriceRanges } = useContext(PriceContext);
  const { selectedCategories } = useContext(CategoryContext);
  
  const applyPriceFilter = (products) => {
    if (selectedPriceRanges.length === 0) return products;

    return products.filter((product) => {
      return selectedPriceRanges.some((range) => {
        const [minPrice, maxPrice] = range.split('-').map(Number);
        return product.price >= minPrice && product.price <= maxPrice;
      });
    });
  };

  const filteredProducts = products.filter(product => {
    const categoryFilter = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    // const categoryFilter = !selectedCategory || product.category === selectedCategory;
    const priceFilter = applyPriceFilter([product]).length > 0;
    return categoryFilter && priceFilter;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); 

  
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className='border border-gray-200 p-4 basis-4/5 mb-4'>   
      <div className='flex snap-x snap-mandatory scroll-pl-6 overflow-x-scroll lg:overflow-hidden md:overflow-hidden md:grid md:grid-cols-3 gap-10'>
      {currentProducts.map((product) => ( 
        product.Bestseller ===true ? (
          <div class="w-full max-w-full mx-auto mt-11 overflow-visible lg:overflow-hidden md:overflow-hidden bg-white hover:shadow-lg hover:shadow-gray-600 border border-gray-200 relative scroll-ml-6 snap-start flex-shrink-0">
          <ImageWithPreview className="h-48 w-full object-center object-contain" 
          src={product.img} alt={product.name} product={product} addToCart={addToCart} />
          <div class="p-4">
            <p class="mb-2 text-lg font-medium text-gray-700">{product.category}</p>
            <h2 class="mb-2 text-lg font-medium text-gray-900">{product.name}</h2>
            <p class="mb-2 text-base text-gray-500">${product.price}</p>
            <p className='bg-white text-gray-700 absolute px-4 py-2 left-0 top-0 mx-auto font-semibold'>Best Seller</p>
          </div>
        </div>
        ): (
          <div class="w-full max-w-full mx-auto mt-11 overflow-visible lg:overflow-hidden md:overflow-hidden bg-white duration-300 hover:shadow-lg hover:shadow-gray-600 border border-gray-200 scroll-ml-6 snap-start flex-shrink-0">
          <ImageWithPreview className="h-48 w-screen object-cover object-center" 
          src={product.img} alt={product.name} product={product} addToCart={addToCart}/>
          <div class="p-4">
            <p class="mb-2 text-lg font-medium text-gray-700">{product.category}</p>
            <h2 class="mb-2 text-lg font-medium text-gray-900">{product.name}</h2>
            <p class="mb-2 text-base text-gray-500">${product.price}</p>
          </div>
        </div>
        )

      ))}
      </div>

      {/* Pagination controls */}
      <div className="block lg:flex justify-center mt-4 pt-6 pb-10 ">
        <FontAwesomeIcon icon={faChevronLeft}  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='mx-1 px-3 py-2 border border-gray-300 text-gray-500 hover:border-blue-400 sm:mt-1'/>
        {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`mx-1 px-3 py-1 border text-gray-500 ${currentPage === index + 1 ? 'border-blue-400 text-gray-700' : 'border-gray-300'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
        ))}

        <FontAwesomeIcon icon={faChevronRight}  onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className='mx-1 px-3 py-2 border border-gray-300 text-gray-500 hover:border-blue-400'/>
      </div>
    </div>
  );
};

export default Product;
