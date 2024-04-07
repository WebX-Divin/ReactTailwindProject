import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 md:py-16 lg:py-20 xl:py-24 border-b-2 border-white">
      <div className="text-center">
        <h1 className="hedvig-letters-serif-uniquifier font-bold text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
          Fuel great thinking.
        </h1>

        <p className="text-white mt-4 text-center sm:text-3 md:text-4 lg:text-5 xl:text-xl">
          Become a Medium member to enjoy unlimited access and
          <br />
          directly support the writers you read most.
        </p>

        <button className="bg-white text-black font-sans py-2 px-6 sm:py-2 sm:px-8 rounded-full text-lg sm:text-xl mt-6">
          Get unlimited access
        </button>
      </div>
    </div>
  );
};

export default Hero;
