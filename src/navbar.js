import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';


export default function Navbar() {
  const sel=useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  return (<div>

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to='/cart'>Cart{sel.length}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
    
         
  );
}