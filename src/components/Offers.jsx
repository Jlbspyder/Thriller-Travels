import React, { useState, useEffect } from "react";
import Hotels from "./Hotels";

const Offers = () => {
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
    </section>
  );
};

export default Offers;
