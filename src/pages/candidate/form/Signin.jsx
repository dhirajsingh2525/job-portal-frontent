import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaUserCog } from 'react-icons/fa'
import { asycsigninuser } from '../../../redux/actions/userAction'

const Signin = () => {
   const {register, handleSubmit, formState} = useForm()
     const navigate = useNavigate()
     const dispatch = useDispatch();

    const submitHandler = (data) =>{
      dispatch(asycsigninuser(data))
      navigate('/')
       
    }
  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
          <FaUserCog className="text-4xl text-emerald-600 mx-auto mt-2" />
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
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

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-emerald-700 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>

  )
}

export default Signin