import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
