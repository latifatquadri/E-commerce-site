import React,{useContext} from 'react';
import Landmark_image from '../../images/Landmark_bridge.jpg';
import Amusement_park from "../../images/Amusement_park.jpg";
import House_on_a_sea from "../../images/House_on_a_sea.jpg";
import City_buildings from "../../images/City_buildings.jpg";
import ImageWithPreview from '../Image_preview/imageWithPreview';
import { CartContext } from '../cart/Cartcontext';

function Hero() {
  const { addToCart } = useContext(CartContext);
  return (
    <div className='border-b-2 w-[90%] mx-auto py-8'>
      <div className='flex justify-between w-[90%] mx-auto pt-8 pb-4 lg:pt-14 lg:pb-8'>
        <h2 className='text-lg font-medium lg:font-bold lg:text-3xl '>Landmark Bridge Image</h2>
        <button className='p-2 w-32 text-sm bg-gray-800 hover:bg-black text-white lg:text-lg lg:w-44 '>ADD TO CART</button>
      </div>
      <div className='w-[90%] mx-auto relative py-4 justify-items-center'>
          <img src={Landmark_image} alt='Landmark_image' className='h-[80%] w-full motion-safe:animate-pulse'/>
         <p className='bg-white text-black absolute p-2 left-0 bottom-0 mx-auto font-medium h-10 lg:h-20 lg:p-4 lg:font-bold'>Photo of the day</p>     
      </div>

      <div className='flex justify-between w-[90%] mx-auto gap-4'>
        <p className='text-black text-sm font-normal lg:text-xl lg:font-semibold'>About the Landmark Bridge Image</p>
        <p className='text-black text-sm font-normal lg:text-xl lg:font-semibold'>People also buy</p>
      </div>

      <div className='flex flex-col lg:flex-row w-[90%] mx-auto gap-3 pt-6'>
        <div className='text-left basis-1/2'>
          <h2 className='text-gray-500 font-semibold text-xl mb-4'>landmark</h2>
          <p className='text-sm text-gray-400 leading-relaxed'>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p>
        </div>

        {/* Section for the hoverable images */}
        <div className='basis-1/5 relative'>
          <ImageWithPreview
          src={Amusement_park} alt='Amusement Park' addToCart={addToCart}
        />
        </div>
        <div className='basis-1/5 relative'>
          <ImageWithPreview
          src={House_on_a_sea} alt='House on a sea'  addToCart={addToCart}
        />
        </div>
        <div className='basis-1/5 relative'>
          <ImageWithPreview
          src={City_buildings} alt='City Buildings' addToCart={addToCart}
        />
        </div>
      </div>
      <div className='w-[90%] mx-auto grid  justify-items-start lg:justify-items-end lg:text-left'>
        <h2 className='text-2xl text-black font-semibold py-4'>Details</h2>
        <p className='text-gray-500'>Size:1020 x 1020 pixel</p>
        <p className='text-gray-500'>Size:15mb</p>
      </div>


    </div>
  )
}

export default Hero
