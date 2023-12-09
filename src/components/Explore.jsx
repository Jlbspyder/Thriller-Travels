import React, { useState } from "react";
import { explore } from "../data";
import LightBox from "./LightBox";
import Places from "./Places";

const Explore = () => {
  return (
    <section id="explore">
      <div className="explore__header">
        <div>
          <h3>Explore France</h3>
        </div>
      </div>
      <div className="explore">
      {explore.map((item, index) => (
          <div key={index} className="city">
            <Places {...item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
