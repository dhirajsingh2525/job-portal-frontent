import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { asyncFetchAllUsers, asyncupdateuser } from "../redux/actions/userAction";

const JobApplicant = () => {
  const [candidates, setCandidates] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCandidates();
  }, [dispatch]);

  const fetchCandidates = async () => {
    try {
      const users = await dispatch(asyncFetchAllUsers());
      const filtered = users.filter(
        (user) => user.role === "Candidate" && user.appliedjob?.length > 0
      );
      setCandidates(filtered);
    } catch (error) {
      console.log("Error fetching candidates:", error);
    }
  };

  const handleDelete = async (userId, indexToRemove) => {
    try {
      const user = candidates.find((u) => u.id === userId);

      if (!user) return;

      const updatedAppliedJobs = user.appliedjob.filter((_, i) => i !== indexToRemove);

      const updatedUser = {
        ...user,
        appliedjob: updatedAppliedJobs,
      };

      await dispatch(asyncupdateuser(userId, updatedUser));

      fetchCandidates();
    } catch (error) {
      console.error("Failed to delete application:", error);
    }
  };

 return (
  <div className="min-h-screen p-6 bg-gradient-to-br from-[#0f0f0f] via-[#111] to-[#0a0a0a] text-white">

    <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-400 drop-shadow-lg">
      Candidate Job Applications
    </h1>

    {candidates.length > 0 ? (
      candidates.map((candidate, index) => (
        <div key={index} className="mb-10">

          <h2 className="text-2xl font-semibold mb-4 text-white/90">
            👤 {candidate.name}
          </h2>
          {candidate.appliedjob.map((job, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white/5 border border-white/10 
                         rounded-2xl shadow-[0_0_25px_rgba(0,255,200,0.05)]
                         backdrop-blur-xl transition-all duration-300
                         hover:-translate-y-1 hover:shadow-emerald-400/20 
                         mt-4"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">

                <div className="space-y-1">
                  <p className="text-lg font-bold text-emerald-300">
                    {job.role}
                  </p>

                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">Company:</span> {job.company}
                  </p>

                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">Education:</span> {job.education}
                  </p>
                  <a
                    href={job.resume?.startsWith("http") ? job.resume : `/${job.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm 
                               bg-emerald-600 hover:bg-emerald-500 
                               rounded-lg font-semibold transition shadow"
                  >
                    📄 View Resume
                  </a>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleDelete(candidate.id, idx)}
                    className="px-4 py-2 bg-red-600/80 hover:bg-red-500 
                               rounded-lg text-white font-semibold 
                               transition shadow"
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      ))
    ) : (
      <p className="text-center text-zinc-400 text-lg mt-10">
        No applications found.
      </p>
    )}
  </div>
);

};

export default JobApplicant;


