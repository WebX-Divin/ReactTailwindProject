import React, { useState, useEffect } from "react";
import "../styles.css";
import "../App.css";

const Explore = () => {
  const [isBelow900, setIsBelow900] = useState(false);

  // Function to check window width on resize
  const handleResize = () => {
    setIsBelow900(window.innerWidth < 900);
  };

  // Add event listener on component mount
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center border-b-2 border-black border-t-2 bg-custom-blue py-20 pb-40">
      <div className="text-center">
        <h1 className="hedvig-letters-serif-uniquifier font-bold text-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center">
          Take your mind <br />
          in new directions.
        </h1>
        <button className="bg-black text-white font-sans py-1.5 px-12 rounded-full text-bold text-lg mt-8">
          Get unlimited access
        </button>
        {/* Conditionally render based on screen size */}
        {!isBelow900 && (
          <div>
            <p className="text-black text-3 explore-text font-sans">DISCOVER</p>
            <p className="text-black text-3 explore-text-right font-sans">
              EXPLORE
            </p>
          </div>
        )}
        {/* End of conditional rendering */}
        <div>
          <p className="text-black text-3 mt-4 explore-text font-sans">
            COVER DISCOVER
          </p>
          <p className="text-black text-3 mt-4 explore-text-right font-sans">
            EXPLORE EXPLORE
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-8 explore-text font-sans">
            R DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-8 explore-text-right font-sans">
            EXPLORE EXPLORE EX
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-12 explore-text font-sans">
            SCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-12 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-16 explore-text font-sans">
            VER DISCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-16 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE EXPLO
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-20 explore-text font-sans">
            DISCOVER DISCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-20 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE EXPLORE EX
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-24 explore-text font-sans">
            COVER DISCOVER DISCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-24 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE EXPLORE EXLPOR
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-28 explore-text font-sans">
            ER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-28 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE EXPLORE EXPLORE EXPL
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-32 explore-text font-sans">
            SCOVER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-32 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE EXPLORE EXPLORE EXPLOREE
          </p>
        </div>
        <div>
          <p className="text-black text-3 mt-36 explore-text font-sans">
            VER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER DISCOVER
          </p>
          <p className="text-black text-3 mt-36 explore-text-right font-sans">
            EXPLORE EXPLORE EXPLORE EXPLORE EXPLORE EXPLORE EXPLOR
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
