import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import JobApplicant from "../../components/JobApplicant";

const Profile = () => {
  const { user } = useSelector((state) => state.userReducer);

  if (!user)
    return (
      <p className="text-center py-10 text-zinc-400 tracking-wide text-lg">
        Loading profile...
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1115] via-[#13161c] to-[#0b0d10] text-white px-6 py-12 flex flex-col items-center gap-12">

      <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        Your Profile
      </h1>

      <div className="w-full max-w-3xl bg-white/10 border border-white/20 rounded-3xl shadow-xl backdrop-blur-xl p-10">

        <h2 className="text-2xl font-bold text-emerald-300 mb-6">
          Personal Information
        </h2>

        <div className="space-y-4 text-lg">
          <p>
            <span className="text-emerald-400 font-semibold">Username:</span>{" "}
            {user.name}
          </p>
          <p>
            <span className="text-emerald-400 font-semibold">Email:</span>{" "}
            {user.email}
          </p>
          <p>
            <span className="text-emerald-400 font-semibold">Account Role:</span>{" "}
            {user.role}
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl">

        {user?.role === "Candidate" ? (
          user?.appliedjob?.length > 0 ? (
            <div className="space-y-10">

              <h2 className="text-4xl font-bold text-center text-emerald-400 tracking-wide">
                Your Job Applications
              </h2>

              {user.appliedjob.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 shadow-lg rounded-2xl p-6 
                             backdrop-blur-lg flex flex-col md:flex-row justify-between gap-6"
                >
                  
                  <div className="space-y-2 text-white/80">
                    <p className="text-lg">
                      <span className="font-semibold text-emerald-300">Name:</span>{" "}
                      {job.name}
                    </p>
                    <p>
                      <span className="font-semibold text-orange-300">Company:</span>{" "}
                      {job.company}
                    </p>
                    <p>
                      <span className="font-semibold text-blue-300">Role:</span>{" "}
                      {job.role}
                    </p>
                    <p>
                      <span className="font-semibold text-purple-300">Education:</span>{" "}
                      {job.education}
                    </p>
                  </div>

                  <div className="self-start md:self-center">
                    <a
                      href={job.resume}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-300 text-sm underline"
                    >
                      📄 View Resume
                    </a>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="text-center mt-16">
              <p className="text-3xl text-zinc-300 font-semibold">
                No Job Applications Yet
              </p>
              <p className="text-zinc-500 mt-2">
                Start applying and track all your applications here.
              </p>
            </div>
          )
        ) : (
          <JobApplicant />
        )}
      </div>
    </div>
  );
};

export default Profile;
