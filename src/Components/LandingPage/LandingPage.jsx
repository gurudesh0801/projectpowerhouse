// src/components/LandingPage.js
import React from "react";
import "./LandingPage.css";
import img1 from "../../assets/images/bgimg4.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";

const LandingPage = () => {
  return (
    <div id="landingpage" className="hero-container">
      {/* Icons Background */}
      <div className="icon-background">
        <FaHtml5 className="icon" />
        <FaCss3Alt className="icon" />
        <FaJs className="icon" />
        <FaReact className="icon" />
        <FaPython className="icon" />
        <SiAdobephotoshop className="icon" />
        <FaFigma className="icon" />
      </div>

      <div className="hero-content">
        <h2>Welcome to</h2>
        <h1>Project Powerhouse</h1>
        <p>
          Our commitment to pushing the boundaries of technology. By integrating
          cutting-edge solutions and forward-thinking strategies, we empower
          businesses to thrive in an ever-evolving digital landscape
        </p>
        <a href="#contact" className="cta-button">
          Contact
        </a>
        <a href="#contact" className="cta-button">
          Book a Demo
        </a>
      </div>
      <div className="hero-image">
        <img src={img1} alt="Software Startup" />
      </div>
    </div>
  );
};

export default LandingPage;
