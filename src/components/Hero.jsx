import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import MainDate from "./MainDate";

const Hero = ({ open }) => {
  const currentDay = new Date();
  const [date, setDate] = useState(currentDay);
  const [country, setCountry] = useState([]);
  const [formData, setFormData] = useState({
    destination: "",
    persons: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let day = weekday[currentDay.getDay()];
  let mo = month[currentDay.getMonth()];
  let dat = currentDay.getDate();
  let year = currentDay.getFullYear();

  const updateTime = () => {
    const currentDay = new Date();
    const timeSet = setInterval(updateTime, 1000);
    setDate(currentDay);
    return () => clearInterval(timeSet);
  };

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries");
      const getcon = await res.json();
      setCountry(getcon.data);
    };
    getCountry();
  }, []);

  return (
    <main id="hero">
      {<GiHamburgerMenu className="hamburger" onClick={open} />}
      <HiOutlineLocationMarker className="location-icon" />
      <BsPerson className="person-icon" />
      <div className="header">
        <div className="search">
          <form id="search">
            <BsSearch className="search-icon" />
            <input
              type="text"
              name="search"
              placeholder="Search for anything..."
              className="input"
            />
          </form>
        </div>
        <div className="date">
          <div className="timestamp">
            {day}, {mo} {dat}, {year}
          </div>
          <div className="alert">
            <GrNotification className="bell" />
          </div>
        </div>
      </div>
      <div className="header-pix">
        <img src="images/header-pix.jpg" alt="room" className="header-img" />
      </div>
      <div className="travel-info">
        <form className="itenenary">
          <div className="form-control">
            <select
              name="destination"
              id="destination"
              className="dest"
              value={formData.destination}
              onChange={handleChange}
            >
              <option hidden value="">
                Where are you going?
              </option>
              <option>Nigeria - NG</option>
              <option>Canada - CA</option>
              <option>United States of America - US</option>
              <option>New Zealand - NZ</option>
              <option>Unnited Kingdom - UK</option>
              <option>Norway - NW</option>
            </select>
          </div>
            <div className="main-date">
              <MainDate />
            </div>
          <div className="form-control">
            <select
              name="persons"
              id="persons"
              className="person"
              value={formData.persons}
              onChange={handleChange}
            >
              <option hidden value="">
                1 Adult
              </option>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>1 Child</option>
              <option>2 Children</option>
              <option>3 Children</option>
              <option>1 Room</option>
              <option>2 Rooms</option>
            </select>
          </div>
          <div className="button">
            <button className="btn">search</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Hero;
