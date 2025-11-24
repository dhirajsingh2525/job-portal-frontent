import React, { useState, useEffect } from "react";
import { FaSearch, FaInstagram, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncdeletejob } from "../../redux/actions/jobThunks";

const Findjob = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");

  const { jobs } = useSelector((state) => state.jobReducer);
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filterjobs = (jobs || []).filter((job) =>
    job?.title?.toLowerCase().includes(search.toLowerCase())
  );

  const deleteHandler = (id) => {
    dispatch(asyncdeletejob(id));
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1350&q=80')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm"></div>
      <div className="absolute top-[15%] left-[20%] w-[420px] h-[420px] bg-emerald-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[15%] right-[20%] w-[380px] h-[380px] bg-purple-600/20 blur-[150px] rounded-full"></div>

      <section className="relative z-20 text-center pt-24 mt-10 pb-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Discover Your <span className="text-emerald-400">Dream Job</span>
        </h1>

        <p className="mt-4 text-zinc-300 max-w-xl mx-auto text-lg">
          Explore thousands of high-quality tech jobs from trusted companies.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <FaSearch className="absolute left-5 top-4 text-zinc-500 text-lg" />

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search job title, company, skill..."
              className="
                w-full py-4 pl-14 pr-4 bg-white/5 border border-white/10
                rounded-2xl text-white 
                focus:border-emerald-400 outline-none
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
              "
            />
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-10 mt-10 px-4 relative z-20">

        {filterjobs.length > 0 ? (
          filterjobs.map((job) => (
            <div
              key={job?.id}
              className="
                w-full sm:w-[85%] md:w-[45%] lg:w-[30%]
                bg-[#0B0F19]/80 border border-white/10 
                rounded-3xl p-6 backdrop-blur-xl shadow-xl
                hover:border-emerald-400 hover:shadow-emerald-400/20
                transition-all duration-500
              "
            >

              <div className="flex items-center gap-4">
                <img
                  src={job?.logo}
                  className="w-16 h-16 rounded-xl bg-white/10 p-2"
                />

                <div>
                  <h3 className="font-bold text-xl">{job?.company}</h3>
                  <p className="text-xs text-zinc-400">
                    {job.type || "Full Time"} • {job?.location}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-zinc-400 uppercase">Role</p>
                <h2 className="text-xl text-emerald-300 font-semibold">
                  {job?.title}
                </h2>
              </div>

              <div className="flex justify-between text-sm mt-3">
                <p className="text-emerald-300 font-medium">💰 {job?.salary}</p>
                <p className="text-zinc-400">📍 {job?.location}</p>
              </div>

              <p className="text-zinc-400 text-sm mt-2 mb-4 leading-relaxed">
                {job?.description?.slice(0, 90)}...
              </p>

              <div className="flex justify-between items-center">
                <Link
                  to={`/job-detail/${job?.id}`}
                  className="text-emerald-300 hover:underline"
                >
                  View Details →
                </Link>

                {user?.role === "recruiter" && user?.id === job?.postedBy ? (
                  <div className="flex gap-2">
                    <Link
                      to={`/update-job/${job?.id}`}
                      className="px-3 py-1 bg-yellow-400 text-black rounded-md"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteHandler(job?.id)}
                      className="px-3 py-1 bg-red-600 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <Link  to={`/apply/${job?.id}`} className="px-4 py-2 bg-emerald-600 rounded-lg">
                    Apply
                  </Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-4xl text-zinc-500 mt-20">No Jobs Found 😞</h2>
        )}
      </div>
      <footer className="mt-28 px-6 pb-12 relative z-20">
        <div className="max-w-6xl mx-auto bg-black/40 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h2 className="text-3xl font-bold">
                Job<span className="text-emerald-400">Finder</span>
              </h2>
              <p className="text-zinc-400 mt-2">
                Helping developers connect with world-class opportunities.
              </p>

              <div className="flex gap-3 mt-4">
                <a className="p-2 bg-white/5 rounded-lg"><FaInstagram /></a>
                <a className="p-2 bg-white/5 rounded-lg"><FaLinkedin /></a>
                <a className="p-2 bg-white/5 rounded-lg"><FaGithub /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">Company</h4>
                <ul className="text-zinc-400 space-y-2 text-sm mt-2">
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Resources</h4>
                <ul className="text-zinc-400 space-y-2 text-sm mt-2">
                  <li><Link to="/help">Help</Link></li>
                  <li><Link to="/privacy">Privacy</Link></li>
                  <li><Link to="/terms">Terms</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Weekly Jobs</h4>
              <p className="text-zinc-400 text-sm mt-2">
                Get weekly high-paid tech jobs directly in your inbox.
              </p>

              <div className="flex mt-4 gap-2">
                <input
                  className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg w-full text-sm"
                  placeholder="Enter email"
                />
                <button className="bg-emerald-500 px-4 py-2 rounded-lg text-black font-semibold">
                  Go
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-4 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} JobFinder • Made with <FaHeart className="inline-block text-red-500" />
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Findjob;
