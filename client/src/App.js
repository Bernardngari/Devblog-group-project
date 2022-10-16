import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import BloggerWithComments from './Component/BloggerWithComments';
import { useState, useEffect} from 'react';

import { LoginContext } from './Helper/Context';

function App() {
  const [auth, setAuth] = useState(0)
  const [logout, setLogout] = useState(false)
  function onLogout(){
    setLogout(()=>!logout)
  }

  function onLogin(id){
    setAuth(id) 
  }

  const [loggedIn, setLoggedIn] = useState(false)
    
 return (
   <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <Router>
      <Navbar onLogout={onLogout} auth={auth}/>
       <Routes>
      <Route exact path="/" element={<Home onLogin={onLogin} logout={logout}/>} />
       <Route exact path="/signup" element={<Signup/>}/> 
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/blogs/:id" element={<BloggerWithComments loggedInUser={auth}/>} />
   </Routes>
   </Router> 
   </LoginContext.Provider>
 );
}
export default App;
