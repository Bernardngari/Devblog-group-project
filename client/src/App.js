import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import BloggerWithComments from './Component/BloggerWithComments';
import { useState} from 'react';
import CreateBlog from './Component/CreateBlog';
import "react-confirm-alert/src/react-confirm-alert.css"
import React from 'react';
import { useEffect } from 'react';

function App() {
  const [auth, setAuth] = useState()
  const [blogs, setBlogs]= useState([]);

  useEffect (() => {
    fetch("https://devbugger.herokuapp.com/blogs", {
      credentials: 'include'
    })
    .then((response) => response.json())
    .then((blogs) => {
      setBlogs(blogs)
    });
  }, [blogs]);


  useEffect(() => {
    fetch('https://devbugger.herokuapp.com/me',{
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((user) => setAuth(user.id))
  },[])

  const onDeleteBlog =(id) =>{
    let newState = blogs.filter((blog) => blog.id !== id)
    setBlogs(newState)
  }
 
 return (
   <div className='mainDiv'>
      <Router>
      <Navbar auth={auth} setAuth={setAuth}/>
       <Routes>
         <Route exact path="/" element={<Home auth={auth} setAuth={setAuth} blogs={blogs}/>} />
         <Route exact path="/signup" element={<Signup />} />
         <Route exact path="/login" element={ <Login />} />
         <Route exact path="/blogs/:id" element={<BloggerWithComments onDeleteBlog={onDeleteBlog} loggedInUser={auth}/>} />
         <Route exact path="/create-blog" element={<CreateBlog />} />
         <Route exact path="/logout" element={<Login />} />
       </Routes>
     </Router>
   </div>
 );
}
export default App;
