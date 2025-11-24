import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/reducers/userSlice";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const logoutuser = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#0f1115]/80 backdrop-blur-xl border-b border-white/10 shadow-xl fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/images/logo (1).png"
            alt="Logo"
            className="h-14 w-14 rounded-full border border-white/20 shadow-md"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
            JobPortal
          </h1>
        </div>

        <div className="hidden md:flex items-center text-white gap-10 text-lg font-semibold">
          <Link className="hover:text-emerald-300" to="/findjob">
            Find Job
          </Link>
          <Link className="hover:text-emerald-300" to="/about">
            About Us
          </Link>
          <Link className="hover:text-emerald-300" to="/profile">
            My Profile
          </Link>

          {user && user.role === "recruiter" && (
            <Link className="hover:text-emerald-300" to="/postjob">
              Create a Post
            </Link>
          )}
        </div>

        <div className="hidden md:block">
          <button
            onClick={logoutuser}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 text-white shadow-md font-semibold"
          >
            Log Out
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0b0c10]/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6 text-lg font-medium text-white">

          <Link onClick={() => setOpen(false)} to="/findjob">
            Find Job
          </Link>

          <Link onClick={() => setOpen(false)} to="/about">
            About Us
          </Link>

          <Link onClick={() => setOpen(false)} to="/profile">
            My Profile
          </Link>

          {user && user.role === "recruiter" && (
            <Link onClick={() => setOpen(false)} to="/postjob">
              Create a Post
            </Link>
          )}

          <button
            onClick={() => {
              setOpen(false);
              logoutuser();
            }}
            className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
