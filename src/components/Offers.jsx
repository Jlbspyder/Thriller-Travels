import React from "react";
import { locations } from "../data";
import { BsHeart } from "react-icons/bs";

const Offers = () => {
  return (
    <section>
      <div className="destination__header">
        <div>
          <h3>Best Offers</h3>
        </div>
        <div className="arrows">View All</div>
      </div>
      <div className="rooms">
        {locations.map((item, index) => (
          <div key={index} className="rooms__info">
            <img src={item.img} alt="room" className="room" />
            <h5>{item.title}</h5>
            <div className="place">
              <p>{item.location}</p>
              <div className="heart-wrapper">
                <BsHeart className="heart" />
              </div>
            </div>
            <h5>
              ${item.price}
              <span>/night</span>
            </h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
