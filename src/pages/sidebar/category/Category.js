import React from 'react'

function Category() {
  return (
    <div>
        <h2 className='text-2xl text-black font-semibold py-4'>Category</h2>
       <section className='block gap-2 '>
         <div class="flex items-center mr-4 mb-4">
             <input id='people' type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="people" class="flex items-center cursor-pointer">
             people</label>
         </div>
         <div class="flex items-center mr-4 mb-4">
             <input id="premium" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="premium" class="flex items-center cursor-pointer">
             premium</label>
         </div>
         <div class="flex items-center mr-4 mb-4">
             <input id="pet" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="pet" class="flex items-center cursor-pointer">
             pet</label>
         </div>
         <div class="flex items-center mr-4 mb-4">
             <input id="food" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="food" class="flex items-center cursor-pointer">
             food</label>
         </div>
         <div class="flex items-center mr-4 mb-4">
             <input id="landmark" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="landmark" class="flex items-center cursor-pointer">
             landmark</label>
         </div>
         <div class="flex items-center mr-4 mb-4">
             <input id="city" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="city" class="flex items-center cursor-pointer">
             city</label>
         </div>
         <div class="flex items-center mr-4 mb-4">
             <input id="nature" type="checkbox" name="radio" class="w-4 h-4 inline-block mr-1 border border-gray-500"  />
             <label for="nature" class="flex items-center cursor-pointer">
             nature</label>
         </div>
     </section>
    </div>
  )
}

export default Category
