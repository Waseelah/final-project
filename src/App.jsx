import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp  from "./Pages/SignUp";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      
    
      <Routes>
          <Route path='/' element={<LandingPage />} />
         <Route path='/SignUp' element={<SignUp />} />
         

      </Routes>
    
   
    </div>
  );
};

export default App;
