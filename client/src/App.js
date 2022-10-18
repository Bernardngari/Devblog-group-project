import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import BloggerWithComments from './Component/BloggerWithComments';
import { useState, useEffect} from 'react';
import CreateBlog from './Component/CreateBlog';
import "react-confirm-alert/src/react-confirm-alert.css"


function App() {
  const [auth, setAuth] = useState(0)
  const onLogin =(id)=>{
    setAuth(id)
  }
  //useEffect(()=>{
  //  fetch("https://devbugger.herokuapp.com/me")
  //  .then(res=>res.json())
  //  .then((user) => setAuth(user.id))
  //},[])

  const onDeleteBlog= () =>{
    window.location.reload()
  }
    
 return (
   <div className='mainDiv'>
      <Router>
      <Navbar auth={auth} setAuth={setAuth}/>
       <Routes>
         <Route exact path="/" element={<Home auth={auth}/>} />
         <Route exact path="/signup" element={<Signup />} />
         <Route exact path="/login" element={ <Login onLogin={onLogin} />} />
         <Route exact path="/blogs/:id" element={<BloggerWithComments onDeleteBlog={onDeleteBlog} loggedInUser={auth}/>} />
         <Route exact path="/create-blog" element={<CreateBlog />} />
         <Route exact path="/logout" element={<Login />} />
       </Routes>
     </Router>
   </div>
 );
}
export default App;
