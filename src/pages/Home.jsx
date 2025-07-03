import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const {user} = useSelector((state) => state.userReducer)
  const navigate = useNavigate()
 

  return (
    <div className='w-full h-screen p-4 bg-zinc-800'>
       <div className='flex items-center justify-center flex-col mt-22'>
         <h1 className='text-white font-extrabold text-7xl'>Find Your Dream Job</h1>
         <h1 className='text-white font-extrabold text-7xl'>And Get Hired</h1>
         
         <Link className='px-7 py-4 bg-blue-600 text-2xl font-bold mt-2 text-white rounded'to={user ? '/findjob' : '/signin'}>Find a job</Link>
         
       
       </div>

         <div className='w-full overflow-hidden'>
            <div className='animation-slide flex items-center justify-center mt-20 gap-x-10'>
              <img className='h-20' src="/companies/amazon.svg" alt="" />
              <img className='h-20' src="/companies/atlassian.svg" alt="" />
              <img className='h-20' src="/companies/google.webp" alt="" />
              <img className='h-20' src="/companies/netflix.png" alt="" />
              <img className='h-20' src="/companies/uber.svg" alt="" /> 
                <img className='h-20' src="/companies/amazon.svg" alt="" />
              <img className='h-20' src="/companies/atlassian.svg" alt="" />
              <img className='h-20' src="/companies/google.webp" alt="" />
              <img className='h-20' src="/companies/netflix.png" alt="" />
              <img className='h-20' src="/companies/uber.svg" alt="" /> 
            </div>
         </div>
    </div>
  )
}

export default Home