import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = ({ address, gallery, name, close, modal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPane, setSelectedPane] = useState([]);
  const [touchPosition, setTouchPosition] = useState(null);

  const length = gallery.length;

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrevious();
    }

    setTouchPosition(null);
  };


  return (
    <>
      <div className={`container ${modal ? "image-pane open" : "image-pane"}`}>
        <div className="carousel-header">
          <h2 className="hotel-name">{name}</h2>
          <p className="mobile hotel-location">{address}</p>
          <p className="hotel-location">{address}</p>
          <AiOutlineClose className="close" onClick={close} />
        </div>
        <div className="view-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} >
          {gallery.map((pix, index) => (
            <div
              key={index}
              className={index === currentIndex ? "img-view" : ""}
            >
              {index === currentIndex && (
                <img
                  key={index}
                  src={pix}
                  alt="img"
                  className="slider-image"
                  onClick={() => setSelectedPane(pix)}
                />
              )}
            </div>
          ))}
          <GrPrevious className="back" onClick={handlePrevious} />
          <GrNext className="front" onClick={handleNext} />
        </div>
        <div className="img-slider">
          {gallery.map((select, index) => (
            <img
              style={{
                border:
                  index === currentIndex ? "2px solid rgb(3, 3, 143)" : "",
                opacity: index === currentIndex ? "50%" : "",
              }}
              key={index}
              src={select}
              alt="picture"
              className="slider-img"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
