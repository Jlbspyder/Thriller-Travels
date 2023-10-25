import React from "react";

const City = ({ city }) => {
  return (
    <div className="city-flex">
      <div className="city-img-wrapper">
        <img src={city.img} alt="" className="city-img" />
      </div>
      <div>
        <h4>{city.title}</h4>
        <span>Visa</span> . <span>Employment</span> . <span>Apply</span>
      </div>
    </div>
  );
};

export default City;
