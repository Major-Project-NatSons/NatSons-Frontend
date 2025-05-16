import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FrontPage from "./components/pages/FrontPage";
import Buy from "./components/Buy";
import Attendance from "./components/Attendance"
import Sell from "./components/Sell";
import Contact from "./components/Contact";
import Plan from "./components/Plan";
import LoginSignUp from "./components/LoginSignUp";
import SignUp from "./components/SignUp";
import Planview from "./components/planview";
import AttendancePayment from "./components/attendancepayment";




function App() {
  return (
    <Router>
      <div className="flex flex-col">
        {/* Navbar remains persistent */}
        <Navbar />
        
        <div className="flex flex-col w-full items-center">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/login" element = {<LoginSignUp/>}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path="/planview" element={<Planview />}/>
            <Route path="/attendance-payment" element={<AttendancePayment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
