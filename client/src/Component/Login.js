import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

import { LoginContext } from '../Helper/Context';

const Login = () => {

 const {loggedIn, setLoggedIn} = useContext(LoginContext)

  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const[error, setError] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      if (r.ok) {
        setLoggedIn(true)
         navigate("/");
        r.json().then(data => console.log(data.body.id))
      } else {
        r.json().then((err) => setError(err.message));
      }
    });
    
  }
  return (
      <section>
      <form id="login" onSubmit={handleSubmit}>
        <p className='error'>{ error}</p>
              <label>Username</label>
              <input type="text" name='username' onChange={handleChange} required/>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' onChange={handleChange} required/>
              <button type='submit'>Login</button>
              <p>Not yet registered click <Link to={"/signup"}>here</Link> to signup</p>
          </form>
    </section>
  )
}
export default Login







