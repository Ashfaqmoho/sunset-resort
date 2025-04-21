import React, { useEffect, useRef } from "react";
import "./Footer.css";
import mail from "../../assets/mail-icon.png";
import contact from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import h_mail from "../../assets/msg-icon.png";

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "54d89e73-6588-470d-9d94-1e89c94ce5da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="footer" ref={footerRef}>
      <div className="left-footer">
        <h3>
          Send us a message <img src={h_mail} alt="" />
        </h3>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or
          suggestions, feel free to get in touch. Your thoughts help us make
          every stay at Sunset Resort unforgettable.
        </p>
        <ul>
          <li>
            <img src={mail} alt="" />
            Contact@SunsetResort.com
          </li>
          <li>
            <img src={contact} alt="" />
            +1 987-654-3210
          </li>
          <li>
            <img src={location} alt="" />
            123 Beachside Lane, Malibu, CA 90265, United States
          </li>
        </ul>
      </div>
      <div className="right-footer">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <input
            type="mail"
            name="mail"
            placeholder="Your mail address"
            required
          />
          <textarea
            name="message"
            rows={6}
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Footer;
