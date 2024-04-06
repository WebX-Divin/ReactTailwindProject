import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 md:py-20 lg:py-24 xl:py-32 border-b-2 border-white">
      <div className="text-center">
        <h1 className="hedvig-letters-serif-uniquifier font-bold text-white text-4xl xs:text-4xl sm:text-4xl-bold md:text-6xl lg:text-7xl xl:text-8xl text-center">
          Fuel great thinking.
        </h1>

        <p className="text-4 text-white mt-5 flex-auto flex-wrap">
          Become a Medium member to enjoy unlimited access and
          <br />
          directly support the writers you read most.
        </p>

        <button className="bg-white text-black font-sans py-2 px-6 sm:py-2 sm:px-8 rounded-full text-bold text-base sm:text-lg mt-5">
          Get unlimited access
        </button>
      </div>
    </div>
  );
};

export default Hero;
