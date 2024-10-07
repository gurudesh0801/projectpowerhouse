import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/pplogo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <a href="#landingpage" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
