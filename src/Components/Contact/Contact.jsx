/* src/components/Contact.js */
import React from "react";
import "./Contact.css";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa"; // Importing icons from react-icons

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container-contact">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          We would love to hear from you. Whether you have a question, need a
          consultation, or just want to connect, feel free to reach out.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="contact-info-title">Contact Information</h2>
            <p>
              <strong>Address:</strong> ProjectPowerhouse, Lane no A20, Raikar
              Nagar, Dhayari, Pune - 411041
            </p>
            <p>
              <strong>Email:</strong> com.projectpowerhouse@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +91 8788098130 / 8668494090
            </p>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/projectpowerhouse/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/com.projectpowerhouse/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h2 className="contact-info-title">Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
