import React from 'react';
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { PiBuildingApartment } from "react-icons/pi";
import { VscSmiley } from "react-icons/vsc";
import {useEffect} from "react";
const FrontPage = () => {

  useEffect(() => {
    const spots = document.querySelectorAll('.moving-spot');
    spots.forEach((spot) => {
      const delay = Math.random() * 5 + 's';  
      const duration = Math.random() * 20 + 15 + 's';  
      spot.style.animationDelay = delay;
      spot.style.animationDuration = duration;
    });
  }, []);


  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="moving-spot bg-yellow-600 opacity-50 w-48 h-48 rounded-full blur-xl absolute top-20 left-10"></div>
        <div className="moving-spot bg-gradient-to-r from-blue-500 to-indigo-600 opacity-40 w-40 h-40 rounded-full blur-xl absolute top-40 right-20"></div>
        <div className="moving-spot bg-gradient-to-r from-pink-300 to-purple-600 opacity-30 w-48 h-48 rounded-full blur-xl absolute bottom-40 left-24"></div>
        <div className="moving-spot bg-gradient-to-r from-green-500 to-yellow-500 opacity-25 w-40 h-40 rounded-full blur-xl absolute bottom-10 right-10"></div>
      </div>
    <div className="w-full">
      

      <section id="home" className="relative w-full h-screen flex items-center justify-center text-center  px-10 md:px-20">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img
            src="/home.jpg"
            alt="Dream Home"
            className="w-full h-full object-cover transform scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl"></div>
        </div>

        <div className="relative z-10 text-white">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">Hii Amit</h1> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Dream House is No Longer Just a <span className="text-blue-500">DREAM</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover your perfect home with us – designed to suit your dreams and lifestyle.
          </p>
          <a href="/buy">

          <button className="px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            Explore Now
          </button>
          </a>
        
        </div>
      </section>

      <section id="categories" className="flex flex-wrap justify-evenly mt-20 gap-10 px-10 md:px-20 py-8 bg-light-bg cursor-pointer">
        {[
          { icon: <FaRegBuilding />, label: "Building", size: "sm" },
          { icon: <MdOutlineWarehouse />, label: "Warehouse", size: "sm" },
          { icon: <GiIsland />, label: "Land", size: "sm" },
          { icon: <FaHouse />, label: "House", size: "sm" },
          { icon: <PiBuildingApartment />, label: "Apartment", size: "sm" },
        ].map((category, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-4 p-6 bg-white shadow-lg rounded-3xl transition-all duration-300 
        ${category.size === 'lg' ? 'w-72' : category.size === 'md' ? 'w-60' : 'w-48'} 
        hover:shadow-xl hover:scale-105`}
          >
            <div className="text-5xl text-blue-500">{category.icon}</div>
            <span className="text-gray-700 font-medium text-xl">{category.label}</span>
          </div>
        ))}
      </section>

      <section id="availability" className="mt-20 px-10 md:px-20 cursor-pointer">
        <h3 className="text-center text-3xl font-bold mb-12">Available Locations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {[
            { name: "UK", image: "/uk.jpg" },
            { name: "USA", image: "/usa.jpg" },
            { name: "Dubai", image: "/dubai.jpg" },
            { name: "Taj", image: "/taj.jpg" },
          ].map((location, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity rounded-lg"></div>
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110"
              />
              <h4 className="absolute bottom-4 left-4 text-white font-bold bg-black bg-opacity-60 px-4 py-2 rounded-lg">
                {location.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      <section id="why_us" className="bg-gray-100 py-16">
        <h3 className="text-center text-3xl font-bold mb-12">Why Choose Us?</h3>
        <div className="flex flex-wrap justify-center gap-12">
          {[
            {
              icon: <FaHouse className="text-blue-500 text-5xl" />,
              count: "2000+",
              label: "Properties Sold",
            },
            {
              icon: <FaRegBuilding className="text-blue-500 text-5xl" />,
              count: "1000+",
              label: "Custom Designs",
            },
            {
              icon: <VscSmiley className="text-blue-500 text-5xl" />,
              count: "5000+",
              label: "Happy Customers",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {stat.icon}
              <span className="text-4xl font-bold mt-4">{stat.count}</span>
              <span className="text-gray-600 mt-2 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:mr-20">
          <div className="relative w-full lg:w-[450px] h-[300px] rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/home.jpg"
              alt="Original Design"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Explore Different Design Styles
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Instantly visualize different styles with a single text prompt.
          </p>
          <ul className="space-y-4 text-xl font-medium text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Transition between design styles effortlessly
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Customize elements to create your ideal aesthetic
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Preview design changes instantly for informed decisions
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">

        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Ask, Learn and Design with Confidence
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Get expert guidance at your fingertips. Ask questions about materials, costs, and design options— receive informed responses to make confident design decisions.
          </p>

        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:mr-20">
          <div className="relative w-full lg:w-[450px] h-[300px] rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/home.png" 
              alt="Original Design"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

      </section>



      <footer className="bg-gray-100 py-8 px-10 lg:px-24 text-gray-800 rounded-t-lg">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          <div className="lg:w-1/4">
            <img
              src="/logo3.png" 
              alt="Natsons Logo"
              className="w-36 mb-4"
            />
            <p className="font-semibold mb-2">Find us here:</p>
            <div className="space-y-2">
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>
          </div>

          <div className="lg:w-1/4" >
            <p className="font-semibold mb-2">Important links:</p>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Contact us</li>
              <li>Services</li>
              <li>Login/Sign up</li>
            </ul>
          </div>

          <div className="lg:w-1/4">
            <p className="font-semibold mb-2">Talk with us:</p>
            <div className="space-y-2">
              <p>+91-8168355464</p>
              <p>Natsons@gmail.com</p>
            </div>
          </div>

          <div className="lg:w-1/4">
            <p className="font-semibold mb-2">Meet us:</p>
            <div className="space-y-1">
              <p>SRM University Delhi-NCR, Sonipat</p>
              <p>PIN-131002</p>
              <p>GST: ********</p>
              <p>CIN: ********</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="font-bold">A Real Estate Startup By College Champs</h2>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default FrontPage;
