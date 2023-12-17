import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { TbCalendarCheck } from "react-icons/tb";
import "./location.css";
import TourPage from "../tour-page/TourPage";

const Location = () => {
  const [location, setLocation] = useState([]);
  const [selectedTour, setSelectedTour] = useState([]);
  const [tour, setTour] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [formData, setFormData] = useState({
    search: "",
    date: "",
    tour: "",
    arts: "",
    nature: "",
    tickets: "",
    food: "",
    rentals: "",
    workshop: "",
    price1: "",
    price2: "",
    price3: "",
    price4: "",
    price5: "",
    price6: "",
    price7: "",
    price8: "",
  });
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

  const handleTour = () => {
    setTour(true)
  }
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div className="container attract">
      {selectedLocation && (
        <div className="attraction-header">
          <h2>{selectedLocation.name} Attractions</h2>
          {/* <h5>3 results</h5> */}
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
                name="date"
                onChange={handleChange}
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
                      <input type="checkbox" name="tour" onChange={handleChange} checked={formData.tour} />
                      <h6>
                        Tour <span>({selectedLocation.tour})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="arts" onChange={handleChange} checked={formData.arts} />
                      <h6>
                        Museum, arts & culture{" "}
                        <span>({selectedLocation.museum})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="nature" onChange={handleChange} checked={formData.nature} />
                      <h6>
                        Nature & outdoor{" "}
                        <span>({selectedLocation.nature})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="tickets" onChange={handleChange} checked={formData.tickets} />
                      <h6>
                        Entertainment & tickets{" "}
                        <span>({selectedLocation.entertainment})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="food" onChange={handleChange} checked={formData.food} />
                      <h6>
                        Food & drinks <span>({selectedLocation.food})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="rentals" onChange={handleChange} checked={formData.rentals} />
                      <h6>
                        Travel services & rentals{" "}
                        <span>({selectedLocation.rental})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="workshop" onChange={handleChange} checked={formData.workshop} />
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
                      <input type="checkbox" name="price1" onChange={handleChange} checked={formData.price1} />
                      <h6>
                        ${selectedLocation.price} + $
                        {selectedLocation.price + 50}{" "}
                        <span>({selectedLocation.price - 33})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="price2" onChange={handleChange} checked={formData.price2} />
                      <h6>
                        ${selectedLocation.price + 50} + $
                        {selectedLocation.price + 100}{" "}
                        <span>({selectedLocation.price + 33})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="price3" onChange={handleChange} checked={formData.price3} />
                      <h6>
                        ${selectedLocation.price + 100} + $
                        {selectedLocation.price + 150}{" "}
                        <span>({selectedLocation.price + 77})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="price4" onChange={handleChange} checked={formData.price4} />
                      <h6>
                        ${selectedLocation.price + 150} + $
                        {selectedLocation.price + 200}{" "}
                        <span>({selectedLocation.price + 50})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="price5" onChange={handleChange} checked={formData.price5} />
                      <h6>
                        ${selectedLocation.price + 200} + $
                        {selectedLocation.price + 250}{" "}
                        <span>({selectedLocation.price + 60})</span>
                      </h6>
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="choose">
                      <input type="checkbox" name="price6" onChange={handleChange} checked={formData.price6} />
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
                  <input type="checkbox" name="price7" onChange={handleChange} checked={formData.price7} />
                  <h6>
                    {selectedLocation.name}{" "}
                    <span>({selectedLocation.price + 1000})</span>
                  </h6>
                </div>
              )}
              <h5>Show results with</h5>
              {selectedLocation && (
                <div className="choose">
                  <input type="checkbox" name="price8" onChange={handleChange} checked={formData.price8} />
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
              {selectedLocation.attractions.map((attraction, index) => (
                <div key={index}>
                  <TourPage {...attraction} />
                </div>
              ))}
              </>
            )}
          </div>
        </div>
      }
    </div>
  );
};

export default Location;
