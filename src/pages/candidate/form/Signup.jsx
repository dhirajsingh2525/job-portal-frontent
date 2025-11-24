import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { asyncsignupuser } from "../../../redux/actions/userAction";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (data) => {
    data.id = nanoid();
    data.appliedjob = [];
    dispatch(asyncsignupuser(data));
    navigate("/signin");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1e3a8a,transparent),radial-gradient(circle_at_80%_80%,#065f46,transparent)] opacity-40"></div>

      <h1 className="absolute top-10 text-[110px] md:text-[150px] font-extrabold text-white/5 tracking-wider select-none pointer-events-none">
        SIGN UP
      </h1>

      <div className="absolute w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full -top-10 -left-10 animate-pulse"></div>

      <div className="relative bg-white/10  rounded-3xl p-10 w-full max-w-md">

        <div className="text-center">
          <FaUserPlus className="text-6xl text-emerald-400 mx-auto drop-shadow-lg" />
          <h2 className="text-4xl font-bold text-white mt-4 tracking-wide">
            Create Account
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            Start your journey — build your career here.
          </p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-6">

          <div>
            <label className="text-gray-300 text-sm block mb-1">
              Full Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-black/40 text-white rounded-xl border border-white/20 outline-none focus:border-emerald-400 transition"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm block mb-1">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 bg-black/40 text-white rounded-xl border border-white/20 outline-none focus:border-emerald-400 transition"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm block mb-1">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="******"
              className="w-full px-4 py-3 bg-black/40 text-white rounded-xl border border-white/20 outline-none focus:border-emerald-400 transition"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm block mb-1">
              Select Role
            </label>
            <select
              {...register("role")}
              className="w-full px-4 py-3 bg-black/40 text-white rounded-xl border border-white/20 outline-none focus:border-emerald-400 transition"
            >
              <option className="bg-gray-900" value="recruiter">
                Recruiter
              </option>
              <option className="bg-gray-900" value="Candidate">
                Candidate
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-xl transition active:scale-95"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-300 text-sm mt-6">
          Already registered?{" "}
          <Link to="/signin" className="text-emerald-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
