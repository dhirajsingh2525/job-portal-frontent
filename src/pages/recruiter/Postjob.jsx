import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { asynccreatejob } from "../../redux/actions/jobThunks";

const Postjob = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const skillsArray = data.skills.split(" ");

    const finaldata = {
      ...data,
      skills: skillsArray,
      postedBy: user.id,
    };

    dispatch(asynccreatejob(finaldata));
    reset();
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] flex items-center mt-8 justify-center py-14 px-6">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-[#12151b] border border-white/10 rounded-3xl p-10 text-white shadow-[0_0_40px_rgba(0,0,0,0.4)] space-y-8"
      >

        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Create a <span className="text-emerald-400">New Job</span>
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Add complete details to attract the best candidates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Job Title</label>
            <input
              {...register("title")}
              placeholder="Senior Frontend Developer"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Company Name</label>
            <input
              {...register("company")}
              placeholder="Google"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Logo URL</label>
            <input
              {...register("logo")}
              placeholder="https://company-logo.png"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">City</label>
            <input
              {...register("city")}
              placeholder="Bangalore"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Country</label>
            <input
              {...register("country")}
              placeholder="India"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Location</label>
            <input
              {...register("location")}
              placeholder="Remote / On-Site"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Salary</label>
            <input
              {...register("salary")}
              placeholder="₹10 - ₹25 LPA"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Education</label>
            <input
              {...register("education")}
              placeholder="B.Tech / MCA"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm text-zinc-400">Experience</label>
            <input
              {...register("experience")}
              placeholder="3+ years"
              className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">Job Type</label>
          <select
            {...register("job_type")}
            className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
          >
            <option value="">Select</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">Job Description</label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Write the job responsibilities and expectations clearly…"
            className="bg-[#0f1116] border border-white/10 rounded-lg p-4 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">Skills Required</label>
          <input
            {...register("skills")}
            placeholder="e.g. React Node MongoDB Docker"
            className="bg-[#0f1116] border border-white/10 rounded-lg p-3 outline-none"
          />
          <p className="text-xs text-zinc-500">
            * Write skills separated by space, e.g.: <span className="text-emerald-400">React Tailwind Figma</span>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-black text-lg font-bold py-3 rounded-xl transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default Postjob;
