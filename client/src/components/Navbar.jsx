import React,{useRef} from 'react';
import {useNavigate} from "react-router-dom";
import '../styles/navbar.scss';

function Navbar() {

    const navigation = async(index) => {
        ul(index);
        if(index==0){

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
            <a href="#" onClick={()=>{navigation(0)}} id="1" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(1)}} id="2" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(2)}} id="3" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(3)}} id="4" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(4)}} id="5" style={{color:"#874356"}}>Home</a>
            <a href="#" onClick={()=>{navigation(5)}} id="6" style={{color:"#874356"}}>Home</a>
        </nav>
    </>
  )
}

export default Navbar