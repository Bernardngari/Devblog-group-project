import React, { useState } from 'react'

const UpdateComent = ({comment}) => {

    const [content, setContent] = useState(comment.comment)
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/comments/${comment.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                "comment":content
            })
        })
        setContent("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="body"
          id=""
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Save change" />
      </form>
    </div>
  );
}

export default UpdateComent