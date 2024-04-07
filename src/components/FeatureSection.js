import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import feature from "../assets/feature_logo.png";
import "../styles.css";
import "../App.css";

const FeatureSection = () => {
  return (
    <div className="px-4 md:px-6 bg-custom-white pt-8">
      <div className="flex flex-col justify-center items-center p-6">
        <p className="hedvig-letters-serif-uniquifier text-3xl md:text-6xl text-center">
          Why I'm a Medium Member...
        </p>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <img
            src={feature}
            alt="Feature"
            className="w-48 h-48 md:w-72 md:h-72 mb-4 md:mb-0 md:mr-8"
          />
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <p className="text-base md:text-lg max-w-md">
              "I love Medium's membership -- it gives me access to the stories I
              love by the writers I love, and it allows me to help support those
              writers financially."
            </p>
            <p className="hedvig-letters-serif-uniquifier text-base md:text-xl mt-4">
              Kayt Molina
            </p>
            <FontAwesomeIcon icon={faArrowRight} className="mt-4 ml-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
