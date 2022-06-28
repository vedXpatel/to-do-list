import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './components/Task';
import AllTasks from './components/AllTasks.jsx';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<AllTasks/>} />
        <Route path="/addtask" element={<Task/>} />
      </Routes>
    </Router>

    
  )
}

export default App
