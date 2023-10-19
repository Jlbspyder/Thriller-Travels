import React from "react";
import { useLocation } from "react-router-dom";
import { AiTwotoneDashboard } from "react-icons/ai";
import { BiSolidCity, BiEnvelope } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { TbSettings2 } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { IoMdClose } from "react-icons/io";

const SideBar = ({ openMenu, close }) => {
  const { name, avatar } = useGetUserInfo();
  const navigate = useNavigate();
  const location = useLocation();

  const LogOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <aside>
      <div className={openMenu ? "sidebar mobile" : "sidebar"}>
        {<IoMdClose className="close-menu" onClick={close} />}
        <div className="sidebar-top">
          <h3>MimaBooking</h3>
          {avatar && (
            <div className="pix-wrapper">
              <img src={avatar} alt="profile" className="profile-pix" />
              <div className="edit-bg">
                <TbEdit className="edit" />
              </div>
            </div>
          )}
          <p className="profile-name">{name}</p>
        </div>
        <div className="sidebar-bottom">
          <div className="dashboard">
            <AiTwotoneDashboard />
            <p className={location.pathname === "/homepage" ? "live" : ""}>
              Dashboard
            </p>
          </div>
          <div className="explore-city">
            <BiSolidCity />
            <p>Explore City</p>
          </div>
          <div className="ticket">
            <BiEnvelope />
            <p>Ticket</p>
          </div>
          <div className="fav">
            <BsHeart />
            <p>Favorites</p>
          </div>
          <div className="setting">
            <TbSettings2 />
            <p>Setting</p>
          </div>
        </div>
        <div className="log-out" onClick={LogOut}>
          <div className="angle-right">
            <FaAngleRight className="right-arrow" />
          </div>
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
