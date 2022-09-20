import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
