import React from 'react'

function DeleteComment({id,OnDeleteComment}) {

  function handleDelete(){
    fetch(`/comments/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
      .then(res =>res.json())
      .then(deletedComment =>OnDeleteComment(deletedComment))
  }
  return (
    <div>
      <button onClick={handleDelete} id={id}>Delete</button>
    </div>
  )
}

export default DeleteComment
