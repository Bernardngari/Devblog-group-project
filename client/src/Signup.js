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
        label: "UserName",
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Enter Password",
        label: "Password",
      },
      {
        id: 3,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
      },
      {
        id: 4,
        name: "email",
        type: "text",
        placeholder: "Email",
        label: "Email",
      },
      {
        id: 5,
        name: "imageUrl",
        type: "file",
        label: "Upload Image",
      }
    ];

    function onChange(e) {
        setState({...state, [e.target.name]: e.target.value})
    }

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(state)
    }

  return (
    <div>
      <form className="signup" onSubmit={HandleSubmit}>
        {inputs.map((input) =>( 
            <Forminput key={input.id} {...input} value={state[input.name]} onChange={onChange}/>)
              )}
              <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Signup