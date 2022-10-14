import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
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
         navigate("/");
        r.json().then(data => console.log(data))
      } else {
        r.json().then((err) => console.log(err));
      }
    });
  }
  return (
      <div>
          <form id="login" onSubmit={handleSubmit}>
              <label>Username</label>
              <input type="text" name='username' onChange={handleChange} required/>
              <label htmlFor="password">Password</label>
              <input type="password" name='password' onChange={handleChange} required/>
              <button type='submit'>Login</button>
              <p>Not yet registered click <Link to={"/signup"}>here</Link> to signup</p>
          </form>
    </div>
  )
}
export default Login







