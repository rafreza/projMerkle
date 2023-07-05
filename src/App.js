import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Create from './components/Create';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const out = () => {
    signOut(auth).then(()=> {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  }
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/createpost"> Create Post </Link>
        {!isAuth ? <Link to="/login"> Login </Link> : <Link to="/login"> Log Out </Link>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createpost" element={<Create />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
