import React from 'react'
function Comment({comments}){
  return (
    <section>
      {comments.map((comment) =>(
        <div key={comment.id}>
        <p>{comment.comment}</p>
        </div>
      ))}
    </section>
  )
}

export default Comment
