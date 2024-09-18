/* src/components/Testimonials.js */
import React, { useState } from "react";
import "./Testimonials.css";
import client1 from "../../assets/images/client1.jpeg";
// import client2 from "../../assets/images/client2.jpg";
// import client3 from "../../assets/images/client3.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Modern College, Pune",
      title: "Ganeshkhind, Pune",
      quote:
        "The solutions we received from ProjectPowerhouse were innovative and well-implemented. Their team went above and beyond to deliver.",
      image: client1,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Manager, Startup Inc.",
      quote:
        "The strategy they built transformed our digital marketing efforts and brought in 2x more engagement!",
      image: "",
    },
    {
      id: 3,
      name: "Michael Lee",
      title: "CTO, Fintech Solutions",
      quote:
        "Their AI-powered analytics and cloud infrastructure were a game changer for scaling our business.",
      image: "",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section-alt">
      <div className="container-alt">
        <h1 className="testimonials-title-alt">What Clients Are Saying</h1>
        <p className="testimonials-description-alt">
          We are proud to showcase the feedback we’ve received from some of our
          esteemed clients.
        </p>

        <div className="testimonial-slider">
          <button className="prev-slide" onClick={prevSlide}>
            &#10094;
          </button>

          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card-alt ${
                index === current ? "active" : ""
              }`}
            >
              {index === current && (
                <div className="testimonial-content-fade">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image-alt"
                    />
                  )}
                  <div className="testimonial-text-alt">
                    <p className="testimonial-quote-alt">
                      "{testimonial.quote}"
                    </p>
                    <h3 className="testimonial-name-alt">{testimonial.name}</h3>
                    <p className="testimonial-title-alt">{testimonial.title}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button className="next-slide" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
