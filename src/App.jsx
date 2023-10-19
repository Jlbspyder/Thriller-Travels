import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

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
                <SideBar openMenu={openMenu} close={handleClose} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
