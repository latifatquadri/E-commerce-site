import React from 'react'

function Price() {
  return (
    <div>
      <h2 className='text-2xl text-black font-semibold py-4'>Price Range</h2>
      <div>
          <div class="flex items-center mr-4 mb-4">
             <input id="<$20" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="<$20" class="flex items-center cursor-pointer">
             less Than $20</label>
          </div>
          <div class="flex items-center mr-4 mb-4">
             <input id="$20-$100" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="$20-$100" class="flex items-center cursor-pointer">
             $20-$100</label>
          </div>
          <div class="flex items-center mr-4 mb-4">
             <input id="$100-$200" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="$100-$200" class="flex items-center cursor-pointer">
             $100-$200</label>
          </div>
          <div class="flex items-center mr-4 mb-4">
             <input id=">$200" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for=">$200" class="flex items-center cursor-pointer">
             more Than $200</label>
          </div>
      </div>
    </div>
  )
}

export default Price
