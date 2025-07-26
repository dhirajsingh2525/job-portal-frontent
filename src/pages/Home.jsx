import React from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom'

const Home = () => {
  const {user} = useSelector((state) => state.userReducer)
 

  return (
    <div className="home w-full min-h-screen bg-[url('/images/photo-1604076850742-4c7221f3101b.avif')] bg-cover bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 flex flex-col justify-between">
      
      <div className="flex flex-col items-center justify-center text-center mt-24 space-y-6">
        <h1 className="text-white font-extrabold text-6xl sm:text-7xl leading-tight">
          Find Your <span className="text-blue-500">Dream Job</span>
        </h1>
        <h2 className="text-white font-semibold text-4xl sm:text-5xl">
          And Get Hired Instantly
        </h2>
        <Link
          to={user ? '/findjob' : '/signin'}
          className="mt-6 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold rounded-full transition duration-300 shadow-lg"
        >
          Start Exploring Jobs
        </Link>
      </div>

         <div className='home-anim w-full overflow-hidden'>
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









