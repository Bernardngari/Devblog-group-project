import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
//import Blog from './Component/Blog';
import Signup from './Component/Signup';
import Login from './Component/Login';
import BloggerWithComments from './Component/BloggerWithComments';
import CreateBlog from './Component/CreateBlog';


function App() {
 return (
   <div>
     <Router>
       <Navbar />
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/signup" element={<Signup />} />
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/blogs/:id" element={<BloggerWithComments />} />
         <Route exact path="/create-blog" element={<CreateBlog />} />
       </Routes>
     </Router>
   </div>
 );
}
export default App;
