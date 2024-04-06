import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import feature from "../assets/feature_logo.png";
import "../styles.css";
import "../App.css";

const FeatureSection = () => {
  return (
    <div className="mt-8 px-4 md:px-6 bg-custom-white">
      <div className="flex flex-col justify-center items-center p-6">
        <p className="hedvig-letters-serif-uniquifier text-3xl md:text-4xl text-center mb-4">
          Why I'm a Medium Member...
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={feature}
            alt="Feature"
            className="w-48 h-48 md:w-72 md:h-72 mr-0 md:mr-8 mb-4 md:mb-0"
          />
          <div className="ml-0 md:ml-8 flex-auto">
            <p className="text-base md:text-lg">
              "I love Medium's membership -- it gives me <br /> access to the
              stories I love by the writers I love, <br /> and it allows me to
              help support those writers <br /> financially."
            </p>
            <p className=" hedvig-letters-serif-uniquifier text-base md:text-xl">
              Kayt Molina
            </p>
          </div>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className="mt-4" />
      </div>
    </div>
  );
};

export default FeatureSection;
