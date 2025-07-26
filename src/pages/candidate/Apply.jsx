import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncupdateuser } from '../../redux/actions/userAction'
import instance from '../../components/config'

const Apply = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let updatejob = []

    const submitHandler = async (data) =>{
        const users = JSON.parse(localStorage.getItem('users'))
      const  newApplications = {
            ...data,
        }
           try {
             const {data} = await instance.get(`/users/${users.id}`)

             updatejob = [...data.appliedjob, newApplications]
            console.log("data",data)
           } catch (error) {
             console.log(error)
           }
         
      dispatch(asyncupdateuser(users.id, {appliedjob: updatejob})) 
      navigate(-1)   
    }
  return (
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#5C2C90] via-[#7C5DC3] to-[#3B82F6] p-6">
  <form onSubmit={handleSubmit(submitHandler)} class="w-full max-w-lg bg-white rounded-xl shadow-2xl p-4 space-y-2">
    <h2 class="text-2xl font-bold text-gray-800 text-center">JOB APPLICATION FORM</h2>

    <div>
      <label class="block text-sm font-medium text-gray-700">Full Name</label>
      <input
      {...register("name")}
       type="text" 
       required 
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
       />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Email Address</label>
      <input 
      {...register("email")}
      type="email"
       required
        class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
        />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Phone Number</label>
      <input
      {...register("number")}
       type="Number" 
       required 
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
       />
    </div>
      <div>
      <label class="block text-sm font-medium text-gray-700">Company Name</label>
      <input
      {...register("company")}
       type="text" 
       required 
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
       />
    </div>
      <div>
      <label class="block text-sm font-medium text-gray-700">Enter your role & location</label>
      <input
      {...register("role")}
       type="Text" 
       required 
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
       />
    </div>
     <div>
      <label class="block text-sm font-medium text-gray-700">Enter your skills</label>
      <input
      {...register("skills")}
       type="Text" 
       required 
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
       />
    </div>
     <div>
      <label class="block text-sm font-medium text-gray-700">Enter your education</label>
      <input
      {...register("education")}
       type="Text" 
       required 
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none" 
       />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Resume</label>
      <input 
      {...register("resume")}
      type="text" 
      placeholder='Paste Google Drive resume link'
       required
        class="mt-1 w-full" 
        />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Cover Letter / Message</label>
      <textarea 
      {...register("message")}
      rows="4"
       class="mt-1 w-full border border-gray-300 rounded-md p-2 outline-none"></textarea>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">LinkedIn Profile (optional)</label>
      <input 
      {...register("linkedin")}
      type="url" 
      placeholder='your linkedin url' 
      class="mt-1 w-full border border-gray-300 rounded-md p-2" 
      />
    </div>

    <div class="text-center">
      <button type="submit" class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition">
        Submit Application
      </button>
    </div>
  </form>
</div>

  )
}

export default Apply