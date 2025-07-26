import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'


const Heading = ({search, setSearch}) => { 
    

  return (
 <div className="heading relative w-full flex flex-col items-center justify-center py-16 px-4">
  
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-800 opacity-20 blur-3xl rounded-full z-0"></div>

  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-20">
  
    <img src="/images/logo 1.png" alt="Logo" className="h-img h-60" />

    
    <div className="h-text text-center max-w-2xl">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 animate-fade-in-down">
        Let's Find Your
      </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-emerald-500 -mt-2 animate-fade-in-up">
        Dream Job
      </h1>

      
      <div className="h-search mt-6 mx-auto flex items-center justify-between w-full bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 shadow-xl ring-1 ring-zinc-600 max-w-xl">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a job, company, or skill..."
          className="w-full bg-transparent text-zinc-200 placeholder-zinc-400 outline-none px-2"
        />
        <button className="h-10 w-10 flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-colors duration-300">
          <FaSearch />
        </button>
      </div>
    </div>
  </div>
</div>


  )
}

export default Heading