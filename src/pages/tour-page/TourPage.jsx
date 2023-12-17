import React from "react";
import { Link } from "react-router-dom";
import { BsStopwatch } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { TbCalendarCheck } from "react-icons/tb";
import "./tour-page.css";

const TourPage = ({ id, place, topic, review, duration, pix, price }) => {
  return (
    <Link to={`/tour/${id}`}>
      <div className="attraction-info">
        <div className="info-pix">
          <img src={pix} alt="/" className="tour-pix" />
        </div>
        <div className="right-info">
          <h2>{place}</h2>
          <p id="info">{topic}</p>
          <div className="duration">
            <BsStopwatch />
            {duration}
          </div>
          <div className="review">
            <BsFillStarFill className="star" />
            {review}
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
              <button className="plan-btn see">See availabilty</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourPage;
