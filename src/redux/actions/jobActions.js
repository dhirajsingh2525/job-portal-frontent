import { getAllJobs, createJob, updateJob, deleteJob } from "../../apis/api";

import { loadjobs } from "../reducers/jobSlice";

export const asyncLoadJobs = () => async (dispatch) => {
  try {
    const data = await getAllJobs();

    dispatch(loadjobs(data.jobs));
  } catch (error) {
    console.log(error);
  }
};

export const asyncCreateJob = (formData) => async (dispatch) => {
  try {
    await createJob(formData);

    dispatch(asyncLoadJobs());
  } catch (error) {
    console.log(error);
  }
};

export const asyncUpdateJob = (id, formData) => async (dispatch) => {
  try {
    await updateJob(id, formData);

    dispatch(asyncLoadJobs());
  } catch (error) {
    console.log(error);
  }
};

export const asyncDeleteJob = (id) => async (dispatch) => {
  try {
    await deleteJob(id);

    dispatch(asyncLoadJobs());
  } catch (error) {
    console.log(error);
  }
};
