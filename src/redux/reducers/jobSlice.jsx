import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    jobs: [],
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,

    reducers : {
        loadjobs: (state, action) =>{
            state.jobs = action.payload
        }
    },
 
})

export default jobSlice.reducer;
export const {loadjobs} = jobSlice.actions;