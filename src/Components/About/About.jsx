import React from "react";
import "./About.css";
import aboutImage from "../../assets/images/bgimg5.png"; // Make sure to replace with your image path

const About = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-text">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
              We empower businesses to deliver exceptional customer experiences
              through innovative technology solutions. Our mission is to bridge
              the gap between customers and companies, making support more
              accessible, efficient, and personalized. Founded by experienced
              technologists and customer support experts, we're passionate about
              driving business growth and customer satisfaction. We value
              customer-centricity, innovation, collaboration, and excellence in
              everything we do. Join us in redefining the future of customer
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
