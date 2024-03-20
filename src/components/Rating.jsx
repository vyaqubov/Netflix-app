import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


const Rating = ({ rating }) => {
    const roundedRating = Math.round(rating) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    const renderStars = () => {
      const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-star-${i}`}/>);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star"/>);
    }

    const remainingStars = 5 - Math.ceil(roundedRating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} />);
    }

    return stars;
  };

  return <abbr className="text-[#f5c518] flex gap-1">{renderStars()}</abbr>;
};

export default Rating;