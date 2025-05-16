import React from 'react';
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineWarehouse } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";
import { PiBuildingApartment } from "react-icons/pi";

const CategoriesSection = () => {
  const categories = [
    { icon: <FaRegBuilding />, label: "Building", size: "sm" },
    { icon: <MdOutlineWarehouse />, label: "Warehouse", size: "sm" },
    { icon: <GiIsland />, label: "Land", size: "sm" },
    { icon: <FaHouse />, label: "House", size: "sm" },
    { icon: <PiBuildingApartment />, label: "Apartment", size: "sm" },
  ];

  return (
    <section id="categories" className="flex flex-wrap justify-evenly mt-20 gap-10 px-10 md:px-20 py-8 bg-light-bg cursor-pointer">
      {categories.map((category, index) => (
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
  );
};

export default CategoriesSection;
