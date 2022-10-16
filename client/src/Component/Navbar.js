import React from 'react';
import { Link} from 'react-router-dom';
function Navbar({onLogout,auth}) {
  function handleLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    onLogout()
  }
  
  console.log(auth);
  return (
    <div className='navBar'>
      <h2>Devblog</h2>
      <div className='navCont'>
        <Link className='navLink' to="/" >Home</Link>
        <Link className='navLink' to="/signup" >Sign up</Link> 
        {auth? <Link to="/login" className='navLink' onClick={handleLogout}>Logout</Link>: <Link className='navLink' to="/login">Login</Link>}
      </div>
      </div>
  );
}

export default Navbar;