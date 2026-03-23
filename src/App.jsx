import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import Nav from "./components/Nav";
import Profile from "./components/profile";
import DashboardLayout from "./Pages/DashboardLayout";
import PinSetup from "./components/PinSetup";
import Dashboard from "./Pages/Dashboard";
import Disputes from "./Pages/Disputes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Dashboard with nested routes */}
        <Route path="/DashboardLayout" element={<DashboardLayout />}>
          <Route index element={<Profile />} /> {/* Default page */}
          <Route path="disputes" element={<Disputes />}/>
        </Route>
        <Route path="/PinSetup" element={<PinSetup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
