import React, { useEffect, useRef } from "react";
import "./Programs.css";
import program_1 from "../../assets/program1.jpg";
import program_2 from "../../assets/program2.jpg";
import program_3 from "../../assets/program3.jpg";
import logo_icon01 from "../../assets/icon-01.png";
import logo_icon02 from "../../assets/icon-02.png";
import logo_icon03 from "../../assets/icon-03.png";

const Programs = () => {
  const programsRef = useRef(null);

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

    if (programsRef.current) {
      observer.observe(programsRef.current);
    }

    return () => {
      if (programsRef.current) {
        observer.unobserve(programsRef.current);
      }
    };
  }, []);

  return (
    <div className="programs" ref={programsRef}>
      <div className="program">
        <img src={program_1} alt="Program 01" />
        <div className="caption">
          <img src={logo_icon01} alt="Icon 01" />
          <p>Hotels</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="Program 02" />
        <div className="caption">
          <img src={logo_icon03} alt="Icon 02" />
          <p>Sunshade</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="Program 03" />
        <div className="caption">
          <img src={logo_icon02} alt="Icon 03" />
          <p>Beach</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
