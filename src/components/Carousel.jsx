import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Carousel = ({ setView, address, gallery, title, close }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
 
  return (
    <div className="container carousel">
      <div className="carousel-header">
        <h2>{title}</h2>
        <p className="hotel-location">{address}</p>
        <AiOutlineClose className="close" onClick={close} />
      </div>
      <div className="carousel-grid">
        {gallery.map((pix, index) => (
          <img key={index} src={pix} alt="img" className="thumb" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
