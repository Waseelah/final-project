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
import Login from "./Pages/Login";
import Transaction from "./Pages/Transaction";
import Verify from "./components/Verify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Dashboard with nested routes */}
        <Route path="/DashboardLayout" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} /> {/* Default page */}
         { <Route path="disputes" element={<Disputes />}/>}
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="transaction" element={<Transaction />}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="PinSetup" element={<PinSetup />} />
           <Route path="transaction" element={<Transaction />}/>
        </Route>
        <Route path="/PinSetup" element={<PinSetup />} />
          <Route path="/Login" element={<Login/>} />
            <Route path="/LandingPage" element={<LandingPage/>} />
            <Route path="/Verify" element={<Verify/>}/>

      </Routes>
    </div>
  );
};

export default App;
