import React from 'react';


const Hero = () => {
  return (
    <div className="hero bg-cover bg-no-repeat h-screen relative flex flex-col justify-center items-center px-4 md:px-20 lg:px-40">
      <h1 className="text-3xl font-bold text-blue md:text-6xl lg:text-7xl mb-8">
        Fuel great thinking.
      </h1>
      <p className="text-xl text-gray-200 md:text-xl lg:text-2xl mb-6 text-center">
        Become a Medium member to enjoy unlimited access and directly
        support the writers you read most.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none transform transition duration-500 ease-in-out hover:-translate-y-1">
        Get unlimited access
      </button>
    </div>
  );
};

export default Hero;