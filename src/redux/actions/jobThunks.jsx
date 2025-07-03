import axios from "axios"
import { instance } from "../../components/config"
import { loadjobs } from "../reducers/jobSlice"

export const asyncloadjobs = () => async(dispatch, getState) =>{
    try {
        const {data} = await instance.get('/jobs') 
        console.log("job data",data)
        localStorage.setItem('jobs', JSON.stringify(data))
        dispatch(loadjobs(data))  
    } catch (error) {
        console.log(error)
    }
}

export const asynccreatejob = (data) => async(dispatch, getState) =>{
     try {
        await instance.post('/jobs', data)
        dispatch(asyncloadjobs())
     } catch (error) {
         console.log(error)
     }
}