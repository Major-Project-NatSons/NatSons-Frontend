import React, { useEffect } from 'react';
import HeroSection from './FrontPage/HeroSection';
import CategoriesSection from './FrontPage/CategoriesSection';
import LocationsSection from './FrontPage/LocationsSection';
import WhyChooseUsSection from './FrontPage/WhyChooseUsSection';
import FeaturesSection from './FrontPage/FeaturesSection';
import Footer from './FrontPage/Footer';

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
        <HeroSection />
        <CategoriesSection />
        <LocationsSection />
        <WhyChooseUsSection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default FrontPage;
