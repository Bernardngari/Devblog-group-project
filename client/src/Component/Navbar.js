import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

import { LoginContext } from '../Helper/Context';

function Navbar({onLogout,auth}) {

  const {loggedIn, setLoggedIn} = useContext(LoginContext)
  
  console.log(auth);
  return (
    <div className='navBar'>
      <h2>Devblog</h2>
      <div className='navCont'>
        <Link className='navLink' to="/" >Home</Link>
        <Link className='navLink' to="/signup" >Sign up</Link> 
        {/*<Link className='navLink' to={auth? "/logout" : "/login"} >{auth? "Logout" : "Login"}</Link>*/}
        {loggedIn? <Logout onLogout={onLogout} />: <Link to="/login">Login</Link> }
       
      </div>
      </div>
  );
}

export default Navbar;