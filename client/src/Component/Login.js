import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
      <div>
          <form id="login">
              <label>Username</label>
              <input type="text" name='username' />
              <label htmlFor="password">Password</label>
              <input type="password" name='password' />
              <button>Login</button>
              <p>Not yet registered click <Link to={"/signup"}>here</Link> to signup</p>
          </form>
    </div>
  )
}

export default Login