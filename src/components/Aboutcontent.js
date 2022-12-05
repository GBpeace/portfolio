import "./Aboutcontentstyle.css";
import React from "react";
import { Link } from "react-router-dom";



const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react developer i buit responsive websites, i am a frontend developer,
                I have completed graduation in Information & Technology.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                    <div className="img-stack top">
                        <img src="https://assets.justinmind.com/wp-content/uploads/2022/06/website-template-justinmind-768x492.png" className="img" alt="true"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src="https://miro.medium.com/max/1400/0*KKIKxx-KCPG6GkuR" className="img" alt="true"/>
                    </div>
            </div>
        </div>
    </div>
  )
}



export default Aboutcontent;