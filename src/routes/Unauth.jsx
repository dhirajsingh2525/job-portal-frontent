import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"


const Unauth = (props) => {
  const {user} = useSelector((state) => state.userReducer)

   return !user ? props.children : <Navigate to='/findjob' /> 
}

export default Unauth;