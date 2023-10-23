import React from "react";
import { useLocation, Link } from "react-router-dom";
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
        <Link to='/'>
          <div className="dashboard" onClick={close}>
            <AiTwotoneDashboard  className={location.pathname === "/homepage" ? "icon-live" : "icon"} />
              <p className={location.pathname === "/homepage" ? "live" : ""}>
                    Dashboard
              </p>
          </div>
        </Link> 
        <Link to='/explore'>
          <div className="explore-city" onClick={close}>
            <BiSolidCity  className={location.pathname === "/explore" ? "icon-live" : "icon"} />
            <p className={location.pathname === "/explore" ? "live" : ""}>
              Explore Cities
            </p>
          </div>
        </Link>
        <Link to='/ticket'>
          <div className="ticket" onClick={close}>
            <BiEnvelope className={location.pathname === "/ticket" ? "icon-live" : "icon"} />
            <p className={location.pathname === "/ticket" ? "live" : ""}>
              Ticket
            </p>
          </div>
        </Link>
        <Link to='/favorites' onClick={close}>
          <div className="fav">
            <BsHeart className={location.pathname === "/favorites" ? "icon-live" : "icon"} />
            <p className={location.pathname === "/favorites" ? "live" : ""}>
              Favorites
            </p>
          </div>
        </Link>
        <Link to='/setting' onClick={close}>
          <div className="setting">
            <TbSettings2 className={location.pathname === "/setting" ? "icon-live" : "icon"} />
            <p className={location.pathname === "/setting" ? "live" : ""}>
              Settings
            </p>
          </div>
        </Link>
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
