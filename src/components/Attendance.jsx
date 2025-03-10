import React from 'react';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const navigate = useNavigate();

  const handleGoAheadClick = () => {
    navigate('/attendance-payment'); 
  };

  return (
    <div className="bg-white w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="moving-spot bg-yellow-600 opacity-50 w-48 h-48 rounded-full blur-xl absolute top-20 left-10"></div>
        <div className="moving-spot bg-gradient-to-r from-blue-500 to-indigo-600 opacity-40 w-40 h-40 rounded-full blur-xl absolute top-40 right-20"></div>
        <div className="moving-spot bg-gradient-to-r from-pink-300 to-purple-600 opacity-30 w-48 h-48 rounded-full blur-xl absolute bottom-40 left-24"></div>
        <div className="moving-spot bg-gradient-to-r from-green-500 to-yellow-500 opacity-25 w-40 h-40 rounded-full blur-xl absolute bottom-10 right-10"></div>
      </div>

      <div className="flex flex-col mt-20 px-6 items-center relative z-10">
        <span className="w-3 h-5 rounded-full"></span>
        <span className="font-serif text-6xl font-bold items-center">Attendance Portal</span>
        <span className="font-edu text-6xl font-semibold mt-10 items-center">Mark and Record Daily Attendance</span>
        <span className="font-mono text-lg mt-10 text-gray-700 text-center block max-w-4xl mx-auto">
          Track workers' attendance efficiently with live updates and easy records management. Manage workers and
          generate monthly reports with simple steps.
        </span>
        <button 
          onClick={handleGoAheadClick} 
          className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-600 to-black text-white hover:from-yellow-500 hover:to-gray-800 rounded-full">
          Go Ahead - what are you waiting for !
        </button>
      </div>

      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center mt-10">
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Key Features of the Attendance Portal
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Efficiently manage workers' attendance with the following features:
          </p>
          <ul className="space-y-4 text-xl font-medium text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Mark daily attendance with ease
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Live attendance updates for real-time tracking
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Download monthly attendance reports in various formats
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Filter workers based on specific criteria
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              User authentication and secure data management
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full lg:w-3/4 lg:ml-16">
            <img
              src="/2.png"
              alt="Attendance Portal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

     
      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0 lg:ml-20">
          <div className="relative w-full lg:w-3/4">
            <img
              src="/3.png"
              alt="Attendance Report"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Real-Time Attendance Reporting
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            The portal provides real-time updates for worker attendance, allowing administrators to monitor and act upon discrepancies instantly. It also supports easy export options for detailed reporting, helping you make data-driven decisions for your workforce.
          </p>
          <ul className="space-y-4 text-xl font-medium text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Real-time attendance updates
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Export reports in multiple formats
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Easily track worker attendance trends
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 text-2xl mr-3">✓</span>
              Visualize data with interactive graphs
            </li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-24 py-16 bg-white flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight font-sans">
            Easy to Use and Efficient
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Our attendance portal is designed to be simple to use, with a clean and intuitive interface that makes it easy to mark and record attendance daily. Additionally, you can download the reports for monthly summaries and analyze worker attendance trends.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <div className="relative w-full lg:w-3/4 lg:ml-16">
            <img
              src="/1.png"
              alt="Dashboard Preview"
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
              <li>Terms and Conditions</li>
            </ul>
          </div>

          <div className="lg:w-1/4">
            <p className="font-semibold mb-2">Contact:</p>
            <p>+91 9876543210</p>
            <p>natsons@domain.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Attendance;
