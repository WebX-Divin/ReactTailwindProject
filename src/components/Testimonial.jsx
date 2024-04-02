import React from 'react';


const Testimonial = ({ quote, author, image }) => (
  <div className="testimonial flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-md">
    <img
      className="w-20 h-20 rounded-full mb-4"
      src={image}
      alt={author}
    />
    <p className="text-gray-600 text-center">{quote}</p>
    <p className="text-gray-800 font-bold text-center mt-4">{author}</p>
  </div>
);

export default Testimonial;