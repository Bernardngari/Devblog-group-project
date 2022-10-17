import React, { useState } from 'react'
//import Login from './Login';

const UpdateComent = ({comment, id, onEditComment}) => {
    const [content, setContent] = useState(comment.comment)
    const [showButton, setShow] = useState(true);
    const toggleShow= ()=>{
      setShow(()=>!showButton)
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/comments/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "comment":content
            })
        })
        .then(res=> res.json())
        .then(edittedComment =>onEditComment(edittedComment))
        setShow(()=>!showButton)
    }
  return (
    <div>
      {showButton?
      <button onClick={toggleShow} id={id} className='comment'>Edit</button>
      :
      <form onSubmit={handleSubmit} className='editComment'>
        <textarea
          name="comment"
          defaultValue={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Save change" />
      </form>

      }
    </div>
  );
}

export default UpdateComent