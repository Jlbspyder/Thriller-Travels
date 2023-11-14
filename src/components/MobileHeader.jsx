import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrNotification } from "react-icons/gr";

const MobileHeader = ({ open }) => {
    const currentDay = new Date();
    const [date, setDate] = useState(currentDay);

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
        const timeSet = setInterval(updateTime, 1000)
        setDate(currentDay);
        return () => clearInterval(timeSet)
      };

  return (
    <div className='mobile-header'>
      <GiHamburgerMenu className="hamburger" onClick={open} />
        <div className="date">
          <div className="timestamp">
            {day}, {mo} {dat}, {year}
          </div>
          <div className="alert">
            <GrNotification className="bell" />
          </div>
        </div>
    </div>
  )
}

export default MobileHeader
