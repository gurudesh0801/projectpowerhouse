/* src/components/Projects.js */
import React from "react";
import "./Projects.css";
import img1 from "../../assets/images/ecommerce.webp";
import img2 from "../../assets/images/cloud.jpeg";
import img3 from "../../assets/images/dataanalytics.jpg";
import img4 from "../../assets/images/mobileapp.jpg";
import img5 from "../../assets/images/img5.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Scalable and secure online stores for growing retail businesses.",
      image: img1,
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description:
        "Track workouts and diet plans on the go with our custom app.",
      image: img4,
    },
    {
      id: 3,
      title: "AI-Powered Analytics",
      description: "Analyze real-time data using advanced AI algorithms.",
      image: img3,
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions to enhance business operations.",
      image: img2,
    },
    {
      id: 5,
      title: "Library management Admin Dashboard",
      description:
        "Managing Students Data(Addmissions, Fees, Reminder, Students data Download and many more).",
      image: img5,
    },
  ];

  return (
    <section className="projects-section-flip">
      <div className="container-flip">
        <h1 className="projects-title-flip">Our Projects</h1>
        <p className="projects-description-flip">
          Browse through our portfolio to see the variety of projects we've
          successfully delivered.
        </p>

        <div className="projects-grid-flip">
          {projects.map((project) => (
            <div key={project.id} className="project-card-flip">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image-flip"
                  />
                </div>
                <div className="project-card-back">
                  <div className="project-info-flip">
                    <h3 className="project-title-flip">{project.title}</h3>
                    <p className="project-description-flip">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
