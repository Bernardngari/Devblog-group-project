import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Blog from './Component/Blog';
import Signup from './Signup';
import Login from './Login';

import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
// import Signup from './Component/Signup';
import Login from './Component/Login';

function App() {
 return (
   <div>
     
      <Router>
      <Navbar />
       <Routes>
      <Route exact path="/" element={<Home/>} />
       {/* <Route exact path="/signup" element={<Signup/>}/>  */}
      <Route exact path="/login" element={<Login/>}/>
      
   </Routes>
   </Router> 
   </div>
 );
}
export default App;
