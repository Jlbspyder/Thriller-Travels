import React from "react";
import { explore } from "../data";

const Explore = () => {
  return (
    <section>
      <div className="destination__header">
        <div>
          <h3>Explore France</h3>
        </div>
      </div>
      <div className="explore">
        {explore.map((item, index) => (
          <div key={index} className="city">
            <img src={item.img} alt="img" className="city__img" />
            <div className="city__description">
              <h4>{item.title}</h4>
              <p>{item.location}</p>
              <h6>
                ${item.price}
                <span>/person</span>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
