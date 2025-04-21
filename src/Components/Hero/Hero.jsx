import React from "react";
import "./Hero.css";
import arrow from "../../assets/dark-arrow.png";
import videoSrc from "../../assets/hero-video.mp4";

const Hero = () => {
  return (
    <div className="hero container">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <h1>Experience the Serenity of Sunset Resort.</h1>
        <p>
          Escape to paradise with Sunset Resort, where luxury meets tranquility.
          Whether you're seeking a peaceful beach getaway, world-class
          amenities, or unforgettable experiences, we offer everything you need
          for the perfect retreat. At Sunset Resort, your dream vacation is just
          a booking away.
        </p>
        <button className="btn">
          Explore <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
