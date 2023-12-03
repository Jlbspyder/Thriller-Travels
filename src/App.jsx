import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
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

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [view, setView] = useState(false)

  const handleClose = () => {
    setOpenMenu(false);
  };
  const handleOpen = () => {
    setOpenMenu(true);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
               <Hotel />
               <SideBar openMenu={openMenu} close={handleClose} />
              </>
            }
          />
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
