import React, { useState, Fragment } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Carousel = ({ view, topic, setView, selected, hotels, images, pix }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(0);
  const length = images.length;

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };
  const handleClose = () => {
    setView(false);
  };

  return (
    <div className="container carousel">
      {hotels.map((item, index) => (
        <Fragment>
          <div  key={index} className="carousel__header">
            {index === currentIndex && <h2>{item.title}</h2>}
            <AiOutlineClose className="close" onClick={handleClose} />
          </div>
          <div
            className={index === currentIndex ? "carousel-grid" : ""}
          >
            {item.thumbnail.map((thumb, i) => (
              <>
                {index === currentIndex && (
                  <div key={i} className="carousel-grid">
                    {index === currentIndex && (
                      <img
                        src={thumb.img}
                        alt=""
                        className="thumb"
                        onClick={() => setCurrentIndex(index)}
                      />
                    )}
                  </div>
                )}
              </>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Carousel;
