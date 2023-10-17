import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { data } from "../data";
import LightBox from "./LightBox";

const Destination = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const length = data.length;

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  // const handleClick = (item, index) => {
  //   setCurrentIndex(index)
  //   selectedImg(item.title)
  // }

  return (
    <section>
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
      <div className="destinations">
        {data.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "city city-active" : "city"}
            onClick={() => setSelectedImg(item.img)}
          >
            <img src={item.img} alt="city" className="city__img" />
            <div className="city__description">
              <div className="city__info">
                <h4>{item.title}</h4>
                <div className="city__rating">
                  <BsFillStarFill className="rating" />
                  <h6>{item.rating}</h6>
                </div>
              </div>
              <p>{item.description}</p>
              <h5>{item.price}</h5>
            </div>
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

export default Destination;
