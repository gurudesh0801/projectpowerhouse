import React from 'react';
import './Features.css';
import { FaRocket, FaCode, FaUserShield, FaLightbulb } from 'react-icons/fa'; // Example icons from React Icons

const features = [
  {
    icon: <FaRocket />,
    title: 'Innovative Solutions',
    description: 'We provide cutting-edge solutions that drive your business forward.'
  },
  {
    icon: <FaCode />,
    title: 'Custom Development',
    description: 'Tailor-made development to meet your unique business needs.'
  },
  {
    icon: <FaUserShield />,
    title: 'Secure & Reliable',
    description: 'Top-notch security and reliability to ensure peace of mind.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Creative Design',
    description: 'Creative and intuitive designs that engage and convert.'
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Our Key Features</h2>
        <p className="features-description">
          Discover the key features that set us apart from the competition and drive our success.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
