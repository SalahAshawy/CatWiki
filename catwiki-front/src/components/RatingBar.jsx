import React from 'react';

const RatingBar = ({ rating, total }) => {
  // Create an array of length 'total' and fill it with 'true' values for dark bars and 'false' for empty bars
  const bars = Array(total).fill('').map((_, index) => index < rating);

  return (
    <div className='rating-container '>
    <div className="rating-bar">
      {bars.map((filled, index) => (
          <div key={index} className={`bar ${filled ? 'dark' : 'light'} `}></div>
        ))}
    </div>
        </div>
  );
};

export default RatingBar;
