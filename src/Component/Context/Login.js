import React, { useState } from 'react'
import { useContext } from 'react';
import { allContext } from './Context';

 var style={
    width:"300px",
    boxShadow:"0 0 10px black",
    padding:"30px",
      margin:"150px auto",
      textAlign:"center"



 }
const Login = () => {
    const {setIslogedin,setUser,user}  = useContext(allContext);


    const handle=()=>{
        if(user.name==="ramesh" && user.password==="ramesh@123"){
            setIslogedin(true);

        }
        else{
            alert("Enter Proper Crendential")
        }
    }
  return (
    <div style={style}>
    <h3>Login Form</h3>
       <div>
        <input type="text" placeholder='User-Name' onChange={(e)=>{setUser({
            ...user,
            name:e.target.value
        })}}/>
       </div><br/>
       <div>
        <input type="password" placeholder='Password' onChange={(e)=>{setUser({
            ...user,
            password:e.target.value
        })}}/>

       </div><br/>
       <div>
        <button onClick={handle}>Login</button>
       </div>

    </div>
  )
}

export default Login