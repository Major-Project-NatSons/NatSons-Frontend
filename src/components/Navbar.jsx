import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { getUser } from '../services/userServices';
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData,setUserData] = useState(null);

  useEffect(() => {
    // Check if 'userToken' exists in localStorage
    if (localStorage.getItem('userToken')) {
      const userToken = localStorage.getItem('userToken');

      // Extract and decode the token
      const token = userToken.split(' ')[1];
      const decodedToken = jwtDecode(token);

      console.log("Decoded Token:", decodedToken);

      // Save the user ID in localStorage
      localStorage.setItem('userId', decodedToken.u_id);

      // Fetch user data and update state
      getUser(decodedToken.u_id)
        .then((res) => {
          console.log("User Data:", res);
          setUserData(res);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []); 

  const handleLoginPage = () => {
    navigate("/login");
  };

  // Check if the current pathname is "/login"
  if (location.pathname === "/login" || location.pathname ==='/signup') {
    return null; // Do not render the Navbar on the login page
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 font-poppins bg-white shadow-xl transition-all ease-in-out duration-300">
      <div className="w-[140px] h-auto -mt-3">
        <img src="/logo1.png" alt="Logo" className="w-full h-auto" />
      </div>

      <div className="hidden md:flex items-center gap-12 text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-800 hover:text-blue-600 ${
              isActive ? 'border-b-2 border-blue-600 font-semibold' : ''
            } transition-all duration-300`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/buy"
          className={({ isActive }) =>
            `text-gray-800 hover:text-blue-600 ${
              isActive ? 'border-b-2 border-blue-600 font-semibold' : ''
            } transition-all duration-300`
          }
        >
          Buy
        </NavLink>
        <NavLink
          to="/sell"
          className={({ isActive }) =>
            `text-gray-800 hover:text-blue-600 ${
              isActive ? 'border-b-2 border-blue-600 font-semibold' : ''
            } transition-all duration-300`
          }
        >
          Forum
        </NavLink>
        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `text-gray-800 hover:text-blue-600 ${
              isActive ? 'border-b-2 border-blue-600 font-semibold' : ''
            } transition-all duration-300`
          }
        >
          Attendance
        </NavLink>
        <NavLink
          to="/plan"
          className={({ isActive }) =>
            `text-gray-800 hover:text-blue-600 ${
              isActive ? 'border-b-2 border-blue-600 font-semibold' : ''
            } transition-all duration-300`
          }
        >
          Plan
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-gray-800 hover:text-blue-600 ${
              isActive ? 'border-b-2 border-blue-600 font-semibold' : ''
            } transition-all duration-300`
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="md:hidden flex items-center">
        <button className="text-gray-800 hover:text-blue-600 transition-all duration-300">
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <button
        onClick={handleLoginPage}
        className="py-3 px-10 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
      >
        {userData ? (userData.data.name ? userData.data.name : "Login") : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;
