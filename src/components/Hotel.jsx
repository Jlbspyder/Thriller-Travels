import React, { useState, useEffect, useRef } from "react";
import { data, locations } from "../data";
import Hotels from "./Hotels";
import { BsHeart } from "react-icons/bs";
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

const Hotel = ({view, setView, topic, setTopic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [hotel, setHotel] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [formData, setFormData] = useState({
    search: "",
    checkIn: "",
    checkOut: "",
    persons: "",
    business: "",
    apartments: "",
  });
  const { id } = useParams();


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
    const res = await fetch(`http://localhost:5000/locations/`);
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
        const res = await fetch(`http://localhost:5000/locations/${id}`);
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
          `http://localhost:5000/locations/${searchValue}`
        );
        const data = await res.json();
        setHotel(data);
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

  const handleView = (index) => {
    setTopic(selected.title)
    setView(!view)
    setCurrentIndex(index)
  }

  return (
  <>
    <div className="container hotel">
      {selected && <h1 className="hotel-name">{selected.title}</h1>}
      {selected && <p className="hotel-location">{selected.location}</p>}
      <div className="search-sidebar">
        <div className="hotel-search">
          <h2>Search</h2>
          <form onSubmit={handleSearch} className="form-control">
            <label>Destination/property name:</label>
            {selected && (
              <input
                type="text"
                name="search"
                placeholder="Search for a hotel"
                ref={searchRef}
                onChange={searchHotel}
              />
            )}
          </form>
          <div className="form-control">
            <label>Check-in date</label>
            <input
              type="date"
              placeholder="Check-in date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Check-out date</label>
            <input
              type="date"
              placeholder="Check-out date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label>Number of Guests</label>
            <input
              type="text"
              placeholder="2 adults"
              name="persons"
              value={formData.persons}
              onChange={handleChange}
            />
          </div>
          <div className="check">
            <div className="checkbox">
              <label htmlFor="homes">Entire homes & apartments</label>
              <input
                type="checkbox"
                name="apartments"
                onChange={handleChange}
                checked={formData.apartments}
              />
            </div>
            <div className="checkbox">
              <label htmlFor="work">I'm travelling for work</label>
              <input
                type="checkbox"
                name="business"
                onChange={handleChange}
                checked={formData.business}
              />
            </div>
          </div>
          <button className="plan-btn">Search</button>
        </div>
        {selected && (
          <div className="img-gallery" onClick={handleView}>
            <div className="gallery-wrapper">
            {Object.entries(selected.images).map(([_, image], index) => (
                <img key={index} src={image.img} alt="room-pix" className="hotel-img" />
            ))}
            </div>
            <div className="hotel-img-grid">
            {Object.entries(selected.thumbnail).map(([_, item], index) => (
                // <Carousel key={index} pix={item.img} />
                <img key={index} src={item.img} alt="room-pix" className="thumbnail" onClick={() => setSelectedHotel(id)} />
            ))}
            </div>
          </div>
        )}
      </div>
      {selected && <div className="info-flex">
        {selected.accommodation && <div className="spec">
          {selected.accommodation}
          <BsHouseHeart  className="react-icon"/>
        </div>}
        {selected.size &&<div className="spec">
          {selected.size}
          <RxDimensions  className="react-icon"/>
        </div>}
        {selected.kitchen &&<div className="spec">
          {selected.kitchen}
          <MdOutlineKitchen  className="react-icon"/>
        </div>}
        {selected.view &&<div className="spec">
          {selected.view}
          <LiaCitySolid  className="react-icon"/>
        </div>}
        {selected.laundry &&<div className="spec">
          {selected.laundry}
          <GiWashingMachine  className="react-icon"/>
        </div>}
        {selected.WiFi &&<div className="spec">
          {selected.WiFi}
          <BiWifi  className="react-icon"/>
        </div>}
        {selected.terrace &&<div className="spec">
          {selected.terrace}
          <MdOutlineBalcony  className="react-icon"/>
        </div>}
        {selected.balcony &&<div className="spec">
          {selected.balcony}
          <MdOutlineBalcony  className="react-icon"/>
        </div>}
        {selected.bath &&<div className="spec">
          {selected.bath}
          <LiaBathSolid  className="react-icon"/>
        </div>}
        {selected.cooling &&<div className="spec">
          {selected.cooling}
          <GiSwanBreeze  className="react-icon"/>
        </div>}
        {selected.housekeeping &&<div className="spec">
          {selected.housekeeping}
          <TbIroning3  className="react-icon"/>
        </div>}
        {selected.heater &&<div className="spec">
          {selected.heater}
          <FaHotTub   className="react-icon"/>
        </div>}
        {selected.lift &&<div className="spec">
          {selected.lift}
          <MdOutlineElevator  className="react-icon"/>
        </div>}
        {selected.pets &&<div className="spec">
          {selected.pets}
          <MdPets  className="react-icon"/>
        </div>}
        {selected.room &&<div className="spec">
          {selected.room}
          <LiaSmokingBanSolid  className="react-icon"/>
        </div>}
        {selected.frontdesk &&<div className="spec">
          {selected.frontdesk}
          <Ri24HoursFill  className="react-icon"/>
        </div>}
      </div>}
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
  </>
  );
};

export default Hotel;
