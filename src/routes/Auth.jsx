import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const Auth = (props) =>{
 const {user,loading} = useSelector((state) => state.userReducer)
 

  if (loading) {
    return <h1>Loading...</h1>;
  }
  
 return user ? props.children : <Navigate to='/signin' />
}
export default Auth;