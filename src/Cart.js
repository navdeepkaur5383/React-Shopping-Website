import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetocart } from './redux-work/Cartslice'

function Cart() {
  const sel=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
 
  function handleRemove(item){
    dispatch(removetocart(item))

  }
  // useEffect(()=>{
  //   localStorage.setItem('cart',JSON.stringify(sel))
  // },[sel])
  return (
   
   <div className='card-container'>

{
    sel.map((i,j)=>
    <div className='card'>

  <img src={i.image}></img>
  <div class="container">
    <h4>{i.title}</h4> 
    <p>{i.price}</p> 
    <button onClick={()=>handleRemove(i.id)}>Remove to Cart</button>
  </div>
</div>

    
    
    )
}






   </div>

  )
}

export default Cart