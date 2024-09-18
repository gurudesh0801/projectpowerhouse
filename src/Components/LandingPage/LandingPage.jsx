// src/components/LandingPage.js
import React from "react";
import "./LandingPage.css";
import img1 from "../../assets/images/img1.webp";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from "react-icons/fa";

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
      </div>

      <div className="hero-content">
        <h1>We Are the Future of Tech Innovation</h1>
        <p>
          Our commitment to pushing the boundaries of technology. By integrating
          cutting-edge solutions and forward-thinking strategies, we empower
          businesses to thrive in an ever-evolving digital landscape
        </p>
        <a href="#contact" className="cta-button">
          Book a Call
        </a>
      </div>
      <div className="hero-image">
        <img src={img1} alt="Software Startup" />
      </div>
    </div>
  );
};

export default LandingPage;
