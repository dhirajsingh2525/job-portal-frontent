import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/reducers/userSlice';

const Nav = () => {
   const {user} = useSelector((state) => state.userReducer)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const logoutuser = () =>{
    dispatch(clearUser())
     navigate('/')
    }
  return (
  <div className="navbar backdrop-blur-md bg-zinc-900 shadow-md px-4 py-2 flex items-center justify-between text-white">
  <div className="flex items-center gap-3">
    <img src="/images/logo (1).png" alt="Logo" className="navbar-img h-16 rounded-full border-2 border-white shadow-md" />
    <h1 className="nav-text text-2xl inline-block font-bold tracking-wide">JobPortal</h1>
  </div>


  <div className="nav-links flex gap-8 text-lg font-medium">
    <Link to="/findjob" className="hover:text-teal-400 transition duration-300">Find Job</Link>
    <Link to="/about" className="hover:text-teal-400 transition duration-300">About Us</Link>
    <Link to="/profile" className="hover:text-teal-400 transition duration-300">My Profile</Link>
    {user && user.role === 'recruiter' && (
      <Link to="/postjob" className="hover:text-teal-400 transition duration-300">
        Create a Post
      </Link>
    )}
  </div>

  <div>
    <button
      onClick={logoutuser}
      className="logout-btn px-5 py-2 bg-teal-600 hover:bg-teal-500 transition duration-300 text-white rounded-xl shadow-md font-semibold"
    >
      Log Out
    </button>
  </div>
</div>

  )
}

export default Nav