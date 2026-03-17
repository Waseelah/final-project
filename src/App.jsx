import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp  from "./Pages/SignUp";

const App = () => {
  return (
    <div>
      <LandingPage />
      <SignUp />
    </div>
  );
};

export default App;
