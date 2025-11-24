import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
 <div className="about min-h-screen bg-zinc-900 flex flex-col mt-8 items-center py-12 px-4">
  <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
    About Us
  </h1>
  <h3 className="text-center text-xl md:text-2xl text-zinc-300 font-medium mt-2">
    Search Your Favorite Job and Apply Now
  </h3>

<div className="w-full max-w-7xl mt-12 pl-10 flex flex-col lg:flex-row items-center justify-between gap-12 relative">

  <div className="animation-glow absolute top-30px] left-[30%] w-[550px] h-[550px] rounded-full bg-white blur-2xl z-0"></div>

    <div className="about-card absolute text-zinc-200 bg-zinc-700/30 backdrop-blur-xl p-8 rounded-2xl shadow-lg w-full lg:w-1/2 relative z-10">
    <h2 className="text-4xl md:text-5xl font-semibold text-emerald-400 mb-6">
      Job Portal Services
    </h2>

    <ul className="list-disc space-y-3 pl-6 marker:text-emerald-500 text-lg">
      <li>Instant job search by role and location</li>
      <li>Filter jobs by skill, company, or type</li>
      <li>Recruiter-specific job posting portal</li>
      <li>Mobile-optimized and fast loading</li>
      <li>Save jobs and track application history</li>
      <li>Real-time updates on new postings</li>
      <li>Simple application with one click</li>
      <li>Resume and profile builder tools</li>
      <li>AI-based job suggestions</li>
      <li>Free for both recruiters and seekers</li>
    </ul>

    <div className="mt-6">
      <Link
        to="/findjob"
        className="inline-block bg-emerald-600 hover:bg-emerald-500 transition px-6 py-2 rounded-md text-white font-medium"
      >
        Apply for Job
      </Link>
  </div>
</div>

  <div className="w-full lg:w-[45%] relative z-10">
    <img
      src="https://www.webnox.in/wp-content/uploads/2022/10/job-portal-web-application.png"
      alt="Job Portal Illustration"
      className="rounded-xl shadow-2xl hover:scale-105 duration-300"
    />
  </div>
</div>

</div>
  )
}

export default About;