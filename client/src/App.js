import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import BloggerWithComments from './Component/BloggerWithComments';
import { useState, useEffect} from 'react';

function App() {
  const [auth, setAuth] = useState(0)
  const [logout, setLogout] = useState(false)
  const [deletedblog, setDeletedBlog] = useState({})
  function onLogout(){
    setLogout(()=>!logout)
    setAuth(0)
  }

  function onLogin(id){
    setAuth(id) 
  }

  const onDeleteBlog= () =>{
    window.location.reload()
  }
    
 return (
   <div>
      <Router>
      <Navbar onLogout={onLogout} auth={auth}/>
       <Routes>
      <Route exact path="/" element={<Home onLogin={onLogin} logout={logout} auth={auth}/>} />
       <Route exact path="/signup" element={<Signup/>}/> 
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/blogs/:id" element={<BloggerWithComments deletedblog={deletedblog} loggedInUser={auth} onDeleteBlog={onDeleteBlog}/>} />
   </Routes>
   </Router> 
   </div>
 );
}
export default App;
