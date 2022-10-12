
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
  );
}

export default App;
