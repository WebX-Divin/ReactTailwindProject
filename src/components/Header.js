import React, { useState, useEffect } from 'react';
import medium from '../assets/medium_logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <nav className="bg-custom-blue flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 border-b-2 border-white">

        <div className="flex items-center">
          <img
            src={medium}
            alt="Medium"
            className="h-10 sm:h-12 w-auto mr-4"
          />
        </div>

        {isMobile ? (
          <div>
            <FontAwesomeIcon icon={faBars} className="h-6 w-auto mr-4 text-white cursor-pointer" />
          </div>
        ) : (
          <div className="flex items-center">
            <span className="text-white mr-4">Our Story</span>
            <span className="text-white mr-4 underline">Membership</span>
            <span className="text-white mr-4">Write</span>
            <span className="text-white mr-4">Sign in</span>
            <span className="bg-black text-white mr-4 py-1.5 px-4 sm:px-8 rounded-full">Get unlimited access</span>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
