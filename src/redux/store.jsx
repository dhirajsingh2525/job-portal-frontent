import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice"
import jobSlice from "./reducers/jobSlice"

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        jobReducer: jobSlice
    }
})