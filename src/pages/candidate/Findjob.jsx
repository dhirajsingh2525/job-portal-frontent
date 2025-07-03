import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading';

const Findjob = () => {
   const dispatch = useDispatch()
     const [search, setSearch] = useState('')
  
    const {jobs} = useSelector((state) => state.jobReducer)
  
    const filterjobs = jobs.filter((job) => 
      job.title.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div className='job-page bg-[#F9EBE8]  min-h-screen px-4'>
    
    <Heading search={search} setSearch={setSearch} />
    
    <div className='flex flex-wrap justify-center gap-6'>
     {filterjobs.length> 0 ? (filterjobs.map((job) => (
         <div key={job.id} className="job-page1 w-[30%] bg-white shadow-2xl shadow-[#b63514] rounded-2xl p-5 flex flex-col items-start pl-8 gap-2">
  <img
    src={job.logo} alt="" className="w-14 h-14 object-contain rounded"/>
  <h2 className="text-lg font-semibold text-gray-800"><span className='font-extrabold text-2xl'>Company name:</span>{job.company}</h2>
  
 <div>
  <h2 className='text-2xl font-bold'>Role:</h2>  <h3 className="text-xl font-bold text-emerald-600">{job.title}</h3>
 </div>

 <div>
  <h4 className='text-xl font-semibold'>Salery:</h4>
   <p className="text-gray-700 text-sm font-medium">
    💰 {job.salary}
  </p>
 </div>
 <p ><span className='font-semibold'>Desc:</span>{job.description.slice(0, 40)}...</p>

  <p className="text-gray-500 text-sm">
   <span>Location:</span> {job.location}
  </p>
  <div className="w-full justify-between mt-auto flex gap-2">
    <Link to={`/job-detail/${job.id}`} className="text-sm text-emerald-600 font-medium hover:underline">
      Details
    </Link>
    <button className="text-sm text-white bg-green-600 px-6 py-1 rounded">
      Apply
    </button>
  </div>
</div>
    )) ) : (<p className='text-8xl text-red-500'>job  not found</p>)} 
   </div> 

</div>

  )


}

export default Findjob;