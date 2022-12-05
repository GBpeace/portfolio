import "./Navbarstyle.css";

import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color,setColor] = useState(false);
  const changeColor= ()=>{
    if (window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  }
  window.addEventListener("scroll",changeColor);
  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/">
        <h1 className="port">Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active": "nav-menu"}>
        <li ><Link to="/" className="port">Home</Link></li>
        <li ><Link to="/project" className="port">Project</Link></li>
        <li ><Link to="/contact" className="port">Contact</Link></li>
        <li ><Link to="/about" className="port">About</Link></li>
      </ul>
      <div className="hamburger " onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}


      </div>

    </div>
  )
}

export default Navbar