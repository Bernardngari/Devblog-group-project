import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navBar">
      <h2>Devblog</h2>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/signup">
          Sign up
        </Link>
        <Link className="navLink" to="/login">
          Login
        </Link>
        <Link className="navLink" to="/create-blog">
          Add Blog
        </Link>
      </div>
    </div>
  );
}

export default Navbar;