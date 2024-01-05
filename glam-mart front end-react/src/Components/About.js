import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span></span>
        </h3>
        <p className="about-description">
         
        </p>

        <h4 className="about-text-title">About us</h4>

        <SolutionStep
          title=""
        
          description="Find your perfect specialist and book with ease at GoGlam. Expert assistants prioritize your skin, offering secure care."
        />

        <SolutionStep
          title=""
          description="Choose the date and time that suits you best, and let our dedicated team of glam professionals ensure your beauty with personalized care."
        />

        <SolutionStep
          title=""
          description="Our experienced assistanta are here to provide expert advice and personalized care, helping you achieve your best possible glow."
        />
      </div>
    </div>
  );
}

export default About;
