import React from 'react'
  import  Nav from './Component/Context/Nav';
  import  "./App.css";
  import Login from './Component/Context/Login';
  import Home from './Component/Context/Home';
  import { useContext } from 'react';
  import { allContext } from './Component/Context/Context';
const App = () => {
  const {islogedin}=useContext(allContext)
  return (
    <div  className='App'>
      
       {
        islogedin ? <div> <Nav/><Home/> </div> :<Login/>
       }
       
    </div>
  )
}

export default App



