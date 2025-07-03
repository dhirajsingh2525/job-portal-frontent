import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'


const Heading = ({search, setSearch}) => { 
    

  return (
    
     <div className="heading w-full flex items-center justify-center gap-x-40 py-10">
       <img src="/images/logo 1.png" alt="Logo" className="h-img h-60 h-auto mb-6" />

  <div className="text-center mb-8">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800">Let's Find Your</h1>
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#017d2e] mt-2">Job</h1>

     <div className="h-search flex items-center justify-between w-[80%] max-w-2xl mt-10 bg-white rounded-full px-6 py-1 shadow-md">
    <input
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search your job..."
      className="w-full py-2 px-4 rounded-full  text-gray-700 placeholder-gray-400 outline-none"
    />
    <button className="h-10 w-10 flex items-center justify-center bg-emerald-800 text-white rounded-full">
      <FaSearch />
    </button>
  </div>
  </div>

 
</div>

  )
}

export default Heading