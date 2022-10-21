import {  NavLink } from "react-router-dom";
import capitalize from "./capitalize";
import { useState, useEffect} from "react";
function Home({auth}) {
  const [showWarning, setWarning] = useState(false)
  const [blogs, setBlogs]= useState([]);
  const [searchValue, setSearch] = useState("")
  const toggleWarning =()=>{
    setWarning(()=>!showWarning)
  }
  useEffect (() => {
    fetch("https://devbugger.herokuapp.com/blogs", {
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((blogs) => {
      setBlogs(blogs)
    });
  }, [auth]);

  //const onDeleteBlog =(id) =>{
  //  let newState = blogs.filter((blog) => blog.id !== id)
  //  setBlogs(newState)
  //}
  
  const handleChange= (e)=>{
    setSearch(e.target.value)
  }
  
      const filtered = blogs.filter((blog) =>blog.title.toUpperCase().includes(searchValue.toUpperCase()) || blog.content.toUpperCase().includes(searchValue.toUpperCase()))

  let blogBody = (filtered.map((blog) =>(
                    <div key={blog.id}>
                      <p className="title">{blog.title}</p>
                      <p>{blog.content.substring(0,200)}...<NavLink to={`/blogs/${blog.id}`}>Read more</NavLink></p>
                      <p><strong>Written by: {capitalize(blog.blogger.username)}</strong></p>
                    </div>
                  )))
  
  return (
    <section className="xy">
      {!showWarning ?
       <p className="guest" onClick={toggleWarning}>{auth? null: "Browsing in guest mode. Some functions will be disabled. Please Login or click to hide. " }</p>
        : null}
        <input type='search'  placeholder="Search blog by title or content" onChange={handleChange}/>
      <div className="container-1">
        {filtered.length > 0 ? blogBody : <h4>Blog with that topic or content not found. Try a different search value.</h4>}
      </div>
    </section>
  );
}

export default Home;
