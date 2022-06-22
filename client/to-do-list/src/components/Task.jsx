import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/task.scss';

function Task() {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const submitTask = () => {
    const newTask = { "task": task };
    axios.post('http://localhost:3000/tasks/', newTask)
      .then((res) => { console.log(res); })
      .catch((err) => { console.log(err); })
  }
  return (
    <>
        <h1>this is a trial branch</h1>
      {/* <input type="text" className="taskInput" name="task" value={task} onChange={handleChange} />
            <button className="btn" onClick={submitTask}>Add Task</button> */}
    </>
  )
}

export default Task