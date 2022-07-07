import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>} />
      </Routes>
    </Router>
  )
}

export default App
