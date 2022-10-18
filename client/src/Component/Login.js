import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import './Login.css'

const Login = ({onLogin}) => {
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
    fetch("https://devbugger.herokuapp.com/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      if (r.ok) {
         navigate("/");
        r.json().then(data => onLogin(data.body.id))
      } else {
        r.json().then((err) => setError(err.message));
      }
    });
    
  }
  return (
      <div className="login">
      <form className="form" id="login" onSubmit={handleSubmit}>
      <p>Login</p>
        <p className='error'>{ error}</p>
              <div className="label"><label>Username</label></div>
              <input type="text" placeholder="username" name='username' onChange={handleChange} required/>
              <div className="label"><label htmlFor="password">Password</label></div>
              <input type="password" placeholder="password" name='password' onChange={handleChange} required/>
              <button type='submit'>Login</button>
              <p className="message" >Not yet registered click <Link to={"/signup"}>here</Link> to signup</p>
          </form>
    </div>
  //  <div className='container-2'>
  //  <form id="login" onSubmit={handleSubmit}>
  //    <p className='error'>{ error}</p>
  //          <h3>Login Details</h3>
  //          <label className='lab'>Username</label>
  //          <input type="text" name='username' onChange={handleChange} required/>
  //          <label className='lab' htmlFor="password">Password</label>
  //          <input type="password" name='password' onChange={handleChange} required/>
  //          <button className="btn2" type='submit'>Login</button>
  //          <p>Not yet registered click <Link to={"/signup"}>here</Link> to signup</p>
  //      </form>
  //</div>
  )
}
export default Login







