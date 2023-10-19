import React, { useState } from "react";
import { explore } from "../data";
import LightBox from "./LightBox";

const Explore = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <section>
      <div className="destination__header">
        <div>
          <h3>Explore France</h3>
        </div>
      </div>
      <div className="explore">
        {explore.map((item, index) => (
          <div key={index} className="city" onClick={() => setSelectedImg(item.img)}>
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
      {selectedImg && (
        <LightBox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </section>
  );
};

export default Explore;
