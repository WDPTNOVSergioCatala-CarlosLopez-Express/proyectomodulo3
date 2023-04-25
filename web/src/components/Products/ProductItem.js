import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating/Rating'

function ProductItem() {
  return (
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="p-8 rounded-t-lg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeC893_33dJRCQhDrYh7gfmIN1hs5loMHAbzfnU2Qm&s' alt={`iphone image`} />
    
    <div class="px-5 pb-5">
        
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">iphone</h5>
        
        <div class="flex items-center mt-2.5 mb-5">
            <Rating>4.3</Rating>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <Link to="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
        </div>
    </div>
</div>

  )
}

export default ProductItem