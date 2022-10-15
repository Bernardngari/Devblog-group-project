import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({onLogout}) {
  const navigate = useNavigate();
  function handleLogout(){
    fetch("/logout", {
      method: "DELETE"
    })
    navigate("/login")
    onLogout()

  }
  return (
    <p onClick={handleLogout}  className="logout">Logout</p>
  )
}

export default Logout
