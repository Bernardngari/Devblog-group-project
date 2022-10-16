import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { LoginContext } from '../Helper/Context';

function Logout({onLogout}) {

  const {loggedIn, setLoggedIn} = useContext(LoginContext)

  const navigate = useNavigate();
  function handleLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    navigate("/login")
    setLoggedIn(false)
    onLogout()

  }
  return (
    <p onClick={handleLogout}  className="logout">Logout</p>
  )
}

export default Logout
