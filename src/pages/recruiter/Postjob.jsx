import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../redux/reducers/userSlice'
import { useForm } from 'react-hook-form'
import { asynccreatejob } from '../../redux/actions/jobThunks'

const Postjob = () => {
  const {register, handleSubmit, reset} = useForm();
  const { user } = useSelector((state) => state.userReducer);
  

  const dispatch = useDispatch();
    
  const onSubmit = (data) =>{
      const skillsArray = data.skills.split(" ")
      
      const finaldata = {
          ...data,
          skills: skillsArray,
          postedBy: user.id
      }

      dispatch(asynccreatejob(finaldata))
      reset();
  }
  return (
<div className="min-h-screen bg-zinc-900 flex items-center justify-center py-12 px-4">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-zinc-700 text-zinc-200 shadow-xl rounded-3xl px-8 py-10 space-y-6"
  >
    <h2 className="text-4xl font-bold text-center text-emerald-400 tracking-tight underline">
       Post a Job
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input {...register('title')} placeholder="Job Title" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('company')} placeholder="Company Name" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('logo')} placeholder="Company Logo URL" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('city')} placeholder="City" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('country')} placeholder="Country" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('location')} placeholder="Location (e.g., City, Country)" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('salary')} placeholder="Salary (e.g., ₹9 - ₹15 LPA)" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('education')} placeholder="Required Education" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
      <input {...register('experience')} placeholder="Experience (e.g., 2+ years)" className="input-style outline-none border-1 border-zinc-600 rounded-md p-2" />
    </div>

    <select {...register('job_type')} className="input-style w-full bg-zinc-800 text-white p-2">
      <option value="">Select Job Type</option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option>
      <option value="Internship">Internship</option>
      <option value="Remote">Remote</option>
    </select>

    <textarea
      {...register('description')}
      placeholder="Job Description"
      rows={4}
      className="input-style w-full outline-none border-1 border-zinc-600 rounded-md p-4"
    />

    <input
      {...register('skills')}
      placeholder="Skills (comma separated, e.g., Linux, Networking)"
      className="input-style w-full outline-none border-1 border-zinc-600 rounded-md p-2"
    />

    <button
      type="submit"
      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 text-lg font-semibold rounded-xl transition duration-300"
    >
       Post Job
    </button>
  </form>
</div>

  )
}

export default Postjob