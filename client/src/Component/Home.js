import React, { useEffect, useState } from "react";


function Home() {
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
            <p>title: {blog.title}</p>
            <p>content: {blog.content}</p>
            <p>blogger_id: {blog.blogger_id}</p>
            </div>
        ))}
      </div>
  
    </>
  );
}

export default Home;
