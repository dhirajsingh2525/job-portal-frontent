import axios from "axios"
import { setUser } from "../reducers/userSlice"
import instance from "../../components/config"


export const asyccurrentuser = () => async(dispatch, getState) =>{
    try {
         const data = JSON.parse(localStorage.getItem('users'))
         if(data){
           dispatch(setUser(data))
           console.log("session restore")
         } else{
            console.log("signin please")
         }
    } catch (error) {
        console.log(error)
    }
}
export const asycsigninuser = (user) => async (dispatch) => {
  try {
    const { data } = await instance.get('/users?email=' + user.email + "&password=" + user.password);
    if (data[0]) {
      localStorage.setItem('users', JSON.stringify(data[0]));
      dispatch(setUser(data[0]));
      
    } else {
      console.log("please create account !")
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const asyncsignupuser = (userData) => async(dispatch, getState) =>{
    try {
      await instance.post('/users', userData) 
      console.log("user register !")
    } catch (error) {
     console.log(error) 
    }
}


export const asyncupdateuser = (id, user) => async(dispatch) => {
    try {
      const { data } = await instance.patch('/users/'+ id, user);
     
      dispatch(setUser(data)); 
      localStorage.setItem('users', JSON.stringify(data));
    } catch (error) {
        console.log(error)
    }
}
export const asyncFetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await instance.get("/users");
    return data; // return directly, not dispatching anything
  } catch (error) {
    console.log("Error fetching all users", error);
    return [];
  }
};



