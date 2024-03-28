import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { fetchproducts } from './redux-work/productslice';
import { addtocart } from './redux-work/Cartslice';

function Home() {
    const {data,state}=useSelector((state)=>state.product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchproducts())

    },[])
    const handleAdd=(item)=>{
        dispatch(addtocart(item))

    }

  return (
    <div className="card-container">

{
    data.map((i,j)=>
    <div className='card'>

  <img src={i.image}></img>
  <div className="container">
    <h4>{i.title}</h4> 
    <p>{i.price}</p> 
    <button onClick={()=>handleAdd(i)}>Add to Cart</button>
  </div>
</div>

    
    
    )
}


    </div>
  )
}

export default Home