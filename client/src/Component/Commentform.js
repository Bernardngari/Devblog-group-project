import React from 'react'
import { useState } from 'react'

function Commentform({showAdd,setShowAdd, id, onAddComment}){
  const[reply, setReply] = useState({
    comment:"",
    blog_id: id
  })

  function handleChange(e){
    setReply({...reply, [e.target.name]: e.target.value})
  }
 
    function handleSubmit(e){
      e.preventDefault();
      fetch("/comments",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reply)
      })
      .then((res) =>res.json())
      .then(data => onAddComment(data))
      setShowAdd(()=>!showAdd)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        name="comment"
        onChange={handleChange} 
        value={reply.comment}
      />
      <button className='btn1'>Submit</button>
    </form>
  )
}

export default Commentform
