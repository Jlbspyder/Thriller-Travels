import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { data } from "../data";
import { Link } from "react-router-dom";

const Destination = ({ img, title, description, price, rating, id }) => {
  
  return (
    <Link to={`/location/${id}`}>
    <div className="destinations">
      <img src={img} alt="city" className="city__img" />
      <div className="city__description">
        <div className="city__info">
          <h4>{title}</h4>
          <div className="city__rating">
            <BsFillStarFill className="rating" />
            <h6>{rating}</h6>
          </div>
        </div>
        <p>{description}</p>
        <h5>From ${price}</h5>
      </div>
    </div>
    </Link>
  );
};

export default Destination;
