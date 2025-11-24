import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Pagination from "../../components/Pagination";

const Jobdetailpage = () => {
  const { jobs } = useSelector((state) => state.jobReducer);
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);

  const index = jobs.findIndex((job) => job.id == id);

  const prevjob = jobs[index - 1];
  const nextjob = jobs[index + 1];

  if (!job) {
    return <div className="text-center text-white p-10 text-2xl">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#0b0d11] text-white flex">

      <div className="w-[38%] bg-[#101217] border-r border-white/5 p-10 flex flex-col gap-10">

        <div>
          <h3 className="text-emerald-400 text-xs uppercase tracking-widest">
            Position Title
          </h3>
          <h1 className="text-4xl font-extrabold mt-2 leading-tight">
            {job.title}
          </h1>
          <p className="text-white/60 mt-3 text-sm">
            A role designed for impact, innovation & growth.
          </p>
        </div>

        <div>
          <h3 className="text-emerald-400 text-xs uppercase tracking-widest">
            Company
          </h3>

          <div className="mt-4 flex items-center gap-4">
            <img
              src={job.logo}
              alt=""
              className="h-16 w-16 bg-white/10 rounded-lg p-2 object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold">{job.company}</h2>
              <p className="text-emerald-300 text-sm">{job.location}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-emerald-400 text-xs uppercase tracking-widest">
            Job Details
          </h3>
          <div className="mt-3 text-white/80 space-y-2">
            <p><strong className="text-white">Type:</strong> {job.job_type}</p>
            <p><strong className="text-white">Salary:</strong> {job.salary}</p>
          </div>
        </div>

        <div>
          <h3 className="text-emerald-400 text-xs uppercase tracking-widest">
            Role Description
          </h3>

          <p className="mt-3 text-white/70 leading-relaxed">
            {job.description}
          </p>
        </div>

        <div>
          <h3 className="text-emerald-400 text-xs uppercase tracking-widest">
            Required Skills
          </h3>

          <ul className="mt-4 flex flex-wrap gap-3">
            {job.skills.map((s) => (
              <li
                key={s}
                className="px-4 py-1.5 bg-white/5 text-white/80 border border-white/10 rounded-md text-sm"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-emerald-400 text-xs uppercase tracking-widest">
            Education & Experience
          </h3>

          <ul className="mt-3 text-white/80 space-y-2">
            <li>{job.education}</li>
            <li>{job.experience}</li>
          </ul>
        </div>
      </div>

      <div className="w-[62%] p-12 bg-[#0b0d11] flex flex-col gap-10">

        <img
          className="rounded-2xl border border-white/10 shadow-lg object-cover"
          src="/companies/banner.jpeg"
          alt=""
        />
 
        <Link
          to={`/apply/${id}`}
          className="px-16 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black rounded-lg shadow-xl font-bold text-lg w-max hover:opacity-95"
        >
          Apply Now
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-7 text-white/70 space-y-3">
          <h1 className="text-xl font-bold text-white">What Makes This Role Special?</h1>
          <p>
            This role is an outstanding opportunity for professionals who thrive on
            solving real-world challenges, creating high-impact solutions, and working
            with teams that value creativity, clarity & curiosity.
          </p>
          <p>
            You’ll be part of a forward-thinking environment where your work
            contributes directly to growth, innovation, and customer experience.
          </p>
        </div>

        <Pagination prevjob={prevjob} nextjob={nextjob} />
      </div>
    </div>
  );
};

export default Jobdetailpage;
