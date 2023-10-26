import React, { useState } from "react";
import { destination } from "../data"
import { FaPassport } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import { MdBedroomChild } from "react-icons/md";
import City from "../components/City";
import { countries } from "../data";

const ExploreCity = () => {
  const [currentIndex, setCurrentIndex] = useState(null)


  return (
    <section id="explore-city">
      <div className="container">
        <div className="main-container">
          <div className="main-container__header">
            <h1>Revolutionize your travel experiences</h1>
          </div>
          <div className="plan">
            <form>
              <div className="travel-plan">
                <div className="travel-plan__list">
                  <div id="visa">
                    <FaPassport />
                    <h3>Visa</h3>
                  </div>
                  <div id="visa">
                    <BsAirplaneFill />
                    <h3>Flight</h3>
                  </div>
                  <div id="visa">
                    <MdBedroomChild />
                    <h3>Stays</h3>
                  </div>
                </div>
              </div>
              <div className="travel-plan__form">
                <div className="form-control">
                  Home Country
                  <select name="country" id="country">
                    <option hidden value="">
                      Nigeria - NG
                    </option>
                    <option>AD - Andorra</option>
                    <option>AE - United Arab Emirates</option>
                    <option>AF - Afghanistan</option>
                    <option>AG- Antigua and Barbuda</option>
                    <option>AI - Anguilla</option>
                  </select>
                </div>
                <div className="form-control">
                  Destination
                  <select name="country" id="country">
                    <option hidden value="">
                      Canada - CA
                    </option>
                    <option>AD - Andorra</option>
                    <option>AE - United Arab Emirates</option>
                    <option>AF - Afghanistan</option>
                    <option>AG- Antigua and Barbuda</option>
                    <option>AI - Anguilla</option>
                  </select>
                </div>
                <div className="form-control">
                  Visa Type
                  <select name="country" id="country">
                    <option hidden value="">
                      Work
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
              </div>
              <button className="plan-btn">Get Started</button>
            </form>
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
                <>
                {index === currentIndex && <div key={index} className="section-content">
                  <div className="content">
                    <h3>Get {country.title} Work Visa</h3>
                  </div>
                  <p>
                    {country.info}
                  </p>
                  <button className="plan-btn apply">Apply to {country.title}</button>
                </div>}
                </>
              ))}
              {/* <div className="section-content">
                <div className="content">
                  <h3>Get Norway Work Visa</h3>
                </div>
                <p>
                Experience the blend of tradition and modernity in the United Kingdom. 
                Whether you're drawn to London's bustling streets or the historic charm of 
                Edinburgh, Thrillers Travels is your partner in visa application excellence. 
                Let us simplify your path to the UK, so you can make your mark in this iconic 
                destination.<br/><br/>Don't wait any longer to embark on your journey to Canada, Australia, 
                Norway, or the United Kingdom! Let Thrillers Travels be your guide, turning your 
                travel aspirations into unforgettable realities.
                </p>
                <button className="plan-btn apply">Apply to ....</button>
              </div> */}
              <div className="img-grid">
                {countries.map((country, index) => (
                  <div  key={index} className="img-wrapper">
                      <img src={country.img} alt="country" className="content__img" onMouseEnter ={() => setCurrentIndex(index)} />
                      <h2 className={index === currentIndex ? "country-name direct" : "country-name"}>{country.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="top">
            <h2>Popular Destinations</h2>
            <p>
              Explore our popular destinations to find the best option for your next adventure!
            </p>
            <div className="destination-grid">
              {destination.map((city, index) => (
                <City key={index} city={city} />
               ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ExploreCity;
