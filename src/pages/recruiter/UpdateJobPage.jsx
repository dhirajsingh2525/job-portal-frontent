import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncupdateJob } from "../../redux/actions/jobThunks";

const UpdateJobPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobs } = useSelector((state) => state.jobReducer);

  const job = jobs.find((j) => j.id === id);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (job) reset(job);
  }, [job]);

  const onSubmit = (data) => {
    dispatch(asyncupdateJob(id, data));
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex justify-center items-start py-12 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-[#1E293B] p-8 rounded-2xl shadow-lg border border-[#334155] space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white tracking-wide">
          Update Job Details
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Modify the job information below. Keep details accurate and clear.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div>
            <label className="text-gray-300">Job Title</label>
            <input
              {...register("title")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div>
            <label className="text-gray-300">Company Name</label>
            <input
              {...register("company")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div>
            <label className="text-gray-300">Logo URL</label>
            <input
              {...register("logo")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div>
            <label className="text-gray-300">City</label>
            <input
              {...register("city")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div>
            <label className="text-gray-300">Country</label>
            <input
              {...register("country")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div>
            <label className="text-gray-300">Location</label>
            <input
              {...register("location")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-gray-300">Job Type</label>
            <select
              {...register("job_type")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div>
            <label className="text-gray-300">Salary</label>
            <input
              {...register("salary")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

        </div>
        <div>
          <label className="text-gray-300">Description</label>
          <textarea
            {...register("description")}
            rows={3}
            className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-gray-300">Education</label>
            <input
              {...register("education")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>

          <div>
            <label className="text-gray-300">Experience</label>
            <input
              {...register("experience")}
              className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            />
          </div>
        </div>

        <div>
          <label className="text-gray-300">Skills</label>
          <input
            {...register("skills")}
            className="w-full p-3 rounded-lg bg-[#0F172A] text-white border border-[#334155]"
            placeholder="e.g., React, Node, MongoDB"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-500"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default UpdateJobPage;
