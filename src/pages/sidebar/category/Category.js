import React,{useContext} from 'react';
import { categories } from '../../../db/data';
import { CategoryContext } from './CategoryContext';

const Category = () => {
  const { selectedCategories, toggleCategory } = useContext(CategoryContext);
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    toggleCategory(category);
  };


  return (
    <div>
        <h2 className='text-2xl text-black font-semibold py-6'>Category</h2>
       <section className='flex flex-wrap lg:block gap-2 text-base font-light'>
       {categories.map((category) => (

        <div className="flex items-center mr-4 mb-4 gap-4" key={category}>
        <input key={category} id='people' type="checkbox"  value={category} className="w-4 h-4 inline-block mr-1 border border-gray-500"  checked={selectedCategories.includes(category)} onChange={handleCategoryChange}  />
        <label htmlFor="people" className="flex items-center cursor-pointer">
        {category}</label>
        </div>

      ))}
        
     </section>
    </div>

  );
};

export default Category