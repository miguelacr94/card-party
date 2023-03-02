import React, { useState } from "react";


const StarRating = ({rating}) => {

  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (rating) ? "text-yellow-500 " : "text-gray-400 text-mainTitle rounded-lg"}
            // onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            // onMouseLeave={() => setHover(rating)}
          >
            <span className="w-29 h-29 m-starRating text-[30px]">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;