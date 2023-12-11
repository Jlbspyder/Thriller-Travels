import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsFillStarFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs";
import { GrNext, GrPrevious } from "react-icons/gr";
import Gallery from "../../components/gallery/Gallery";

import { HiOutlineLocationMarker } from "react-icons/hi";
import "./place.css";

const Place = () => {
  const [place, setPlace] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const { id } = useParams();

  const length = gallery.length;

  const fetchPlace = async () => {
    const res = await fetch(`https://hotel-api-hpic.onrender.com/explore`);
    const data = await res.json();
    setPlace(data);
    if (data.status === 404) {
      setPlace([]);
      return;
    }
  };

  useEffect(() => {
    try {
      fetchPlace();
    } catch (error) {}
  }, []);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        if (!id) return null;
        const res = await fetch(
          `https://hotel-api-hpic.onrender.com/explore/${id}`
        );
        const data = await res.json();
        if (!data) return null;
        return data;
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchPlace()
      .then((data) => {
        setSelectedPlace(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleClose = () => {
    setModal(false);
  };

  const getGallery = () => {
    setModal(true);
    const pix = Object.entries(selectedPlace.images).map(([_, value]) => {
      const { img } = value;
      return img;
    });
    setGallery(pix);
  };

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
    <div className="container france">
      {selectedPlace && (
        <>
          <div className="explore-header">
            <h2>Explore {selectedPlace.title}</h2>
            <p id="topic">{selectedPlace.topic}</p>
          </div>
          <div className="france-img">
            <div className="main-pix">
              <img
                src={selectedPlace.img}
                alt="/"
                className="france-pix"
                onClick={() => getGallery(gallery)}
              />
              <div className="grid-pix">
                <img
                  src={selectedPlace.img2}
                  alt="/"
                  className="france-thumb"
                  onClick={() => getGallery(gallery)}
                />
                <img
                  src={selectedPlace.img3}
                  alt="/"
                  className="france-thumb"
                  onClick={() => getGallery(gallery)}
                />
                <img
                  src={selectedPlace.img4}
                  alt="/"
                  className="france-thumb"
                  onClick={() => getGallery(gallery)}
                />
                <div className="view">
                  <img
                    src={selectedPlace.img5}
                    alt="/"
                    className="france-thumb"
                    onClick={() => getGallery(gallery)}
                  />
                  {gallery.length !== 0 && <HiOutlinePhoto className="film" />}
                  {gallery.length !== 0 && (
                    <h5 id="show">Show all {gallery.length} pictures</h5>
                  )}
                </div>
              </div>
              {selectedPlace && (
                <Gallery
                  close={handleClose}
                  place={place}
                  title={selectedPlace.title}
                  gallery={gallery}
                  modal={modal}
                />
              )}
            </div>
            <div
              className="mobile-main"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              <div className="mobile-explore-header">
                <h2>{selectedPlace.title} Explore</h2>
                <p id="topic">{selectedPlace.topic}</p>
              </div>
              {Object.entries(selectedPlace.images).map(([_, value], index) => {
                const { img } = value;
                return (
                  <div
                    key={index}
                    className={index === currentIndex ? "mobile-place-pix" : ""}
                  >
                    {index === currentIndex && (
                      <img src={img} className="france-pix" />
                    )}
                  </div>
                );
              })}
              <GrPrevious className="prevv" onClick={handlePrevious} />
              <GrNext className="nexxt" onClick={handleNext} />
            </div>
            <div className="tour-info">
              <div className="tour-info__left">
                <p>
                  <span id="bestseller">Best seller in Paris</span>
                </p>
                <div className="duration">
                  <BsFillStarFill className="star" />
                  <h5>{selectedPlace.rating}</h5>
                </div>
                <br />
                <p>{selectedPlace.des1}</p>
                <p>{selectedPlace.des2}</p>
                {selectedPlace.option1 && <h2>What's included</h2>}
                {selectedPlace.option1 && (
                  <div className="include">
                    <FaCheck className="green-check" />
                    <p>{selectedPlace.option1}</p>
                  </div>
                )}
                {selectedPlace.option2 && (
                  <div className="include">
                    <FaCheck className="green-check" />
                    <p>{selectedPlace.option2}</p>
                  </div>
                )}
                <h2>Accessibility</h2>
                <div className="include">
                  <RxDotFilled className="dot" />
                  <p>{selectedPlace.accessibility}</p>
                </div>
                {selectedPlace.safety && <h2>Health & safety</h2>}
                {selectedPlace.safety && (
                  <div className="include">
                    <RxDotFilled className="dot" />
                    <p>{selectedPlace.safety}</p>
                  </div>
                )}
                <h2>Additional information</h2>
                <p>{selectedPlace.info}</p>
                <h2>Itinerary information</h2>
                <div className="include">
                  <BsStopwatch />
                  <p>{selectedPlace.duration}</p>
                </div>
                <div className="include">
                  <HiOutlineLocationMarker />
                  <p>Stop at: {selectedPlace.point}</p>
                </div>
                <h2>Location</h2>
                <div className="include">
                  <HiOutlineLocationMarker />
                  <div>
                    <h3>Departure point</h3>
                    <p>{selectedPlace.point}</p>
                  </div>
                </div>
                {selectedPlace.end && (
                  <div className="include">
                    <HiOutlineLocationMarker />
                    <div>
                      <h3>End point</h3>
                      <p>{selectedPlace.end}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="ticket-info">
                <h3>Tickets and prices</h3>
                <h4>Search ticket availabilty by date</h4>
                <button className="plan-btn calender">Close calender</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Place;
