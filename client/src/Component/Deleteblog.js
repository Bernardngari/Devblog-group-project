import React from 'react'
import {useNavigate} from 'react-router-dom'

function Deleteblog({id,onDeleteBlog}){
  const navigate = useNavigate()
  const handleDelete= ()=>{
    fetch(`/blogs/${id}`,{
      method: "DELETE", 
      headers:{
        "Content-Type": "application/json"
      }
    })
    navigate("/")
    onDeleteBlog();
    
  }
  return (
    <div>
      <button onClick={handleDelete} id={id}>Delete</button>
    </div>
  )
}

export default Deleteblog
