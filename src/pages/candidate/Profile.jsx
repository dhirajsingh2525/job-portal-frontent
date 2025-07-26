import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import JobApplicant from '../../components/JobApplicant'

const Profile = () => {
 const {user} = useSelector((state) => state.userReducer)

 
  if (!user) return <p className="text-center py-10 text-zinc-300">Loading...</p>;

  return (
<div className="min-h-screen bg-zinc-900 text-zinc-300 font-sans px-4 py-10 flex flex-col items-center gap-10">
  
  <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent underline tracking-tight">
     Profile
  </h1>

 
  <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md border border-zinc-700 rounded-3xl p-8 shadow-xl">
    <div className="space-y-4 text-lg">
      <p><span className="font-semibold text-emerald-400">Username:</span> {user.name}</p>
      <p><span className="font-semibold text-emerald-400">Email:</span> {user.email}</p>
      <p><span className="font-semibold text-emerald-400">Password:</span> {user.password}</p>
      <p><span className="font-semibold text-emerald-400">Role:</span> {user.role}</p>
    </div>
  </div>

  
  <div className="w-full max-w-6xl">
    {user?.role === "Candidate" ? (
      user?.appliedjob?.length > 0 ? (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-green-500 underline text-center">📝 Your Applied Jobs</h2>
          {user.appliedjob.map((job, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-md hover:shadow-emerald-400/30 transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              
              <div className="space-y-2">
                <p className="text-lg"><span className="text-emerald-400 font-semibold">👤 Name:</span> {job.name}</p>
                <p><span className="text-orange-400 font-semibold">🏢 Company:</span> {job.company}</p>
                <p><span className="text-blue-400 font-semibold">💼 Role:</span> {job.role}</p>
                <p><span className="text-purple-400 font-semibold">🎓 Education:</span> {job.education}</p>
              </div>

            
              <div className="mt-4 md:mt-0">
                <a
                  href={`/${job.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-emerald-300 hover:underline"
                >
                  📄 View Resume
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-zinc-400">
          <p className="text-2xl">❌ No Applied Jobs Yet</p>
          <p className="text-md mt-1">Start exploring and apply for your dream job now!</p>
        </div>
      )
    ) : (
      <JobApplicant />
    )}
  </div>
</div>

  ) 
   
}

export default Profile