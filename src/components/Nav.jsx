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
    <div className='navbar bg-gradient-to-tr from-[#FF7E07] via-[#3e05c4] to-[#FBE226] flex items-center justify-between px-4 text-white'>
         <img src="/images/logo (1).png" alt="" className="navbar-img h-20" />
        <div className='nav-links flex gap-x-30'>
            <Link to='/findjob'>Find job</Link>
        <Link to='/about'>About us</Link>
        <Link to='/profile'>My Profile</Link>
         {user && user.role == 'recruiter' && 
         <Link to='/postjob'>
          create a post
         </Link>
          }
        </div>
        <div>
            <button onClick={logoutuser} className='logout-btn px-6 py-1 bg-orange-600 text-white rounded-md font-medium'>log out</button>
        </div>
    </div>
  )
}

export default Nav