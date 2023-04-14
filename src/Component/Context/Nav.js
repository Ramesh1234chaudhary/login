import React from 'react'
 import "./Nav.css";
 import { useContext } from 'react';
import { allContext } from './Context';
import {Link} from 'react-router-dom'

const Nav = ({state}) => {
    const {setIslogedin,user,cartCount}  = useContext(allContext);

  return (
    <div className='nav'>
         <div id='title'>
            <h2>React Context</h2>
         </div>
         <div id='menu'>
            <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Technologies">Technologies</Link>
            
             <button onClick={()=>{setIslogedin(false)}}>Logout</button>
             <span style={{color:"yellow" , fontSize:"22px" , marginLeft:"30px"}}>{user.name}</span>
            
             
         </div>
         <div className='add'>  <Link to={'/cart'}>
    <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-flat-style-260nw-1558548761.jpg" style={{width:"30px",marginTop:"10px"}}/>
       {cartCount>0 ? <span>{cartCount}</span>:<p></p>}
        </Link>
        </div>

    </div>
  )
}

export default Nav