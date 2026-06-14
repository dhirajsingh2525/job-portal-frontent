import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes' 
import Nav from './components/Nav';
import { useDispatch } from 'react-redux';
import { asyncgetMe } from './redux/actions/userActions';


const App = () => {
  const dispatch = useDispatch()
useEffect(() => {
dispatch(asyncgetMe());
}, [dispatch]);

  
  return (
    <div className='main-div'>
      <Nav /> 
   <Mainroutes />
    </div>
  )
}


export default App;