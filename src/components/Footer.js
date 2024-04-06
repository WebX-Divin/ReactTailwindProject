import React from "react";
import medium from "../assets/medium.webp";
import "../styles.css";
import "../App.css";

const Footer = () => {
  return (
    <div className="p-6 bg-custom-white pl-4 pr-4 sm:pl-10 sm:pr-10">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 bg-custom-white">
        <div className="flex items-center justify-between mb-4 sm:mb-0">
          <img
            src={medium}
            alt="Medium"
            className="h-3 sm:h-7 w-auto mr-4 sm:mr-0"
          />
          <span className="text-black">Every idea needs a Medium</span>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end">
          <span className="text-black mr-4 mb-2 sm:mb-0 underline">About</span>
          <span className="text-black mr-4 mb-2 sm:mb-0 underline">Terms</span>
          <span className="text-black mr-4 mb-2 sm:mb-0 underline">
            Privacy
          </span>
          <span className="text-black mr-4 mb-2 sm:mb-0 underline">Help</span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
