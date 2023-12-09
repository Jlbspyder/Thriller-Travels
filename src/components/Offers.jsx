import React, { useState, useEffect } from "react";
import LightBox from "./LightBox";
import Hotels from "./Hotels";
import { locations } from "../data";

const Offers = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchHotels = async () => {
      const res = await fetch(`https://hotel-api-hpic.onrender.com/locations`);
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
