import React from 'react'
import { useState } from 'react'

function Editblog({blog, onEditBlog, blogOwner,id}) {
  const [blogdata, setBlogData] = useState(blog);
  const [showButton, setShow] = useState(true);

  const handleChange = (e)=>{
    setBlogData({...blogdata, [e.target.name]: e.target.value})
  }
  const toggleButton = () => {
    setShow(()=> !showButton)
  }

  console.log(blogdata);

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(`/blogs/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blogdata)
    }).then(res => res.json())
      .then(obj => onEditBlog(obj))
      setShow(()=> !showButton)
  }
  return (
    <div>
    {showButton?
    <button onClick={toggleButton}>EDIT</button>
    :
    <form onSubmit={handleSubmit} className="editform">
			<label htmlFor="title"><strong style={{color:"white"}}>Change Blog title</strong></label>
			<br />
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
			<button type="submit">Submit</button>
		</form>
      
    }
    </div>
  )
}

export default Editblog;
