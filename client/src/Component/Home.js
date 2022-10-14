import React, { useEffect, useState } from "react";
import Createcomment from "./Createcomment";
import { NavLink } from "react-router-dom";
function Home() {
  const capitalize= (word)=>{
    let result = word.charAt(0).toUpperCase() + word.slice(1)
    return result
  }
  const [blogs, setBlogs]= useState([]);
  useEffect (() => {
    fetch("http://127.0.0.1:3000/blogs")
    .then((response) => response.json())
    .then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <>
      <h1>Welcome to Devblog</h1>
      <div className="container-1">
        {blogs.map((blog) =>(
          <div key={blog.id}>
            <p className="title">{blog.title}</p>
            <p>{blog.content.substring(0,200)}...<NavLink to={`/blogs/${blog.id}`}>Read more</NavLink></p>
            <p><strong>Written by: {capitalize(blog.blogger.username)}</strong></p>
            <div>
              <Createcomment id={blog.id}/>
            </div>
            </div>
          
        ))}
      </div>
  
    </>
  );
}

export default Home;
