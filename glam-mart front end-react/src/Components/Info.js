import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
         
        </p>
      </div>

     
      <div className="info-cards-content">
      <InformationCard
          title="Enhances Collagen Regeneration"
          description="Speeds up cell turnover to allow the skin to better repair itself."
          icon={faTruckMedical}
        />

       
        <InformationCard
          title="Improves Elasticity"
          description="Reinforces skin barrier to protect against free radicals that lead to wrinkles and visible signs of aging."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Increases Moisture"
          description="Contains hydrating blend of vitamins to smooth and support plump and supple texture."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
