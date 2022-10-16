import React, { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import capitalize from "./capitalize";
function Home({onLogin,logout,auth}) {
  const [blogs, setBlogs]= useState([]);
  const [showWarning, setWarning] = useState(false)
  const toggleWarning =()=>{
    setWarning(()=>!showWarning)
  }
  useEffect (() => {
    fetch("http://127.0.0.1:3000/blogs")
    .then((response) => response.json())
    .then((blogs) => {
      setBlogs(blogs)
    });
  }, [logout]);

  useEffect(()=>{
    fetch("/me")
    .then(res=>res.json())
    .then((data) => onLogin(data.id))
  },[])
  

  return (
    <section>
      {!showWarning ?
       <p className="guest" onClick={toggleWarning}>{auth? null: "Browsing in guest mode. Some functions will be disabled. Please Login  x" }</p>
        : null}
      <div className="container-1">
        {blogs.map((blog) =>(
          <div key={blog.id}>
            <p className="title">{blog.title}</p>
            <p>{blog.content.substring(0,200)}...<NavLink to={`/blogs/${blog.id}`}>Read more</NavLink></p>
            <p><strong>Written by: {capitalize(blog.blogger.username)}</strong></p>
            </div>
        ))}
      </div>
  
    </section>
  );
}

export default Home;
