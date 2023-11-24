import React, { useState, useEffect } from "react";
import { locations } from "../data";
import { BsHeart } from "react-icons/bs";
import LightBox from "./LightBox";
import Hotels from "./Hotels";
import Hotel from "./Hotel";

const Offers = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await fetch(`http://localhost:5000/locations/`);
      const data = await res.json();
      setHotels(data);
    };

    fetchHotels();
  }, []);

  return (
    <section id="offer">
      <div className="section-flex">
        <div>
          <h3>Best Offers</h3>
        </div>
        <div className="arrows">View All</div>
      </div>
      <div className="rooms">
        {hotels.map((item, index) => (
          <Hotels key={index} {...item} index={index} />
        ))}
      </div>
      {selectedImg && (
        <LightBox selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </section>
  );
};

export default Offers;
