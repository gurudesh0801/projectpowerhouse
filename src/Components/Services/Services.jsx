/* src/components/Services.js */
import React from "react";
import "./Services.css"; // Import your custom styles

const Services = () => {
  return (
    <section id="services" className="services-section-alt">
      <div className="container-alt">
        <h1 className="services-title-alt">Our Expertise</h1>
        <p className="services-description-alt">
          We specialize in innovative solutions that help businesses excel in
          the digital world. Explore our offerings.
        </p>

        <div className="services-grid-alt">
          <div className="service-card-alt">
            <i className="fas fa-laptop-code service-icon-alt"></i>
            <h3 className="service-title-alt">Web Development</h3>
            <p className="service-description-alt">
              Create responsive, secure, and modern websites tailored to your
              brand's needs.
            </p>
          </div>

          <div className="service-card-alt">
            <i className="fas fa-mobile-alt service-icon-alt"></i>
            <h3 className="service-title-alt">Mobile App Development</h3>
            <p className="service-description-alt">
              Build seamless mobile experiences with cutting-edge technologies
              for Android and iOS.
            </p>
          </div>

          <div className="service-card-alt">
            <i className="fas fa-bullhorn service-icon-alt"></i>
            <h3 className="service-title-alt">Digital Marketing</h3>
            <p className="service-description-alt">
              Boost your online presence and drive customer engagement through
              smart marketing strategies.
            </p>
          </div>

          <div className="service-card-alt">
            <i className="fas fa-cloud service-icon-alt"></i>
            <h3 className="service-title-alt">Cloud Solutions</h3>
            <p className="service-description-alt">
              Secure, scalable cloud solutions to streamline your operations and
              drive efficiency.
            </p>
          </div>

          <div className="service-card-alt">
            <i className="fas fa-chart-line service-icon-alt"></i>
            <h3 className="service-title-alt">Data Analysis</h3>
            <p className="service-description-alt">
              Harness the power of data to make smarter, data-driven business
              decisions.
            </p>
          </div>

          <div className="service-card-alt">
            <i className="fas fa-robot service-icon-alt"></i>
            <h3 className="service-title-alt">AI Models</h3>
            <p className="service-description-alt">
              Leverage AI models for predictive analysis, automation, and
              enhanced business processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
