import React, { useState } from 'react';
import { generateFloorPlan } from '../services/generatePlansServices';

const Planview = () => {
  const [area, setArea] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [kitchen, setKitchen] = useState(0);
  const [hall, setHall] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [floors, setFloors] = useState(0);
  const [parking, setParking] = useState(0);
  const [floorPlans, setFloorPlans] = useState([]);
  const [imageLinks, setImageLinks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAreaChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value));
    setArea(value);
  };

  const handleGeneratePlan = () => {
    const items = {
      plot_area: area,
      num_floors: floors,
      num_bedrooms: rooms,
      num_bathrooms: bathrooms
    };

    generateFloorPlan(items).then((response) => {
      setFloorPlans(response.floor_plans || []);
      setImageLinks(response.image_links || []);
      setCurrentIndex(0);
    }).catch((error) => {
      console.error(error);
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? floorPlans.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === floorPlans.length - 1 ? 0 : prevIndex + 1));
  };

  const currentPlan = floorPlans[currentIndex] || {};
  const currentCostEstimate = currentPlan.cost_estimate || {};
  const currentRoomPlan = currentPlan.plan || {};
  const currentImage = imageLinks[currentIndex] || '';

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left Panel */}
        <div className="bg-white rounded-xl shadow-md w-full lg:w-96 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Floor Plan Details</h2>

          <div className="space-y-5">
            {/* Area Input */}
            <div className="flex justify-between items-center">
              <label className="text-gray-700 font-medium">Area (sq.ft)</label>
              <input
                type="number"
                value={area}
                onChange={handleAreaChange}
                className="w-24 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dynamic Increment Fields */}
            {[
              { label: 'Rooms', value: rooms, setValue: setRooms },
              { label: 'Kitchen', value: kitchen, setValue: setKitchen },
              { label: 'Hall', value: hall, setValue: setHall },
              { label: 'Bathrooms', value: bathrooms, setValue: setBathrooms },
              { label: 'Floors', value: floors, setValue: setFloors },
              { label: 'Parking', value: parking, setValue: setParking },
            ].map(({ label, value, setValue }) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">{label}</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setValue(Math.max(0, value - 1))}
                    className="text-xl font-bold text-blue-600 border border-blue-500 rounded-full w-8 h-8 hover:bg-blue-100"
                  >−</button>
                  <span className="text-lg">{value}</span>
                  <button
                    onClick={() => setValue(value + 1)}
                    className="text-xl font-bold text-blue-600 border border-blue-500 rounded-full w-8 h-8 hover:bg-blue-100"
                  >+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleGeneratePlan}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Generate Floor Plan
            </button>
          </div>
        </div>

        {/* Right Panel */}
        {floorPlans.length > 0 && (
          <div className="flex-1 bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Generated Floor Plan</h3>

            <div className="flex flex-col items-center gap-6">
              <img
                src={currentImage}
                alt={`Floor Plan ${currentIndex + 1}`}
                className="w-full max-w-md rounded-lg shadow"
              />

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded"
                >
                  Next
                </button>
              </div>

              <div className="w-full max-w-lg mt-6 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Cost Estimate</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {Object.entries(currentCostEstimate).map(([key, value]) => (
                      <li key={key}>
                        {key}: {value.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">Room Sizes (sq.ft)</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {Object.entries(currentRoomPlan).map(([room, size]) => (
                      <li key={room}>
                        {room}: {size.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planview;
