import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [blog, setBlog] = useState({
      title: "",
      content: "",
    });

    const[errors, setErrors] = useState([])
    const navigate = useNavigate()
    function handleChange(e) {        
        setBlog({ ...blog, [e.target.name]: e.target.value });        
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://devbugger.herokuapp.com/blogs", {
          method: "POST",
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blog),
        }).then((r) => {
          if (r.ok) {
            navigate("/");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
    }

    const errorMessage = (errors.map((error, index)=>(
      <ul>
        <li className='error' key={index}>{error}</li>
      </ul>
    )))
  return (
    <div className='containCreateForm'>
      {errors.length > 0?  errorMessage : null}
      <form onSubmit={handleSubmit} className="addForm" >
			<input type="text" 
				defaultValue={blog.title}
        placeholder="Enter Blog Title"
				name="title"
				onChange={handleChange}
				 />
			<br />
			<label htmlFor='body' />
			<textarea 
				type="text" 
        placeholder='Blog body goes here,  30 characters minimum'
				rows="10"
				columns="100"
				defaultValue={blog.content}
				name="content"
				onChange={handleChange}
			/>
			<br />
			<input type="submit"  value="Submit"/>
		</form>
    </div>
  );
}

export default CreateBlog