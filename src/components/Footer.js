import "./Footerstyle.css";
import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginLeft: "2rem" }} />&nbsp; 
                        <p>India,</p>
                        <p>Mumba,i</p>
                        <p>Maharashtra.</p>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "white", marginLeft: "2rem" }} />&nbsp;
                            1-234-5678.
                        </h4>
                    </div>
                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "white", marginLeft: "2rem" }} />&nbsp;
                            info@gmail.com.
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About Me</h4>
                    <p>I am a Fresher i completed my graduation as Bachelors of science in Information and Technology, known skill React.js, curious to learn new things and want to work with an organization that helps me grow and at the same time my contribution to the growth of it.
                    </p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "white", marginLeft: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "white", marginLeft: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "white", marginLeft: "1rem" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer