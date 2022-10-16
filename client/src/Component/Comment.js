import React from 'react'
import { useState } from 'react';
import UpdateComent from './updatecoment';


function Comment({ comments }) {

  const [show, setShow] = useState(false);
   
  
  function handleClick(comentId) {
    // e.preventDefault()
    fetch(`/comments/${comentId}`)
      .then(r => r.json())
    .then(data => console.log(data))
    // console.log(comentId)
    setShow(!show)
  }


  return (
    <section>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.blogger.username}</strong>
          </p>
          <p>{comment.comment}</p>
          {show ? <UpdateComent comment={comment}/> : null}
          <div className="btn">
            <input
              type="submit"
              value="edit"
              className="edit"
              onClick={() => handleClick(comment.id)}
            />
            <input type="submit" value="delete" className="delete" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Comment
