import React from 'react';


const Hero = () => {
  return (
    <div className="bg-custom-blue h-screen flex flex-col justify-center items-center">
        <div className="text-center">
        <h1 className="hedvig-letters-serif-uniquifier font-bold text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center">
    Fuel great thinking.
</h1>

          <p className="text-lg text-white mb-8 font-sans">
            Become a Medium member to enjoy unlimited access and directly
            support the writers you read most.
          </p>
          <button className="bg-white text-black font-sans py-1.5 px-8 rounded-full text-bold">
            Get unlimited access
          </button>
        </div>
      </div>
  );
};

export default Hero;