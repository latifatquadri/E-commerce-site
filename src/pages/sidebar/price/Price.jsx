import React,{useContext} from 'react';
import { PriceContext } from './PriceContext';

function Price() {
    const { selectedPriceRanges, togglePriceRange } = useContext(PriceContext);

    const handlePriceChange = (e) => {
      const range = e.target.value;
      togglePriceRange(range);
    };
  
   return (
    <div>
      <h2 className='text-2xl text-black font-semibold py-4'>Price Range</h2>
         <div className="flex flex-wrap lg:block text-base font-light">
            <div className="flex items-center mr-2 mb-4 gap-4">
               <input id='0-19' type="checkbox" value='0-19' className="w-4 h-4 inline-block mr-1 border border-gray-500" checked={selectedPriceRanges.includes("0-19")} onChange={handlePriceChange}/>
               <label htmlFor='0-19' className="flex items-center cursor-pointer">
               Less than 20</label>
            </div>
            <div className="flex items-center mr-2 mb-4 gap-4">
               <input id='20-100' type="checkbox" value='20-100' className="w-4 h-4 inline-block mr-1 border border-gray-500" checked={selectedPriceRanges.includes("20-100")} onChange={handlePriceChange}/>
               <label htmlFor='20-100' className="flex items-center cursor-pointer">
               $20-$100</label>
            </div>
            <div className="flex items-center mr-2 mb-4 gap-4">
               <input id='100-200' type="checkbox" value='100-200' className="w-4 h-4 inline-block mr-1 border border-gray-500" checked={selectedPriceRanges.includes("100-200")} onChange={handlePriceChange}/>
               <label htmlFor='100-200' className="flex items-center cursor-pointer">
               $100-$200</label>
            </div>
            <div className="flex items-center mr-2 mb-4 gap-4">
               <input id='200-300' type="checkbox" value='200-300' className="w-4 h-4 inline-block mr-1 border border-gray-500" checked={selectedPriceRanges.includes("200-300")} onChange={handlePriceChange}/>
               <label htmlFor='200-300' className="flex items-center cursor-pointer">
               More than 200</label>
            </div>          
         </div>
    </div>
  )
}

export default Price



