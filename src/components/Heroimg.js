import "./Heroimgstyle.css";

import React from 'react'
import IntroImg from "../assets/intro-img.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="introimg" />
        </div>
        <div className="content">
            <p>Hey! I am Gaurav Bhosale. I am a Fresher.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg