import React, { useState } from 'react'
import Forminput from './Forminput'
import './signup.css'
const Signup = () => {
    const [state, setState] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
        imageUrl:""
    })

    const inputs = [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "username",
        errorMessage:
          "username should include 3-16 letters and should not contain special characters!",
        label: "UserName",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Enter Password",
        errorMessage:
          "should be 6-16 characters long should contain 1 special character 1 number and one uppercase letter!",
        label: "Password",
        pattern: "[a-zA-Z0-9!@#$%^&*]{6,16}",
        required: true,
      },
      {
        id: 3,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "passwords do not match!",
        label: "Confirm Password",
        pattern: state.password,
        required: true,
      },
      {
        id: 4,
        name: "email",
        type: "text",
        placeholder: "Email",
        errorMessage: "should be a valid email address!",
        label: "Email",
        required: true,
      },
    ];

    function onChange(e) {
        setState({...state, [e.target.name]: e.target.value})
    }

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(state)
    }

  return (
      <div className='container'>
          <h1>Register</h1>
      <form className="signup" onSubmit={HandleSubmit}>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={state[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup