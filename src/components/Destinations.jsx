import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { data } from "../data";
import LightBox from "./LightBox";
import Destination from "./Destination";

const Destinations = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const length = data.length;

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="destination">
      <div className="destination__header">
        <div>
          <h3>Trending destinations</h3>
        </div>
        <div>
          <div className="arrows">
            <FaAngleLeft className="left" onClick={handlePrevious} />
            <FaAngleRight className="right" onClick={handleNext} />
          </div>
        </div>
      </div>
      <div className="explore">
        {data.map((item, index) => (
          <div key={index} className={index === currentIndex ? "city city-active" : "city"}>
            <Destination {...item} index={index} />
          </div>
        ))}
      </div>
      {selectedImg && (
        <LightBox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <div>
        <span
          className={`one ${currentIndex === 0 ? "active" : ""}`}
          onClick={() => setCurrentIndex(0)}
        ></span>
        <span
          className={`two ${currentIndex === 1 ? "active" : ""}`}
          onClick={() => setCurrentIndex(1)}
        ></span>
        <span
          className={`three ${currentIndex === 2 ? "active" : ""}`}
          onClick={() => setCurrentIndex(2)}
        ></span>
      </div>
    </section>
  );
};

export default Destinations;
