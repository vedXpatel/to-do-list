import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/addtask" element={<Task/>} />
      </Routes>
    </Router>

    
  )
}

export default App
