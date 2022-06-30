import React from 'react';
import "../styles/task.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AllTasks() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:3000/tasks/")
            .then((response) => setTasks(response.data.tasks))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:3000/tasks/")
            .then((response) => setTasks(response.data.tasks))
            .catch((err) => console.log(err));
    }, [])

    const deleteTask = (e) => {
        const id = e.target.value;
        axios.post(`http://localhost:3000/deleteTask/${id}`, {})
            .then((response) => { console.log(response.data); fetchData() })
            .catch((err) => console.log(err));
    }

    console.log(tasks);

    return (
        <>
            <div className="taskContainer">
                {
                    tasks.map((task) => {
                        return (
                            <>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-auto">
                                    <label class="checkbox path">
        <input type="checkbox" className="" type="checkbox" id="flexCheckDefault" value={task.id} onChange={deleteTask}/>
        <svg viewBox="0 0 21 21">
            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
        </svg>
    </label>
                                    </div>
                                    <div className="col-md-auto">
                            <div className="individualTaskContainer card card--accent">
                                <div class="form-check">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {task.task}
                                    </label>
                                </div>
                            </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllTasks