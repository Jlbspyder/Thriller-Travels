import React from 'react'
import { Link } from "react-router-dom";

const Places = ({ img, title, location, price, id }) => {
  return (
    <Link to={`/place/${id}`}>
      <div className="city">
        <img src={img} alt="img" className="city__img" />
        <div className="city__description">
          <h4>{title}</h4>
          <p>{location}</p>
          <h6>
            ${price}
            <span>/person</span>
          </h6>
        </div>
      </div>
  </Link>
  )
}

export default Places
