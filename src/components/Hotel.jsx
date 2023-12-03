import React, { useState, useEffect, useRef } from "react";
import { BsHouseHeart } from "react-icons/bs";
import { RxDimensions } from "react-icons/rx";
import { LiaCitySolid } from "react-icons/lia";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineKitchen } from "react-icons/md";
import { MdOutlineBalcony } from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { ImLocation2 } from "react-icons/im";
import { FaHotTub } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { MdOutlineElevator } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdPets } from "react-icons/md";
import { TbIroning3 } from "react-icons/tb";
import { GiSwanBreeze } from "react-icons/gi";
import { FaShuttleVan } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { FaParking } from "react-icons/fa";
import { LiaSmokingBanSolid } from "react-icons/lia";
import { BiWifi } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { GrNext, GrPrevious } from "react-icons/gr";
import DesktopDatePicker from "./DesktopDatePicker";
import DatePicker from "./MobileDatePicker";
import Footer from "./Footer";
import TabletDatePicker from "./TabletDate";

const Hotel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [modal, setModal] = useState(false);
  const [hotel, setHotel] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [touchPosition, setTouchPosition] = useState(null);
  const [formData, setFormData] = useState({
    search: "",
    checkIn: "",
    checkOut: "",
    persons: "",
    business: "",
    apartments: "",
  });
  const { id } = useParams();

  const length = gallery.length;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const fetchHotels = async () => {
    const res = await fetch(`https://hotel-api-hpic.onrender.com/locations`);
    const data = await res.json();
    setHotels(data);
    if (data.status === 404) {
      setHotels([]);
      return;
    }
  };

  useEffect(() => {
    try {
      fetchHotels();
    } catch (error) {}
  }, []);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        if (!id) return null;
        const res = await fetch(
          `https://hotel-api-hpic.onrender.com/locations/${id}`
        );
        const data = await res.json();
        if (!data) return null;
        return data;
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchHotels()
      .then((data) => {
        setSelected(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const searchRef = useRef();

  const searchHotel = () => {
    const searchValue = searchRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const res = await fetch(
          `https://hotel-api-hpic.onrender.com/locations/?=${searchValue}`
        );
        const data = await res.json();
        setHotel(
          data.filter((hotel) => hotel.name.toLowerCase().includes(searchValue))
        );
      };
      try {
        fetchSearch();
      } catch (error) {}
    } else {
      fetchHotels();
    }
  };

  const noHotel = hotels.status || hotels.message;

  const handleSearch = (e) => {
    e.preventDefault();
    searchHotel();
  };

  const handleClose = () => {
    setHotels(hotels);
    setModal(false);
  };

  const getGallery = () => {
    setModal(true);
    const pix = Object.entries(selected.thumbnail).map(([_, value]) => {
      const { img } = value;
      return img;
    });
    setGallery(pix);
  };

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNext();
    }

    if (diff < -5) {
      handlePrevious();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <div className="container hotel">
        {selected && <h1 className="hotel-name">{selected.name}</h1>}
        {selected && <p className="hotel-location">{selected.location}</p>}
        <div className="hotel-wrapper">
          {selected && (
            <div className="img-gallery">
              {selected && (
                <h1 className="mobile hotel-name">{selected.name}</h1>
              )}
              {selected && (
                <p className="mobile hotel-location">{selected.location}</p>
              )}
              <div className="gallery-wrapper">
                {Object.entries(selected.images).map(([_, image], index) => (
                  <img
                    key={index}
                    src={image.img}
                    alt="room-pix"
                    className="hotel-img"
                    onClick={() => getGallery(gallery)}
                  />
                ))}
              </div>
              <div className="hotel-img-grid">
                {Object.entries(selected.thumbnail).map(([_, item], index) => (
                  <img
                    key={index}
                    src={item.img}
                    alt="room-pix"
                    className="thumbnail"
                    onClick={() => getGallery(gallery)}
                  />
                ))}
              </div>
            </div>
          )}
          {selected && (
            <div className="mobile-img-gallery">
              {selected && (
                <h1 className="mobile hotel-name">{selected.name}</h1>
              )}
              {selected && (
                <p className="mobile hotel-location">{selected.location}</p>
              )}
              <div
                className="hotel-img-gallery"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                {Object.entries(selected.thumbnail).map(([_, item], index) => (
                  <div
                    key={index}
                    className={index === currentIndex ? "hotel-img-view" : ""}
                  >
                    {index === currentIndex && (
                      <img
                        src={item.img}
                        alt="room-pix"
                        className="pix"
                        onClick={() => getGallery(gallery)}
                      />
                    )}
                  </div>
                ))}
                <GrPrevious className="prev" onClick={handlePrevious} />
                <GrNext className="next" onClick={handleNext} />
              </div>
            </div>
          )}
          <div className="search-sidebar">
            <div className="hotel-search">
              <div className="desktop-date">
                <DesktopDatePicker />
              </div>
              <div className="mobile-date">
                <DatePicker />
              </div>
              <div className="tablet-date">
                <TabletDatePicker />
              </div>
              <div className="form-control">
                {/* <label htmlFor="checkIn">Check-in date</label> */}
                {/* <CheckOut /> */}
                {/* <input
                  type="date"
                  name="checkIn"
                  id="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                /> */}
              </div>
              <div className="form-control">
                {/* <label htmlFor="checkOut">Check-out date</label>
                <input
                  type="date"
                  name="checkOut"
                  id="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                /> */}
              </div>
              <div className="form-control">
                {/* <label htmlFor="persons">Number of Guests</label> */}
                <select
                  name="persons"
                  id="persons"
                  value={formData.persons}
                  onChange={handleChange}
                >
                  <option hidden value="">
                    Number of Guests
                  </option>
                  <option>2 Adults</option>
                  <option>1 Child</option>
                  <option>2 Children</option>
                  <option>3 Children</option>
                  <option>1 Room</option>
                  <option>2 Rooms</option>
                </select>
              </div>
              <div className="check">
                <div className="checkbox">
                  <label htmlFor="apartments">Entire homes & apartments</label>
                  <input
                    type="checkbox"
                    name="apartments"
                    id="apartments"
                    onChange={handleChange}
                    checked={formData.apartments}
                  />
                </div>
                <div className="checkbox">
                  <label htmlFor="business">I'm travelling for work</label>
                  <input
                    type="checkbox"
                    name="business"
                    id="business"
                    onChange={handleChange}
                    checked={formData.business}
                  />
                </div>
              </div>
              <button className="plan-btn">Search</button>
            </div>
            {selected && (
              <Carousel
                hotels={hotels}
                close={handleClose}
                address={selected.location}
                gallery={gallery}
                modal={modal}
                name={selected.name}
              />
            )}
          </div>
        </div>
        {selected && (
          <div className="info-flex">
            {selected.accommodation && (
              <div className="spec">
                {selected.accommodation}
                <BsHouseHeart className="react-icon" />
              </div>
            )}
            {selected.size && (
              <div className="spec">
                {selected.size}
                <RxDimensions className="react-icon" />
              </div>
            )}
            {selected.kitchen && (
              <div className="spec">
                {selected.kitchen}
                <MdOutlineKitchen className="react-icon" />
              </div>
            )}
            {selected.view && (
              <div className="spec">
                {selected.view}
                <LiaCitySolid className="react-icon" />
              </div>
            )}
            {selected.laundry && (
              <div className="spec">
                {selected.laundry}
                <GiWashingMachine className="react-icon" />
              </div>
            )}
            {selected.WiFi && (
              <div className="spec">
                {selected.WiFi}
                <BiWifi className="react-icon" />
              </div>
            )}
            {selected.terrace && (
              <div className="spec">
                {selected.terrace}
                <MdOutlineBalcony className="react-icon" />
              </div>
            )}
            {selected.balcony && (
              <div className="spec">
                {selected.balcony}
                <MdOutlineBalcony className="react-icon" />
              </div>
            )}
            {selected.bath && (
              <div className="spec">
                {selected.bath}
                <LiaBathSolid className="react-icon" />
              </div>
            )}
            {selected.cooling && (
              <div className="spec">
                {selected.cooling}
                <GiSwanBreeze className="react-icon" />
              </div>
            )}
            {selected.housekeeping && (
              <div className="spec">
                {selected.housekeeping}
                <TbIroning3 className="react-icon" />
              </div>
            )}
            {selected.heater && (
              <div className="spec">
                {selected.heater}
                <FaHotTub className="react-icon" />
              </div>
            )}
            {selected.lift && (
              <div className="spec">
                {selected.lift}
                <MdOutlineElevator className="react-icon" />
              </div>
            )}
            {selected.pets && (
              <div className="spec">
                {selected.pets}
                <MdPets className="react-icon" />
              </div>
            )}
            {selected.room && (
              <div className="spec">
                {selected.room}
                <LiaSmokingBanSolid className="react-icon" />
              </div>
            )}
            {selected.frontdesk && (
              <div className="spec">
                {selected.frontdesk}
                <Ri24HoursFill className="react-icon" />
              </div>
            )}
          </div>
        )}
        <div className="description">
          {selected && (
            <div className="des-info-wrapper">
              {Object.entries(selected.info).map(([_, value], index) => {
                const { first, second, third } = value;
                return (
                  <div key={index} className="lead">
                    <p>{first}</p>
                    <p>{second}</p>
                    <p>{third}</p>
                  </div>
                );
              })}
              <div className="facilities">
                <h3>Most popular facilities</h3>
                <div className="facility">
                  {selected.WiFi && (
                    <div className="amenity">
                      <BiWifi className="symbol" /> {selected.WiFi}
                    </div>
                  )}
                  {selected.smoking && (
                    <div className="amenity">
                      <LiaSmokingBanSolid className="symbol" />
                      {selected.smoking}
                    </div>
                  )}
                  {selected.shuttle && (
                    <div className="amenity">
                      <FaShuttleVan className="symbol" /> {selected.shuttle}
                    </div>
                  )}
                  {selected.family && (
                    <div className="amenity">
                      <MdFamilyRestroom className="symbol" />
                      {selected.family}
                    </div>
                  )}
                  {selected.frontdesk && (
                    <div className="amenity">
                      <Ri24HoursFill className="symbol" />
                      {selected.frontdesk}
                    </div>
                  )}
                  {selected.terrace && (
                    <div className="amenity">
                      <MdOutlineBalcony className="symbol" />
                      {selected.terrace}
                    </div>
                  )}
                  {selected.heater && (
                    <div className="amenity">
                      <FaHotTub className="symbol" /> {selected.heater}
                    </div>
                  )}
                  {selected.elevator && (
                    <div className="amenity">
                      <MdOutlineElevator className="symbol" />
                      {selected.elevator}
                    </div>
                  )}
                  {selected.food && (
                    <div className="amenity">
                      <MdFreeBreakfast className="symbol" /> {selected.food}
                    </div>
                  )}
                  {selected.private && (
                    <div className="amenity">
                      <FaParking className="symbol" /> {selected.private}
                    </div>
                  )}
                  {selected.gym && (
                    <div className="amenity">
                      <CgGym className="symbol" /> {selected.gym}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          {selected && (
            <div className="des-btn-wrapper">
              <h3>Property Highlights</h3>
              <div className="tips">
                <ImLocation2 />
                <p>{selected.tips}</p>
              </div>
              <div className="tips">
                <FaParking />
                <p>{selected.parking}</p>
              </div>
              <div className="breakfast">
                <h3 className="hint">Breakfast Info</h3>
                {selected.breakfast ? (
                  <p>{selected.breakfast}</p>
                ) : (
                  <p>Not available</p>
                )}
              </div>
              <button className="plan-btn reserve">Reserve</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
