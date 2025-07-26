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
    <div>
      <h1 className="text-3xl font-bold mb-4 text-blue-600">All Candidate Applications</h1>

      {candidates.length > 0 ? (
        candidates.map((candidate, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold">{candidate.name}</h2>

            {candidate.appliedjob.map((job, idx) => (
              <div
                key={idx}
                className="p-4 bg-zinc-300 text-black flex justify-between items-center rounded-lg mt-2"
              >
                <div>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Role:</strong> {job.role}</p>
                  <p><strong>Education:</strong> {job.education}</p>
                  <a
                    href={job.resume?.startsWith("http") ? job.resume : `/${job.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    📄 View Resume
                  </a>
                </div>

                <div>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(candidate.id, idx)}
                  >
                    Delete Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default JobApplicant;


