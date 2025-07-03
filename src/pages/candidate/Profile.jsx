import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
 const {user} = useSelector((state) => state.userReducer)
 console.log("efuevhiueiuvr",user)
 
  if (!user) return <p className="text-center py-10 text-gray-500">Loading...</p>;

  return (
    <div className="flex items-center justify-center flex-col gap-10 font-sans">
      <h1 className='text-5xl font-semibold text-gray-800 underline'>Profile</h1>
      <div className="flex flex-col items-center gap-8">
              <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
             <span> Username: </span> {user.name}
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
              <span>Email:</span>  {user.email}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
             <span>Password</span>  {user.password}
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <span> Role:</span>  {user.role}
          </p>
          </div>
          </div>
           <h1 className='text-5xl font-bold text-green-600 underline'>📝 Your Applied Job</h1>
        <div className="w-full max-w-5xl mx-auto px-4 py-6">

  {user?.appliedjob?.length > 0 ? (
    <div className="space-y-6">
      {user.appliedjob.map((job, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between border border-gray-200"
        >
          {/* Job Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-800">
              👤 <span className="font-bold">Name:</span> {job.name}
            </h3>
            <p className="text-gray-700">
              🏢 <span className="font-semibold">Company:</span> {job.company}
            </p>
            <p className="text-gray-700">
              💼 <span className="font-semibold">Role:</span> {job.role}
            </p>
            <p className="text-gray-700">
              🎓 <span className="font-semibold">Education:</span> {job.education}
            </p>
          </div>

          {/* Resume/Status */}
          <div className="mt-4 md:mt-0">
            <Link
              href={`/${job.resume}`} 
              className="text-sm text-blue-600 underlin"
              target="_blank"
              rel="noreferrer"
            >
              📄 View Resume
            </Link>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-600 mt-10">
      <p className="text-lg">❌ No Applied Jobs Yet</p>
      <p className="text-sm">Go ahead and apply for your dream job!</p>
    </div>
  )}
</div>

          </div>
  ) 
   
}

export default Profile