import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
<footer className="sticky bottom-0 w-full bg-slate-950 rounded-lg shadow">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <span className="text-xl text-white sm:text-center ">© 2023 <img src="https://res.cloudinary.com/diytgodwa/image/upload/v1682450056/ecommerceapp/Assets/HardMartX_Logo_BIG_TRNSP_LTL_i0njgk.png" className="h-10 inline ml-2 mr-4" alt="Flowbite Logo" />. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-inherit  sm:mt-0">
        <li>
            <Link to="/about" className="text-white mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link to="/privacy" className="text-white mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to="/licensing" className="text-white mr-4 hover:underline md:mr-6">Licensing</Link>
        </li>
        <li>
            <Link to="/contact" className="text-white hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
