import { instance } from "../../components/config"
import { setUser } from "../reducers/userSlice"


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
export const asycsigninuser = (user) => async(dispatch, getState) =>{
    try {
        const {data} = await instance.get('/users?email=' + user.email + "&password=" + user.password)
        if(data[0]){
            localStorage.setItem('users', JSON.stringify(data[0]))
             dispatch(asyccurrentuser())
             console.log("logged in user")
        }else{
          console.log("wrong credentials")
        }
    } catch (error) {
        console.log(error)
    }
}

export const asyncsignupuser = (userData) => async(dispatch, getState) =>{
    try {
      await instance.post('/users', userData) 
      console.log("user register !")
    } catch (error) {
     console.log(error) 
    }
}

export const asyncupateuser = (id, users) => async(dispatch, getState) =>{
    try {
      const {data} = await instance.patch('/users/'+id, users)
      localStorage.setItem('users', JSON.stringify(data))
            dispatch(asyccurrentuser())
    } catch (error) {
        console.log(error)
    }
}