import React from 'react';
import { Link} from 'react-router-dom';
function Navbar({onLogout,auth, setAuth}) {
  function handleLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    setAuth(0)
    onLogout()
  }
  return (
    <div className="navBar">
      <h2>Devblog</h2>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        {auth ?
         null
         :
         <Link className="navLink" to="/signup">
          Sign up
        </Link>
         }
        {auth? <Link to="/login" className='navLink' onClick={handleLogout}>Logout</Link>: <Link className='navLink' to="/login">Login</Link>}
        {auth ?
        <Link className="navLink" to="/create-blog">
        Add Blog
      </Link>
      :
      null
      }
      </div>
    </div>
  );
}

export default Navbar;