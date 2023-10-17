import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import Login from './pages/Login';

function App() {

  return (
  <>
      <Router>
          <Routes>
            <Route
              path="/"
              exact
              element={<Login  />}
            />

            <Route
              path="/homepage"
              element={
            <>
              <HomePage/>
              <SideBar />
            </>
              }
            />
          </Routes>
      </Router>
  </>
  )
}

export default App

