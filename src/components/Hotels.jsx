import React from "react";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hotels = ({title, location, price, img, id }) => {
  
  return (
   <Link to={`/${id}`}>
    <div className="rooms__info">
      <img src={img} alt="room" className="room" />
      <h5>{title}</h5>
      <div className="place">
        <p>{location}</p>
        <div className="heart-wrapper">
          <BsHeart className="heart" />
        </div>
      </div>
      <h5>
        ${price}
        <span>/night</span>
      </h5>
    </div>
  </Link>
  );
};

export default Hotels;
