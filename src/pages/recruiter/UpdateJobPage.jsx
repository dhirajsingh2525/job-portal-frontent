import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { asyncupdateJob } from "../../redux/actions/jobThunks"


const UpdateJobPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { jobs } = useSelector((state) => state.jobReducer)

  const job = jobs.find((j) => j.id === id)
   console.log("job",job)

  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    if (job) {
      reset(job)  
    }
  }, [job])

  const onSubmit = (data) => {
    dispatch(asyncupdateJob(id, data))
    navigate(-1);
  }

  return (
   <div className="bg-zinc-800 p-4">
     <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto p-6  bg-zinc-300 shadow-md rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Update Job</h2>

      <input {...register('title')} placeholder="Job Title" className="w-full border p-2 rounded" />
      <input {...register('company')} placeholder="Company Name" className="w-full border p-2 rounded" />
      <input {...register('logo')} placeholder="Company Logo URL" className="w-full border p-2 rounded" />
      <input {...register('city')} placeholder="City" className="w-full border p-2 rounded" />
      <input {...register('country')} placeholder="Country" className="w-full border p-2 rounded" />
      <input {...register('location')} placeholder="Location" className="w-full border p-2 rounded" />
      <select {...register('job_type')} className="w-full border p-2 rounded">
        <option value="">Select Job Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Internship">Internship</option>
        <option value="Remote">Remote</option>
      </select>
      <input {...register('salary')} placeholder="Salary" className="w-full border p-2 rounded" />
      <textarea {...register('description')} placeholder="Description" className="w-full border p-2 rounded" />
      <input {...register('education')} placeholder="Education" className="w-full border p-2 rounded" />
      <input {...register('experience')} placeholder="Experience" className="w-full border p-2 rounded" />
      <input {...register('skills')} placeholder="Skills" className="w-full border p-2 rounded" />

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
        Update Job
      </button>
    </form>
   </div>
  )
}

export default UpdateJobPage
