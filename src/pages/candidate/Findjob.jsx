import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading';
import { asyncdeletejob } from '../../redux/actions/jobThunks';

const Findjob = () => {
   const dispatch = useDispatch()
     const [search, setSearch] = useState('')
  
    const {jobs} = useSelector((state) => state.jobReducer)
    const {user} = useSelector((state) => state.userReducer)
    
  
    const filterjobs = jobs.filter((job) => 
      job.title.toLowerCase().includes(search.toLowerCase()))
  
    const deleteHandler = (id) => {
      dispatch(asyncdeletejob(id))
    }
    
  return (
  <div className="job-page bg-gradient-to-b from-zinc-900 to-zinc-800 min-h-screen px-6 py-10">

  <Heading search={search} setSearch={setSearch} />

  
  <div className="flex flex-wrap justify-center gap-8 mt-10">
    {filterjobs.length > 0 ? (
      filterjobs.map((job) => (
        <div
          key={job.id}
          className="relative group w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-zinc-900 rounded-3xl p-6 shadow-lg hover:shadow-emerald-500/40 transition-shadow duration-300"
        >
          
          <div className="absolute -inset-[2px] rounded-3xl z-0 bg-gradient-to-br from-emerald-500 to-orange-500 opacity-25 group-hover:opacity-40 blur-xl"></div>

          <div className="relative z-10 flex flex-col h-full gap-4">
          
            <img src={job.logo} alt="Company Logo" className="w-14 h-14 object-contain rounded shadow-md" />

            
            <h2 className="text-zinc-100 text-xl font-bold">
              <span className="text-emerald-400">Company:</span> {job.company}
            </h2>

            <div>
              <h3 className="text-zinc-300 text-lg font-semibold">Role:</h3>
              <p className="text-emerald-400 text-lg font-bold">{job.title}</p>
            </div>

            <div>
              <h4 className="text-zinc-300 font-semibold">Salary:</h4>
              <p className="text-sm text-green-300 font-medium">💰 {job.salary}</p>
            </div>

            <p className="text-zinc-400 text-sm">
              <span className="font-medium text-zinc-300">Desc:</span> {job.description.slice(0, 50)}...
            </p>
            <p className="text-sm text-zinc-400">
              📍 <span className="font-medium">Location:</span> {job.location}
            </p>

            <div className="mt-auto flex justify-between items-center gap-4">
              <Link
                to={`/job-detail/${job.id}`}
                className="text-sm font-medium text-emerald-400 hover:underline"
              >
                View Details
              </Link>

              {user?.role === 'recruiter' && user.id === job.postedBy  ? (
                 <div className="flex gap-2">
        <Link
      to={`/update-job/${job.id}`}
      className="px-4 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
          >
      Edit
    </Link>

    <button
      onClick={() => deleteHandler(job.id)}
      className="px-4 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition"
    >
      Delete
    </button>
  </div>

              ) : (
                <button className="px-4 py-1 text-sm bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition">
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-4xl text-red-500 font-bold mt-10">No jobs found 😞</p>
    )}
  </div>
</div>


  )


}

export default Findjob;