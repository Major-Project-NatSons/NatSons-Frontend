import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Plan = () => {
  useEffect(() => {
    const spots = document.querySelectorAll('.moving-spot');
    spots.forEach((spot) => {
      const delay = Math.random() * 5 + 's'; 
      const duration = Math.random() * 20 + 15 + 's'; 
      spot.style.animationDelay = delay;
      spot.style.animationDuration = duration;
    });
  }, []);

  const navigate = useNavigate(); 

  const planview = () => {
    navigate('/planview'); 
  };

  return (
    <div className='bg-white w-full h-full relative overflow-hidden'>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="moving-spot bg-yellow-600 opacity-50 w-48 h-48 rounded-full blur-xl absolute top-20 left-10"></div>
        <div className="moving-spot bg-gradient-to-r from-blue-500 to-indigo-600 opacity-40 w-40 h-40 rounded-full blur-xl absolute top-40 right-20"></div>
        <div className="moving-spot bg-gradient-to-r from-pink-300 to-purple-600 opacity-30 w-48 h-48 rounded-full blur-xl absolute bottom-40 left-24"></div>
        <div className="moving-spot bg-gradient-to-r from-green-500 to-yellow-500 opacity-25 w-40 h-40 rounded-full blur-xl absolute bottom-10 right-10"></div>
      </div>

      <div className="flex flex-col mt-20 px-6 items-center relative z-10">
        <span className='w-3 h-5 rounded-full'></span>
        <span className="font-serif text-6xl font-bold items-center">Generative Design for</span>
        <span className="font-edu text-6xl font-semibold mt-2 items-center">Residential Planning</span>
        <span className="font-mono text-lg mt-10 text-gray-700 text-center">
          Democratizing architecture with generative AI— Maket allows anyone to design & plan their new build or 
          <br />
          renovation project in a few simple steps.
        </span>

        <button onClick={planview} className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-600 to-black text-white hover:from-yellow-500 hover:to-gray-800 rounded-full">
          GET STARTED - IT'S FREE
        </button>
      </div>

      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:mr-20">
          <div className="relative w-full lg  overflow-hidden shadow-xl">
            <img
              src="/plan.png"
              alt="Original Design"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Residential Plan Generator (BETA)
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
          Create customized residential architectural plans instantly based on programming needs.
          </p>
          <ul className="space-y-4 text-xl font-medium text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Specify room dimension & adjacency constraints
              </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Generate design options instantly
              </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Export designs to .DXF
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
          <div className="relative w-full overflow-hidden shadow-xl">
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

          <div className="lg:w-1/4">
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
  );
};

export default Plan;
