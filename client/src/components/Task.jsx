import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Alert} from 'react-bootstrap';
import '../styles/task.scss';

function Task() {
  const [task, setTask] = useState("");
  const [show,setShow] = useState(false);
  const [showError,setShowError] = useState(false);

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const submitTask = () => {
    const newTask = { "task": task };
    axios.post('http://localhost:3000/tasks/', newTask)
      .then((res) => { console.log(res); setShow(true); })
      .catch((err) => { console.log(err); setShowError(true); })
  }
  return (
    <>
      <a href="/" style={{color:"black",position:"relative",top:"7vh",left:"10vw"}}>
        <h4>Go Back To All Tasks</h4>
      </a>
        <div class="card card--accent">
          <h2>Add New Task</h2>
          <label class="input">
            <input class="input__field" value={task} type="text" placeholder=" " onChange={handleChange}/>
          </label>
          <div class="button-group">
            <button className="sendButton" onClick={submitTask}>Add Task</button>
          </div>
        </div>
        {
          show && 
              <Alert variant="success" onClose={() => setShow(false)} dismissible>
                Task Added Successfully
              </Alert>
        }
        {
          showError && 
          <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              Task Not Added. We will resolve the error in few minutes.
          </Alert>
        }
    </>
  )
}

export default Task