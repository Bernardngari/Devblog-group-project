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
      .catch(error => (error))
      setShowAdd(()=>!showAdd)
    }
  return (
    <form onSubmit={handleSubmit} className='addComment'>
      <input type='text'
        name="comment"
        onChange={handleChange} 
        value={reply.comment}
      />
      {reply.comment.length ===0? <button className='btn1' disabled>{reply.comment.length===0 ? "typing..." : "Submit"}</button> : <button className='btn1'>Submit</button>}
    </form>
  )
}

export default Commentform
