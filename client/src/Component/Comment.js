import React from 'react'
import UpdateComent from './updatecoment';
import DeleteComment from './DeleteComment';
function Comment({ comments, onEditComment,loggedInUser}) {
  return (
    <section>
      {comments.map((comment) => (
        <div key={comment.id} className='commentDiv'>
          <p>
            <strong>@{comment.blogger.username} says </strong>
          </p>
          <p>{comment.comment}</p>
          <div className='flexCommentButtons'>
            {loggedInUser === comment.blogger.id ? <UpdateComent comment={comment} id={comment.id} onEditComment={onEditComment}/> : null}
            {loggedInUser === comment.blogger.id ? <DeleteComment id={comment.id}/> : null} 
          </div>
          
        </div>
        
      ))}
    </section>
  );
}

export default Comment
