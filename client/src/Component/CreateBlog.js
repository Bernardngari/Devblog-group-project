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
        console.log(blog)

        fetch("/blogs", {
          method: "POST",
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
        });
    }

    console.log(errors)

  return (
    <div>
      <form onSubmit={handleSubmit}>
              <input type="text" name='title' value={blog.title} onChange={handleChange}/> <br /> <br />
              <textarea name="content" value={blog.content} onChange={handleChange}></textarea> <br /> <br />
        <input type="submit" value="Post Blog" />
      </form>
    </div>
  );
}

export default CreateBlog