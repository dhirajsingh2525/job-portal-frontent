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


const Mainroutes = () => {
  return (
    <div>
        <Routes> 
            <Route path='/' element={<Home />}/>
            <Route path='/findjob' element={ <Findjob />
                }/>
            <Route path='/postjob' element={
                <Postjob />
                }/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/job-detail/:id' element={<Jobdetailpage />}/>
            <Route path='/apply/:id' element={<Apply />}/>
        </Routes>
    </div>
  )
}

export default Mainroutes 