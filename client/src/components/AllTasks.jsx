import React from 'react';
import "../styles/task.scss";
import axios from 'axios';
import { useEffect, useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';

function AllTasks() {
    const navigate = useNavigate();

    const taskRef = useRef();

    const [tasks, setTasks] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:3333/tasks/")
            .then((response) => setTasks(response.data.tasks))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:3333/tasks/")
            .then((response) => setTasks(response.data.tasks))
            .catch((err) => console.log(err));
    }, [])

    const deleteTask = (e) => {
        e.preventDefault();
        const id = e.target.value;
        axios.post(`http://localhost:3333/deleteTask/${id}`, {})
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
                                <div className="individualTaskContainer card card--accent">
                                    <div class="form-check">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-11">
                                        <label class="form-check-label" for="flexCheckDefault" value={task.id}>
                                            {task.task}
                                        </label>
                                            </div>
                                            <div className="col-lg-1">
                                                <button style={{background:"none",height:"100%",position:"absolute",right:"1vw",bottom:"0.5vh",zIndex:"100"}} onClick={deleteTask} value={task.id} >
                                                </button>
                                        <MdDeleteForever color="#874356" size="3vh" style={{position:"absolute",right:"1vw",zIndex:"1"}} />
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