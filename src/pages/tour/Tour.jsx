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
import "./tour.css";

const Tour = () => {
  const [tour, setTour] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const { id } = useParams();

  const length = gallery.length;
  

  const fetchTour = async () => {
    const res = await fetch(`https://hotel-api-hpic.onrender.com/data`);
    const data = await res.json();
    setTour(data);
    if (data.status === 404) {
      setTour([]);
      return;
    }
  };

  useEffect(() => {
    try {
      fetchTour();
    } catch (error) {}
  }, []);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        if (!id) return null;
        const res = await fetch(
          `https://hotel-api-hpic.onrender.com/data/${id}`
        );
        const data = await res.json();
        if (!data) return null;
        return data;
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchTour()
      .then((data) => {
        setSelectedTour(data.attractions);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  const handleClose = () => {
    setModal(false);
  };
//   
//   const getGallery = () => {
//     setModal(true);
//     const pix = Object.entries(selectedTour.images).map(([_, value]) => {
//       const { img } = value;
//       return img;
//     });
//     setGallery(pix);
//   };

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
    <div className="container tour">
      {selectedTour && (
        <>
          <div className="explre-header">
            {selectedTour.map((tour, index) => (
              <Fragment key={tour.id}>
                <div className="tour-header">
                    {index === currentIndex && <h2>{tour.place}</h2>}
                    {index === currentIndex && <p>{tour.topic}</p>}
                </div>
                {index === currentIndex && (
                <>
                  <div className="main-pixx">
                    <div className="tour-pix-wrapper">
                      <img src={tour.pix} alt="/" className="tour-pixx" />
                    </div>
                    <div className="tour-grid-pix">
                      {tour.images.map((image, i) => (
                        <Fragment key={i}>
                          { (
                            <img src={image.img} alt="/" className="thumb" />
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="mobile-main-pixx">
                    {selectedTour && <div className="tour-grid">
                    {/* {Object.keys(selectedTour.images).map(([_, value], index) => {
                        const { img } = value;
                        return (
                        <div
                            key={index}
                            className={index === currentIndex ? "mobile-thumb-wrapper" : ""}
                        >
                            {index === currentIndex && (
                            <img src={img} className="france-pix" />
                            )}
                        </div>
                        );
                    })} */}
                      {tour.images.map((image, i) => (
                        <Fragment key={i}>
                          {i === currentIndex && (
                            <div className="mobile-thumb-wrapper">
                                <img src={image.img} alt="/" className="mobile-thumb" />
                            </div>
                          )}
                        </Fragment>
                      ))}
                       <GrPrevious className="tour-prev" onClick={handlePrevious} />
                       <GrNext className="tour-next" onClick={handleNext} />
                    </div>}
                  </div>
                </>
                )}
                {index === currentIndex && (
                  <div className="tour-info">
                    <div className="tour-info__left">
                      <p>
                        <span id="bestseller">Best seller in Paris</span>
                      </p>
                      <div className="duration">
                        <BsFillStarFill className="star" />
                        <h5>{tour.review}</h5>
                      </div>
                      <br />
                      <p>{tour.des1}</p>
                      <p>{tour.des2}</p>
                      <p>{tour.des3}</p>
                      {tour.accessibility && <h2>Accessibility</h2>}
                {tour.accessibility && <div className="include">
                  <RxDotFilled className="dot" />
                  <p>{tour.accessibility}</p>
                </div>}
                {<h3>Health & safety</h3>}
                  <div className="include">
                    <RxDotFilled className="dot" />
                    <p>{tour.safety}</p>
                  </div>
                <h3>Additional information</h3>
                <p>{tour.info}</p>
                <h3>Itinerary information</h3>
                <div className="include">
                  <BsStopwatch />
                  <p>{tour.duration}</p>
                </div>
                <div className="include">
                  <HiOutlineLocationMarker />
                  <p>Stop at: {tour.point}</p>
                </div>
                <h3>Location</h3>
                <div className="include">
                  <HiOutlineLocationMarker />
                  <div>
                    <h4>Departure point</h4>
                    <p>{tour.point}</p>
                  </div>
                </div>
                {tour.end && (
                  <div className="include">
                    <HiOutlineLocationMarker />
                    <div>
                      <h4>End point</h4>
                      <p>{tour.end}</p>
                    </div>
                  </div>
                )}
                    </div>
                    <div className="ticket-info">
                      <h3>Tickets and prices</h3>
                      <h4>Search ticket availabilty by date</h4>
                      <button className="plan-btn calender">
                        Close calender
                      </button>
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          {/* <div className="france-img">
            <div className="main-pix">
              <div className="grid-pix"></div>
              {selectedTour && (
                <Gallery
                  close={handleClose}
                  place={tour}
                  title={selectedTour.title}
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
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Tour;
