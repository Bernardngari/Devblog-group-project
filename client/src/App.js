<<<<<<< HEAD

import Navbar from './Component/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Home from './Component/Home';
// import Blog from './Component/Blog';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/blog" element={<Blog />} />
    </Routes>
    </Router> */}
    </div>
=======
import './App.css';
import Signup from './Signup';
function App() {
  return (
    <div className="app">
      <Signup/>
   </div>
>>>>>>> d6bb063ccbc31439e573f0872dea26060efe8815
  );
}

export default App;
