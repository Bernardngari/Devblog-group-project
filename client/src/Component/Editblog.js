import React from 'react'
import { useState } from 'react'

function Editblog({blog, onEditBlog,id}) {
  const [blogdata, setBlogData] = useState(blog);
  const [showButton, setShow] = useState(true);

  const handleChange = (e)=>{
    setBlogData({...blogdata, [e.target.name]: e.target.value})
  }
  const toggleButton = () => {
    setShow(()=> !showButton)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`https://devbugger.herokuapp.com/blogs/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blogdata)
    }).then(res => res.json())
      .then(obj => onEditBlog(obj))
      setShow(()=> !showButton)
  }

  const leaveForm =()=>{
    setShow(()=>!showButton)
  }
  return (
    <div>
    {showButton?
    <button onClick={toggleButton} className="comment">EDIT</button>
    :
    <form onSubmit={handleSubmit} className="editform" onMouseLeave={leaveForm}>
			<input type="text" 
				defaultValue={blogdata.title}
				name="title"
				onChange={handleChange}
				 />
			<br />
			<label htmlFor='body' />
			<textarea 
				type="text" 
				rows="10"
				columns="100"
				defaultValue={blogdata.content}
				name="content"
				onChange={handleChange}
			/>
			<br />
			<input type="submit"  value="Submit"/>
		</form>
      
    }
    </div>
  )
}

export default Editblog;
