import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Postjob from '../pages/recruiter/Postjob'
import Signin from '../pages/candidate/form/Signin'
import Signup from '../pages/candidate/form/Signup'
import Jobdetailpage from '../pages/candidate/Jobdetailpage'
import About from '../pages/candidate/About'
import Profile from '../pages/candidate/Profile'
import Apply from '../pages/candidate/Apply'
import Findjob from '../pages/candidate/Findjob'
import UpdateJobPage from '../pages/recruiter/UpdateJobPage'
import Auth from './Auth'


const Mainroutes = () => {
  return (
    <div>
        <Routes> 
            <Route path='/' element={<Home />}/>
            <Route path='/findjob' element={
              <Auth>
               <Findjob />
               </Auth>
                }/>
            <Route path='/postjob' element={
              <Auth>
                <Postjob />
                </Auth>
                }/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/about' element={
              <Auth>
              <About />
              </Auth>
              }/>
            <Route path='/profile' element={
              <Auth>
              <Profile />
              </Auth>
              }/>
            <Route path='/job-detail/:id' element={
              <Auth>
              <Jobdetailpage />
              </Auth>
              }/>
            <Route path='/apply/:id' element={
              <Auth>
              <Apply />
              </Auth>
              }/>
            <Route path="/update-job/:id" element={
              <Auth>
              <UpdateJobPage />
              </Auth>
              } />

        </Routes>
    </div>
  )
}

export default Mainroutes 