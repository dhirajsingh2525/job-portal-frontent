import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { asyncsignupuser } from '../../../redux/actions/userAction'

const Signup = () => {
    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const submitHandler = (data) => {  
      data.id = nanoid()
      data.appliedjob = []
      dispatch(asyncsignupuser(data))
      navigate('/signin')
    }
  return (
   <div className="min-h-screen bg-gray-800 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8">
    
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <FaUserPlus className="text-4xl text-emerald-600 mx-auto mt-2" />
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="******"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <div>
            <select {...register("role")}>
              <option value="recruiter">Recruiter</option>
              <option value="Candidate">Candidate</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-emerald-700 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup 