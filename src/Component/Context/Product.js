import React, { useEffect } from 'react'
 import { useState } from 'react';
 import './Product.css'
 import {Link} from 'react-router-dom'
 import { useContext } from 'react';
import { allContext } from './Context';

const Product = () => {
  const{product,setProduct,cart,setCart,cartCount,setCartCount}=useContext(allContext)
    const [search,setSearch]=useState();
   

      const handler = (event) =>{
        event.preventDefault();
        const newfilter=product.filter((value)=>{
          return value.title.toLowerCase().includes(search.toLowerCase());
         }) ;
          setProduct(newfilter);
            
   
      
      }
      const addProduct=(ele)=>{
        cart.push(ele)
        // console.log(cart);
        setCartCount(cartCount+1)
      }
    

    //  const handler=((e)=>{
    //     e.preventDefault();
     
  return (
    <div >
    <div className='form'>
       <form onSubmit={handler}>
        <input type='text' placeholder='Search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        <button type='submit'>Search</button>
       </form>

       </div>

      {
        product.length > 0 ? <div className='container'>{
             product.map((product)=>{
              return <div className='cardstyle'>
              <img src={product.image} width="100px" height="100px"/>
              <h3>{product.title}  </h3>
              <p>${product.price}</p>
            <Link to={`/Productdetails/${product.id}`}><button>Product Details</button></Link>
         
            <button onClick={()=>{
            addProduct(product)
          }}>ADD TO CART</button>
              </div>
             })
      }

      </div> : <h2 style={{color:"red",textAlign:"center",marginTop:"100px"}}>no product to display</h2>

      }
    </div>
  )
}

export default Product
