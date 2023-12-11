import React, { Fragment, useState, useEffect } from "react";
import { destination } from "../data";
import { FaPassport } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import { MdBedroomChild } from "react-icons/md";
import City from "../components/City";
import { countries, bookings } from "../data";
import MobileTravelDate from "../components/MobileTravelDate";
import TabletTravelDate from "../components/TabletTravelDate";
import MediumScreenTravelDate from "../components/MediumScreenDate";
import ProDate from "../components/ProDate";

const ExploreCity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState([]);
  const [visa, setVisa] = useState(true);
  const [flight, setFlight] = useState(false);
  const [stay, setStay] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    country: "",
    persons: "",
    visa: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regEx.test(email)) {
      setEmail("");
      setError("");
    } else if (!regEx.test(email)) {
      setError("Please insert a valid email");
    }
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch("https://countriesnow.space/api/v0.1/countries");
      const getcon = await res.json();
      setCountry(getcon.data);
    };
    getCountry();
  }, []);
  const handleFlight = () => {
    setFlight(true);
    setVisa(false);
    setStay(false);
  };
  const handleVisa = () => {
    setFlight(false);
    setVisa(true);
    setStay(false);
  };
  const handleStay = () => {
    setFlight(false);
    setVisa(false);
    setStay(true);
  };

  return (
    <section id="explore-city">
      <div className="container">
        <div className="main-container">
          <div className="main-container__header">
            <h1>Revolutionize your travel experiences</h1>
          </div>
          <div className="plan">
            {visa && (
              <form>
                <div className="travel-plan">
                  <div className="travel-plan__list">
                    <div id="visa" onClick={handleVisa}>
                      <FaPassport />
                      <h3 className="visa">Visa</h3>
                    </div>
                    <div id="visa" onClick={handleFlight}>
                      <BsAirplaneFill />
                      <h3>Flight</h3>
                    </div>
                    <div id="visa" onClick={handleStay}>
                      <MdBedroomChild />
                      <h3>Stays</h3>
                    </div>
                  </div>
                </div>
                <div className="travel-plan__form">
                  <div className="form-control viza">
                    <label htmlFor="">Visa Type</label>
                    <select
                      name="visa"
                      id="check-in"
                      value={formData.visa}
                      onChange={handleChange}
                    >
                      <option hidden value="">
                        Choose Visa Type
                      </option>
                      <option>Tourist Visa</option>
                      <option>Business Visa</option>
                      <option>Transit Visa</option>
                      <option>Student Visa</option>
                      <option>Work Visa</option>
                      <option>Medical Visa</option>
                      <option>Visa on Arrival</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <button className="plan-btn viz">Confirm</button>
                </div>
              </form>
            )}
            {flight && (
              <form>
                <div className="travel-plan">
                  <div className="travel-plan__list">
                    <div id="visa" onClick={handleVisa}>
                      <FaPassport />
                      <h3>Visa</h3>
                    </div>
                    <div id="visa" onClick={handleFlight}>
                      <BsAirplaneFill />
                      <h3 className="visa">Flight</h3>
                    </div>
                    <div id="visa" onClick={handleStay}>
                      <MdBedroomChild />
                      <h3>Stays</h3>
                    </div>
                  </div>
                </div>
                <div className="travel-plan__form">
                  <div className="form-control">
                    <label htmlFor="home">Home Country</label>
                    <select
                      name="country"
                      id="home"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option hidden value="">
                        Choose Country
                      </option>
                      {country.map((nation, index) => (
                        <option key={index}>
                          {nation.country} - {nation.iso2}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control">
                    <label htmlFor="destination">Destination</label>
                    <select
                      name="destination"
                      id="destination"
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option hidden value="">
                        Choose Destination
                      </option>
                      <option>Nigeria - NG</option>
                      <option>Canada - CA</option>
                      <option>United States of America - US</option>
                      <option>New Zealand - NZ</option>
                      <option>Unnited Kingdom - UK</option>
                      <option>Norway - NW</option>
                    </select>
                  </div>
                  <div className="desktop-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <MobileTravelDate />
                  </div>
                  <div className="pro-traveldate">
                  <label htmlFor="">Dates</label>
                    <ProDate />
                  </div>
                  <div className="mobile-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <MobileTravelDate />
                  </div>
                  <div className="tablet-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <TabletTravelDate />
                  </div>
                  <div className="medium-screen-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <MediumScreenTravelDate />
                  </div>
                </div>
                <button className="plan-btn">Search</button>
              </form>
            )}
            {stay && (
              <form>
                <div className="travel-plan">
                  <div className="travel-plan__list">
                    <div id="visa" onClick={handleVisa}>
                      <FaPassport />
                      <h3>Visa</h3>
                    </div>
                    <div id="visa" onClick={handleFlight}>
                      <BsAirplaneFill />
                      <h3>Flight</h3>
                    </div>
                    <div id="visa" onClick={handleStay}>
                      <MdBedroomChild />
                      <h3 className="visa">Stays</h3>
                    </div>
                  </div>
                </div>
                <div className="travel-plan__form">
                  <div className="form-control">
                    <label htmlFor="">Destination</label>
                    <select name="country" id="destination">
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
                  <div className="desktop-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <MobileTravelDate />
                  </div>
                  <div className="pro-traveldate">
                  <label htmlFor="">Dates</label>
                    <ProDate />
                  </div>
                  <div className="mobile-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <MobileTravelDate />
                  </div>
                  <div className="tablet-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <TabletTravelDate />
                  </div>
                  <div className="medium-screen-traveldate">
                  <label htmlFor="">Check-in date - Check-out date</label>
                    <MediumScreenTravelDate />
                  </div>
                  <div className="form-control">
                    <label htmlFor="">Number of Guests</label>
                    <select
                      name="persons"
                      id="destination"
                      value={formData.persons}
                      onChange={handleChange}
                    >
                      <option hidden value="">
                        No of Guests
                      </option>
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>1 Child</option>
                      <option>2 Children</option>
                      <option>3 Children</option>
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                      <option>3 Rooms</option>
                    </select>
                  </div>
                </div>
                <button className="plan-btn stay">Search</button>
              </form>
            )}
          </div>
          <section className="top">
            <h2>Our top countries</h2>
            <p>
              Going somewhere to celebrate this season? Whether you’re going
              home or somewhere to roam, we’ve got the travel tools to get you
              to your destination.
            </p>
            <div className="section-flex">
              {countries.map((country, index) => (
                <Fragment key={index}>
                  {index === currentIndex && (
                    <div className="section-content">
                      <div className="content">
                        <h3>Get {country.title} Work Visa</h3>
                      </div>
                      <p>{country.info1}</p>
                      <p>{country.info2}</p>
                      <button className="plan-btn apply">
                        Apply to {country.title}
                      </button>
                    </div>
                  )}
                </Fragment>
              ))}
              <div className="img-grid">
                {countries.map((country, index) => (
                  <div key={index} className="img-wrapper">
                    <img
                      src={country.img}
                      alt="country"
                      className="content__img"
                      onMouseEnter={() => setCurrentIndex(index)}
                    />
                    <h2
                      className={
                        index === currentIndex
                          ? "country-name direct"
                          : "country-name"
                      }
                    >
                      {country.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="top">
            <h2>Popular Destinations</h2>
            <p>
              Explore our popular destinations to find the best option for your
              next adventure!
            </p>
            <div className="destination-grid">
              {destination.map((city, index) => (
                <City key={index} city={city} />
              ))}
            </div>
          </section>
          <section>
            <div className="img-grid travel">
              {bookings.map((booking, index) => (
                <div key={index} className="img-wrapper travel">
                  <img
                    src={booking.img}
                    alt="pix"
                    className="content__img travel"
                  />
                  <h2 className="country-name guide">{booking.title}</h2>
                  <p className="country-name desc">{booking.info}</p>
                  <button className="btn travel">{booking.btn}</button>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="subscribe">
              <h1>Want travel deals?</h1>
              <p>
                Be the first know when our next promo starts, or when we publish
                new article. Stay updated with all latest news and events.
              </p>
              <div className="sub">
                <div className="sub-input">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small className="mobile-error">{error}</small>
                </div>
                <button className="btn join" onClick={handleSubmit}>
                  Subscribe
                </button>
              </div>
              <small className="desktop-error">{error}</small>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ExploreCity;
