import React from 'react';

const LocationsSection = () => {
  const locations = [
    { name: "UK", image: "/uk.jpg" },
    { name: "USA", image: "/usa.jpg" },
    { name: "Dubai", image: "/dubai.jpg" },
    { name: "Taj", image: "/taj.jpg" },
  ];

  return (
    <section id="availability" className="mt-20 px-10 md:px-20 cursor-pointer">
      <h3 className="text-center text-3xl font-bold mb-12">Available Locations</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {locations.map((location, index) => (
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
  );
};

export default LocationsSection;
