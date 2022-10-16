import React from 'react'
import UpdateComent from './updatecoment';
import DeleteComment from './DeleteComment';
function Comment({ comments, onEditComment,loggedInUser}) {
  return (
    <section>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.blogger.username}</strong>
          </p>
          <p>{comment.comment}</p>
          {loggedInUser === comment.blogger.id ? <UpdateComent comment={comment} id={comment.id} onEditComment={onEditComment}/> : null}
          {loggedInUser === comment.blogger.id ? <DeleteComment id={comment.id}/> : null} 
        </div>
        
      ))}
    </section>
  );
}

export default Comment
