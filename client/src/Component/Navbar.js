import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import {Link} from 'react-router-dom';
>>>>>>> 3dae0d3cd2315f3e21b85d2c83e5a879e01035c9


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