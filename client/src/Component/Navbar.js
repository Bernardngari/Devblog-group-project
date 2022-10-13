import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='nav-bar'>
      <h2>Devblog</h2>
      <div >
      <Link className='nav-link' to="/" >Home</Link>
      <Link  className='nav-link'to="/signup" >Sign up</Link> 
      <Link  className='nav-link' to="/login" >Login</Link>
      </div>
      </div>
  );
}

export default Navbar;