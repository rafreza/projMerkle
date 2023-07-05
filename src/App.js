import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Create from './components/Create';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/createpost"> Create Post </Link>
        <Link to="/login"> Login </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createpost" element={<Create />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
