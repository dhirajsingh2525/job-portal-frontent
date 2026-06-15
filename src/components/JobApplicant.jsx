import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDeleteApplication, asyncLoadApplications } from "../redux/actions/jobActions";


const JobApplicant = () => {
  const dispatch = useDispatch();

  const { applications } = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(asyncLoadApplications());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(asyncDeleteApplication(id));
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#0a0a0a] text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-400">
        Candidate Job Applications
      </h1>

      {applications.length > 0 ? (
        applications.map((app) => (
          <div
            key={app._id}
            className="mb-8 p-5 bg-white/5 border border-white/10 rounded-xl"
          >
            <h2 className="text-xl font-bold">👤 {app.user?.name}</h2>
            <p className="text-sm text-zinc-400">📧 {app.user?.email}</p>

            <div className="mt-4 p-4 bg-black/30 rounded-lg">
              <p className="text-emerald-300 font-semibold">{app.job?.title}</p>
              <p className="text-sm text-zinc-300">
                Company: {app.job?.company}
              </p>

              <a
                href={app.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-emerald-600 rounded"
              >
                📄 View Resume
              </a>
            </div>

            <button
              onClick={() => handleDelete(app._id)}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded"
            >
              🗑 Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-zinc-400">No applications found.</p>
      )}
    </div>
  );
};

export default JobApplicant;
