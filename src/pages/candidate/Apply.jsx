import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { asyncupdateuser } from '../../redux/actions/userAction'
import instance from '../../components/config'

const Apply = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let updatejob = [];

  const submitHandler = async (data) => {
    const users = JSON.parse(localStorage.getItem("users"));

    const newApplications = { ...data };

    try {
      const { data } = await instance.get(`/users/${users.id}`);
      updatejob = [...data.appliedjob, newApplications];
    } catch (error) {
      console.log(error);
    }

    dispatch(asyncupdateuser(users.id, { appliedjob: updatejob }));
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-14 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-6">

      <div className="w-full max-w-2xl  p-8 rounded-3xl border border-white/20 shadow-2xl">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Job Application
          </h1>
          <p className="text-white/70 text-sm mt-1">
            Fill out your details carefully. Recruiters prefer clear & complete information.
          </p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">

          <div>
            <label className="block text-sm text-white/80">Full Name</label>
            <input
              {...register("name")}
              type="text"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Email Address</label>
            <input
              {...register("email")}
              type="email"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Phone Number</label>
            <input
              {...register("number")}
              type="number"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Company Name</label>
            <input
              {...register("company")}
              type="text"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">
              Enter your role & preferred location
            </label>
            <input
              {...register("role")}
              type="text"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Skills</label>
            <input
              {...register("skills")}
              type="text"
              required
              placeholder="Example: React, Node, MongoDB, Tailwind…"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Education</label>
            <input
              {...register("education")}
              type="text"
              required
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-white/80">Resume Link</label>
            <input
              {...register("resume")}
              type="text"
              required
              placeholder="Paste Google Drive resume link"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
            <p className="text-xs text-white/50 mt-1">
              Make sure link is public so the recruiter can view it.
            </p>
          </div>

          <div>
            <label className="block text-sm text-white/80">Cover Letter</label>
            <textarea
              {...register("message")}
              rows="4"
              placeholder="Write something meaningful about yourself..."
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm text-white/80">LinkedIn Profile (Optional)</label>
            <input
              {...register("linkedin")}
              type="url"
              placeholder="https://linkedin.com/in/..."
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white outline-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400"
            >
              Submit Application
            </button>
          </div>

        </form>

        <p className="text-center text-white/50 text-xs mt-6">
          By submitting this form, you confirm that all information is accurate.
        </p>

      </div>
    </div>
  );
};

export default Apply;
