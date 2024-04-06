import React from "react";
import "../styles.css";
import "../App.css";

const Explore = () => {
  return (
    <div className="flex flex-col justify-center items-center border-b-2 border-black border-t-2 bg-custom-blue py-20">
      <div className="text-center">
        <h1 className="hedvig-letters-serif-uniquifier font-bold text-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
          Take your mind <br />
          in new directions.
        </h1>
        <button className="bg-black text-white font-sans py-1.5 px-12 rounded-full text-bold text-lg mt-8">
          Get unlimited access
        </button>
      </div>
    </div>
  );
};

export default Explore;
