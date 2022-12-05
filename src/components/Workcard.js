import "./Workcardstyle.css";

import React from 'react'
import { NavLink } from "react-router-dom";

const Workcard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects.</h1>
        <div className="project-container">
            
            <div className="project-card">
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--hlwv0HXM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/0s6huk4cr3n4nn1vuh4s.jpg" alt="image"/>
                <h2 className="project-title">Weather app</h2>
                <div className="pro-details">
                    <p>Weather app created using javascript fetch function by fetching api weather data that shows temperature,wind speed,city,weather discription,humidity.</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">view</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src="https://webdevtrick.com/wp-content/uploads/basic-javascript-calculator-with-source-code-980x514.jpg" alt="image"/>
                <h2 className="project-title">Javascript calculator</h2>
                <div className="pro-details">
                    <p>Calculator created using Javascript with addition,subtraction,multiplication and division function ,history function is also available.</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">view</NavLink>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src="https://webdevtrick.com/wp-content/uploads/tic-tac-toe-javascript.jpg" alt="image"/>
                <h2 className="project-title">Tic-Tac-Toe Game</h2>
                <div className="pro-details">
                    <p>Tic-tac-toe game created using javascrpt simple x and zero game with two players with score and winner function and reset game function.</p>
                    <div className="pro-btn">
                        <NavLink to="url.com" className="btn">view</NavLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Workcard;