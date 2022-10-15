import React from 'react'
function Comment({comments}){
  return (
    <section >
      <p><b>Comments</b></p>
      {comments.map((comment) =>(
        <div key={comment.id}>
        <p className='reply'>{comment.comment}</p>
        </div>
      ))}
    </section>
  )
}

export default Comment
