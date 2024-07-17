import React,{useContext} from 'react';
import { useImagePreview } from './useImagePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SnackbarContext } from '../snackbar/Snackbar';

function ImageWithPreview({ src, alt, addToCart, product} ) {

  const { isPreviewOpen, openPreview, closePreview } = useImagePreview();
  const showSnackbar = useContext(SnackbarContext);

  const handleClick = () => {
    addToCart(product);
    showSnackbar('Product added to cart!', 'success');
  };
  return (
    <div className="relative w-full h-64">
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full"

      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={openPreview}>
        <p className="text-white text-lg md:text-xl text-center">
          Click to Preview
        </p>
      </div>
      <div className="absolute bottom-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300 w-[80%] h-full">
        <p className="text-white text-lg bg-gray-800 flex items-center space-x-1 absolute bottom-0 left-0 w-[60%]">
          <span>CART</span>
          <FontAwesomeIcon icon={faShoppingCart}  onClick={handleClick} style={{ cursor: 'pointer' }}/>
        </p>
      </div>
      {isPreviewOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-75 z-50">
          <div className="relative">
            <img
              src={src}
              alt={alt}
              className="object-contain w-screen h-screen"
            />
            <button
              onClick={closePreview}
              className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithPreview;


