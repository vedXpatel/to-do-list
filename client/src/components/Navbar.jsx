import React,{useState} from 'react';
import '../styles/navbar.scss';
import AllTasks from './AllTasks';
import Task from './Task';

function Navbar() {

    const [active,setActive] = useState("alltask");


    const navigation = async(index) => {
        ul(index);
        if(index==0){
            clearInterval();
            setTimeout(() => {setActive("alltask")},200);
        }else if (index==1){
            setTimeout(()=>{setActive("task")},200);
        }
    }

    function ul(index) {
        var underlines = document.querySelectorAll(".underline");
        for (var i = 0; i < underlines.length; i++) {
            underlines[i].style.transform = 'translate3d(' + index * 100 + '%,0,0)';
        }
    }

  return (
    <>
        <nav className="">
            <div className="underline" style={{background:"#874356"}}></div>
            <div className="underline" style={{background:"#F68989"}}></div>
            <div className="underline" style={{background:"#FFD0A2"}}></div>
            <a href="#" onClick={()=>{navigation(0)}} id="1" style={{color:"#874356"}}>All Tasks</a>
            <a href="#" onClick={()=>{navigation(1)}} id="2" style={{color:"#874356"}}>New Task</a>
            <a href="#" onClick={()=>{navigation(2)}} id="2" style={{color:"#874356"}}>Settings</a>
            {/* <a href="#" onClick={()=>{navigation(2)}} id="3" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(3)}} id="4" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(4)}} id="5" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(5)}} id="6" style={{color:"#874356"}}>Home</a> */}
        </nav>
        {
            active==="alltask" && <AllTasks/>
        }{
            active === "task" && <Task/>
        }
    </>
  )
}

export default Navbar