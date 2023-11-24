import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ExploreCity from "./pages/ExploreCity";
import Ticket from "./pages/Ticket";
import Favorites from "./pages/Favorites";
import Setting from "./pages/Setting";
import MobileHeader from "./components/MobileHeader";
import Footer from "./components/Footer";
import Hotel from "./components/Hotel";
import LightBox from "./components/LightBox";
import Carousel from "./components/Carousel";

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [view, setView] = useState(false)
  const [topic, setTopic] = useState(null)
  const [selected, setSelected] = useState(null)
  const [hotels, setHotels] = useState([]);

const img =  hotels.map((item, index) => (
      item.thumbnail.map((thumb, i) => (
        thumb.img
      ))
))

  const { id } = useParams();

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



  const handleClose = () => {
    setOpenMenu(false);
  };
  const handleOpen = () => {
    setOpenMenu(true);
  };


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route
            path="/homepage"
            element={
              <>
                <HomePage
                  openMenu={openMenu}
                  close={handleClose}
                  open={handleOpen}
                />
                <Footer />
                <SideBar openMenu={openMenu} close={handleClose} />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                 <MobileHeader 
                  openMenu={openMenu}
                  close={handleClose}
                  open={handleOpen}
               />
                <ExploreCity />
                <Footer />
                <SideBar openMenu={openMenu} close={handleClose} view={view} />
              </>
            }
          />
          <Route
            path="/ticket"
            element={
              <>
                 <MobileHeader 
                  openMenu={openMenu}
                  close={handleClose}
                  open={handleOpen}
               />
                <Ticket />
                <SideBar openMenu={openMenu} close={handleClose} />
              </>
            }
          />
          <Route
            path="/favorites"
            element={
              <>
               <MobileHeader 
                  openMenu={openMenu}
                  close={handleClose}
                  open={handleOpen}
               />
                <Favorites />
                <SideBar openMenu={openMenu} close={handleClose} />
              </>
            }
          />
          <Route
            path="/setting"
            element={
              <>
               <MobileHeader 
                  openMenu={openMenu}
                  close={handleClose}
                  open={handleOpen}
               />
                <Setting />
                <SideBar openMenu={openMenu} close={handleClose} />
              </>
            }
          />
          <Route 
            path="/:id"
            element={
              <>
                 <MobileHeader 
                  openMenu={openMenu}
                  close={handleClose}
                  open={handleOpen}
               />
               <Hotel  view={view} setView={setView} topic={topic} setTopic={setTopic}  />
               {view && <Carousel view={view} setView={setView} topic={topic} selected={selected} hotels={hotels} images={img} />}
               <SideBar openMenu={openMenu} close={handleClose} view={view} setView={setView}/>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
