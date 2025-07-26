import axios from "axios"
import { loadjobs } from "../reducers/jobSlice"
import instance from "../../components/config"

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

export const asyncdeletejob = (id) => async(dispatch, getState) =>{
    try {
        await instance.delete(`/jobs/${id}`)
        dispatch(asyncloadjobs())
        console.log("delted successfully !")
    } catch (error) {
        console.log(error)
    }
} 

export const asyncupdateJob = (id, data) => async (dispatch, getState) =>{
    try {
        await instance.patch(`/jobs/${id}`, data)
         dispatch(asyncloadjobs())
    } catch (error) {
         console.log(error)
    }
}