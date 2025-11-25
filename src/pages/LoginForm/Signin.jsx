import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaUserShield } from "react-icons/fa";
import { asycsigninuser } from "../../redux/actions/userAction";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (data) => {
    dispatch(asycsigninuser(data));
    navigate("/findjob");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      <div className="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl bottom-10 right-10 animate-pulse delay-700"></div>

      <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(0,255,200,0.15)] rounded-3xl p-10 w-full max-w-md transform animate-[float_6s_ease-in-out_infinite]">

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>

        <div className="text-center">
          <FaUserShield className="text-6xl text-emerald-400 mx-auto drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]" />
          <h2 className="text-4xl font-extrabold text-white mt-4 tracking-wide">
            Welcome Back
          </h2>
          <p className="text-gray-300 text-sm mt-1">
            Access your personalized dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit(submitHandler)} className="mt-10 space-y-7">

          <div className="group">
            <label className="text-gray-300 text-xs mb-1 block group-hover:text-emerald-300 transition">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="yourname@example.com"
              className="w-full px-4 py-3 bg-black/40 text-white rounded-xl 
              border border-white/10 focus:border-emerald-400 
              shadow-[0_0_15px_rgba(0,255,200,0.15)]
              outline-none transition"
              required
            />
          </div>

          <div className="group">
            <label className="text-gray-300 text-xs mb-1 block group-hover:text-emerald-300 transition">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="•••••••••"
              className="w-full px-4 py-3 bg-black/40 text-white rounded-xl 
              border border-white/10 focus:border-cyan-400 
              shadow-[0_0_15px_rgba(0,200,255,0.15)]
              outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="relative overflow-hidden w-full py-3 font-semibold 
            rounded-xl text-black bg-emerald-400 
            shadow-[0_0_20px_rgba(0,255,200,0.5)] 
            hover:bg-emerald-300 active:scale-95 transition"
          >
            <span className="relative z-10">Login</span>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-all duration-700"></div>
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-7">
          Don’t have an account?{" "}
          <Link className="text-emerald-400 hover:underline" to="/signup">
            Create Account
          </Link>
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default Signin;
