import React, { useEffect, useRef } from "react";
import "./About.css";
import "../Title/Title.css";
import about_img from "../../assets/about-image.jpg";
import Title from "../Title/Title";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observers = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observers.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observers.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="about" ref={aboutRef}>
      <div className="about-left">
        <img src={about_img} alt="" />
      </div>
      <div className="about-right">
        <Title title="Experience Unforgettable Stays..." subtitle="About US" />
        <p>
          Embark on a journey of relaxation and rejuvenation with Sunset
          Resort's premier hospitality experience. Our resort is designed to
          offer guests the perfect blend of comfort, luxury, and unforgettable
          moments, all set against the stunning backdrop of nature's beauty.
          <br />
          With a focus on personalized service, modern amenities, and immersive
          experiences, Sunset Resort creates a haven for travelers seeking a
          tranquil escape or an adventurous getaway. Whether you're looking to
          unwind by the pool, explore local attractions, or celebrate life's
          special moments, Sunset Resort provides the ideal setting to make
          lasting memories. <br />
          Let us be your destination for exceptional stays and cherished
          experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
