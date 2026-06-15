import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "applications",
  initialState,

  reducers: {
    setApplications: (state, action) => {
      state.applications = action.payload;
    },
  },
});

export default applicationSlice.reducer;
export const { setApplications } = applicationSlice.actions;