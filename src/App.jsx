import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/reducers/userSlice';
import Nav from './components/Nav';
import { asyccurrentuser } from './redux/actions/userAction';
import { asyncloadjobs } from './redux/actions/jobThunks';

const App = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userReducer)

  useEffect(() => {
    dispatch(asyccurrentuser())
  }, [])

   useEffect(() => {
      dispatch(asyncloadjobs())
    }, [])
  
  
  return (
    <div >
      {user &&
      <Nav /> }
   <Mainroutes />
    </div>
  )
}

export default App