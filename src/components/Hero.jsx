import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";

const Hero = () => {
  const currentDay = new Date();
  const [date, setDate] = useState(currentDay);
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    persons: "",
  });
  const navigate = useNavigate();

  const LogOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

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
    setDate(currentDay);
  };
  setInterval(updateTime, 1000);

  const { avatar } = useGetUserInfo();
  return (
    <main>
      <div className="bar"></div>
      <div className="bar2"></div>
      <HiOutlineLocationMarker className="location-icon" />
      <SlCalender className="calender-icon" />
      <BsPerson className="person-icon" />
      <div className="header">
        <div className="search">
          <h1>MimaBooking</h1>
          <form>
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
          <div>
            {day}, {mo} {dat}, {year}
          </div>
          <div className="alert">
            <GrNotification className="bell" />
            <div className="sign-out">
              <button className="sign" onClick={LogOut}>Log out</button>
              <img src={avatar} alt="profile" className="mobile-avatar" />
            </div>
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
              <option>Turkey</option>
              <option>Paris</option>
              <option>London</option>
              <option>Montmartre</option>
              <option>Athens</option>
            </select>
          </div>
          <div className="day">
            <select
              name="check-in"
              id="check-in"
              value={formData.checkIn}
              onChange={handleChange}
            >
              <option hidden value="">
                Check-in Date
              </option>
              <option></option>
            </select>
          </div>
          <div className="people">
            <select
              name="persons"
              id="persons"
              value={formData.persons}
              onChange={handleChange}
            >
              <option hidden value="">
                choose guest
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
