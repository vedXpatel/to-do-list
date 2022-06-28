import React from 'react';
import "../styles/task.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

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
            .then((response) => {console.log(response.data); fetchData()})
            .catch((err) => console.log(err));
    }

    console.log(tasks);

    return (
        <>
            <div className="taskContainer">
                {
                    tasks.map((task) => {
                        return (
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" value={task.id} onChange={deleteTask} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    {task.task}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllTasks