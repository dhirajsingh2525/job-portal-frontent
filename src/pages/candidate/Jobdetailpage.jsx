import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import Pagination from '../../components/Pagination';

const Jobdetailpage = () => {
  const {jobs} = useSelector((state) => state.jobReducer)
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id); 

  // pagination features
  const index = jobs.findIndex((jobs) => jobs.id == id)
  const currentjob = jobs[index]

  const prevjob = jobs[index - 1]
  const nextjob = jobs[index + 1]

  if (!job) {
  return <div className="text-center text-white p-8">loading...</div>;
}

  return (
    <div className='details flex'>
    <div className="details1 w-[40%] p-8 bg-[#1E293B] min-h-screen text-white">
      <h1 className='text-4xl font-bold'>Role:</h1>
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <h2 className='text-2xl font-bold'>Company:</h2>
        <img className='h-14' src={job.logo} alt="" />
      <p className="text-xl mb-2">{job.company} – {job.location}</p>
      <h1 className='font-semibold'>job type & Salary:</h1>
      <p className="text-sm mb-4">{job.job_type} | {job.salary}</p>
      <h1 className='font-semibold'>description:</h1>
      <p className="mb-4">{job.description}</p>

      <h2 className='underline font-semibold text-2xl '>Qualifications:</h2>
      <h3 className='mt-4 text-xl font-semibold'>Required skills</h3>
      {job.skills.map((s) => (
        <li>{s}</li>
      ))}
       <h2 className='font-semibold text-xl '>Education & Experience</h2>
       <li>{job.education}</li>
       <li>{job.experience}</li>
    </div>
    <div className='details2 w-[60%] px-4 bg-[#1E293B] pt-20 flex flex-col gap-10'>
      <img className='rounded-md' src="/companies/banner.jpeg" alt="" />
      <Link to={`/apply/${id}`} className='w-50 px-14 py-3 bg-yellow-300 rounded-md text-red-800 mt-4 font-semibold'>
      Apply now</Link>

       <Pagination prevjob={prevjob} nextjob={nextjob}/>
    </div>
    </div>
  )
}

export default Jobdetailpage