import React from 'react';
import { FaHome, FaRegBuilding } from "react-icons/fa";
import { VscSmiley } from "react-icons/vsc";

const WhyChooseUsSection = () => {
  const stats = [
    {
      icon: <FaHome className="text-blue-500 text-5xl" />,
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
  ];

  return (
    <section id="why_us" className="bg-gray-100 py-16">
      <h3 className="text-center text-3xl font-bold mb-12">Why Choose Us?</h3>
      <div className="flex flex-wrap justify-center gap-12">
        {stats.map((stat, index) => (
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
  );
};

export default WhyChooseUsSection;
