import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Hero = ({ open }) => {
  const currentDay = new Date();
  const [date, setDate] = useState(currentDay);
  const [country, setCountry] = useState([])
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    persons: "",
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
    "Novenber",
    "December",
  ];

  let day = weekday[currentDay.getDay()];
  let mo = month[currentDay.getMonth()];
  let dat = currentDay.getDate();
  let year = currentDay.getFullYear();

  const updateTime = () => {
    const currentDay = new Date();
    const timeSet = setInterval(updateTime, 1000)
    setDate(currentDay);
    return () => clearInterval(timeSet)
  };

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch ('https://countriesnow.space/api/v0.1/countries')
      const getcon = await res.json()
      setCountry(getcon.data)
    }
    getCountry()
  }, [])


  return (
    <main id="hero">
      <div className="bar"></div>
      <div className="bar2"></div>
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
          {formData.persons && <div className="notif">{formData.persons}</div>}
        </div>
      </div>
      <div className="header-pix">
        <img src="/images/header-pix.jpg" alt="room" className="header-img" />
      </div>
      <div className="travel-info">
        <div className="itenenary">
          <div className="destination">
            <select
              name="destination"
              id="destination"
              value={formData.destination}
              onChange={handleChange}
            >
              <option hidden value="">
                Where are you going?
              </option>
                {country.map((nation, index) =>(
                  <option key={index}>{nation.country} - {nation.iso2}</option>
                ))}
            </select>
          </div>
          <div className="day">
            <input type="date" id="check-in"/>
          </div>
          <div className="people">
            <select
              name="persons"
              id="persons"
              value={formData.persons}
              onChange={handleChange}
            >
              <option hidden value="">
                Guests
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="button">
            <button className="btn">search</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
