import axios from "axios";


const api = axios.create({
  baseURL: "https://job-portal-plateform.onrender.com/api",
  withCredentials: true
});

// Register
export const registerUser = async (userData) => {
  const { data } = await api.post("/register", userData);
  return data;
};

// Login
export const loginUser = async (userData) => {
  const { data } = await api.post("/login", userData);
  return data;
};

export const getMe = async () => {
  const { data } = await api.get("/me");
  return data;
};

// Current Users List
export const getAllUsers = async () => {
  const { data } = await api.get("/");
  return data;
};

// Update User
export const updateUser = async (id, userData) => {
  const { data } = await api.patch(`/${id}`, userData);
  return data;
};
export const logoutUser = async () => {
  const res = await api.post("/logout");
  console.log(res)
   return res;
};


// All Jobs
export const getAllJobs = async () => {
  const { data } = await api.get("/job");
  return data;
};

// Single Job
export const getSingleJob = async (id) => {
  const { data } = await api.get(`/job/${id}`);
  return data;
};

// Create Job
export const createJob = async (formData) => {
  const { data } = await api.post(
    "/job/create",
    formData
  );

  return data;
};

// Update Job
export const updateJob = async (id, formData) => {
  const { data } = await api.patch(
    `/job/${id}`,
    formData
  );

  return data;
};

// Delete Job
export const deleteJob = async (id) => {
  const { data } = await api.delete(`/job/${id}`);
  return data;
};

export const applyJob = async (jobId, formData) => {
  const { data } = await api.post(
    `/applications/apply/${jobId}`,
    formData
  );

  return data;
};