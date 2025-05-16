import React from 'react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
