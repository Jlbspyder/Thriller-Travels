import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { TbCalendarCheck } from "react-icons/tb";
import "./location.css";

const Location = () => {
  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { id } = useParams();

  const fetchLocation = async () => {
    const res = await fetch(`https://hotel-api-hpic.onrender.com/data`);
    const data = await res.json();
    setLocation(data);
    if (data.status === 404) {
      setLocation([]);
      return;
    }
  };

  useEffect(() => {
    try {
      fetchLocation();
    } catch (error) {}
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
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
    fetchLocation()
      .then((data) => {
        setSelectedLocation(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container attract">
      {selectedLocation && (
        <div className="attraction-header">
          <h2>{selectedLocation.name} Attractions</h2>
          <h5>3 results</h5>
        </div>
      )}
      {
        <div className="attractions">
          <div className="left-side">
            <div className="find">
              <form className="look">
                <BsSearch className="look-icon" />
                <input
                  type="text"
                  name="search"
                  placeholder="Where are you going?"
                  className="input"
                />
              </form>
              <input
                type="date"
                placeholder="select your dates.."
                className="dat"
              />
              <button className="plan-btn attract">Search</button>
            </div>
            <div className="filter">
              <h3>Filter</h3>
              <h5>Category</h5>
              {selectedLocation && (
                <div className="category">
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Tour <span>({selectedLocation.tour})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Museum, arts & culture{" "}
                        <span>({selectedLocation.museum})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Nature & outdoor{" "}
                        <span>({selectedLocation.nature})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Entertainment & tickets{" "}
                        <span>({selectedLocation.entertainment})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Food & drinks <span>({selectedLocation.food})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Travel services & rentals{" "}
                        <span>({selectedLocation.rental})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        Workshop & classes <span>(3)</span>
                      </h6>
                    </div>
                  )}
                </div>
              )}
              <h5>Price</h5>
              {selectedLocation && (
                <div className="price">
                  {selectedLocation.price && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        ${selectedLocation.price} + $
                        {selectedLocation.price + 50}{" "}
                        <span>({selectedLocation.price - 33})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        ${selectedLocation.price + 50} + $
                        {selectedLocation.price + 100}{" "}
                        <span>({selectedLocation.price + 33})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        ${selectedLocation.price + 100} + $
                        {selectedLocation.price + 150}{" "}
                        <span>({selectedLocation.price + 77})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        ${selectedLocation.price + 150} + $
                        {selectedLocation.price + 200}{" "}
                        <span>({selectedLocation.price + 50})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        ${selectedLocation.price + 200} + $
                        {selectedLocation.price + 250}{" "}
                        <span>({selectedLocation.price + 60})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" />
                      <h6>
                        ${selectedLocation.price + 250}+{" "}
                        <span>({selectedLocation.price + 77})</span>
                      </h6>
                    </div>
                  )}
                </div>
              )}
              <h5>Location</h5>
              {selectedLocation && (
                <div className="choose">
                  <input type="checkbox" />
                  <h6>
                    {selectedLocation.name}{" "}
                    <span>({selectedLocation.price + 1000})</span>
                  </h6>
                </div>
              )}
              <h5>Show results with</h5>
              {selectedLocation && (
                <div className="choose">
                  <input type="checkbox" />
                  <h6>
                    Free cancellation{" "}
                    <span>({selectedLocation.price + 500})</span>
                  </h6>
                </div>
              )}
            </div>
          </div>
          <div className="right-side">
            {selectedLocation && (
              <>
                {Object.entries(selectedLocation.attractions).map(
                  ([_, value], index) => {
                    const { place, topic, des1, des2, pix, images, price } =
                      value;
                    return (
                      <div key={index} className="attraction-info">
                        <div className="info-pix">
                          <img src={pix} alt="/" className="tour-pix" />
                        </div>
                        <div className="right-info">
                          <p>
                            {selectedLocation.name}{" "}
                            <span id="bestseller">Best seller</span>
                          </p>
                          <h2>{place}</h2>
                          <p id="info">{topic}</p>
                          <div className="duration">
                            <BsStopwatch />
                            Duration: 30 minutes
                          </div>
                          <div className="review">
                            <BsFillStarFill className="star" />
                            4.5 / 5 (1153 reviews)
                          </div>
                          <div className="cancel">
                            <div className="chec">
                              <TbCalendarCheck className="cal" />
                              Free cancellation available
                            </div>
                            <div className="butt">
                              <h6>
                                From<span id="amt">${price}</span>
                              </h6>
                              <button className="plan-btn see">
                                See availabilty
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </>
            )}
            <div></div>
          </div>
        </div>
      }
    </div>
  );
};

export default Location;
