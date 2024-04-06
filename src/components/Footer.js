import React from "react";
import medium from "../assets/medium.webp";
import "../styles.css";
import "../App.css";

const Footer = () => {
  return (
    <div className="p-6 bg-custom-white pl-10 pr-10">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 bg-custom-white">
        <div className="flex items-center">
          <img src={medium} alt="Medium" className="h-3 sm:h-7 w-auto mr-4" />
        </div>

        <span className="text-black mr-7">Every idea needs a Medium</span>
        <div className="flex items-center">
          <span className="text-black mr-7 underline">About</span>
          <span className="text-black mr-7 underline">Terms</span>
          <span className="text-black mr-7 underline">Privacy</span>
          <span className="text-black mr-7 underline">Help</span>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
