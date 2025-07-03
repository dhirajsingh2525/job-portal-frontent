import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUser } from '../../redux/reducers/userSlice'
import { useForm } from 'react-hook-form'
import { asynccreatejob } from '../../redux/actions/jobThunks'

const Postjob = () => {
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();
    
  const onSubmit = (data) =>{
      const skillsArray = data.skills.split(" ")
      
      const finaldata = {
          ...data,
          skills: skillsArray
      }

      dispatch(asynccreatejob(finaldata))
  }
  return (
    <div>
          <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Post a Job</h2>

      <input {...register('title')} placeholder="Job Title" className="w-full border p-2 rounded" />

      <input {...register('company')} placeholder="Company Name" className="w-full border p-2 rounded" />

      <input {...register('logo')} placeholder="Company Logo URL" className="w-full border p-2 rounded" />

      <input {...register('city')} placeholder="City" className="w-full border p-2 rounded" />

      <input {...register('country')} placeholder="Country" className="w-full border p-2 rounded" />

      <input {...register('location')} placeholder="Location (e.g., City, Country)" className="w-full border p-2 rounded" />

      <select {...register('job_type')} className="w-full border p-2 rounded">
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
        <option value="Remote">Remote</option>
      </select>

      <input {...register('salary')} placeholder="Salary (e.g., ₹9 - ₹15 LPA)" className="w-full border p-2 rounded" />

      <textarea {...register('description')} placeholder="Job Description" className="w-full border p-2 rounded" />

      <input {...register('education')} placeholder="Required Education" className="w-full border p-2 rounded" />

      <input {...register('experience')} placeholder="Experience (e.g., 2+ years)" className="w-full border p-2 rounded" />

      <input
        {...register('skills')}
        placeholder="Skills (comma separated, e.g., Linux, Networking)"
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Post Job
      </button>
    </form>

    </div>
  )
}

export default Postjob