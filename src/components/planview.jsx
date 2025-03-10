import React, { useState } from 'react';

const Planview = () => {
  const [area, setArea] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [kitchen, setKitchen] = useState(0);
  const [hall, setHall] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [floors, setFloors] = useState(0);
  const [parking, setParking] = useState(0);

  const handleAreaChange = (e) => {
    const value = Math.max(0, parseInt(e.target.value)); 
    setArea(value);
  };

  const handleGenerateClick = () => {
    alert("Generating floor plan with the provided details!");
  };

  return (
    <div className="flex flex-col h-fit bg-gray-100">
    

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 bg-white p-4 relative mr-1 ">
          <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        </div>

        <div className="w-96 bg-white shadow-lg p-6 ">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Floor Plan Details</h2>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-gray-700 text-lg">Area (sq.ft)</label>
              <input
                type="number"
                value={area}
                onChange={handleAreaChange}
                className="w-24 px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              />
            </div>

            {[
              { label: 'Rooms', value: rooms, setValue: setRooms },
              { label: 'Kitchen', value: kitchen, setValue: setKitchen },
              { label: 'Hall', value: hall, setValue: setHall },
              { label: 'Bathrooms', value: bathrooms, setValue: setBathrooms },
              { label: 'Floors', value: floors, setValue: setFloors },
              { label: 'Parking', value: parking, setValue: setParking },
            ].map(({ label, value, setValue }) => (
              <div key={label} className="flex justify-between items-center">
                <label className="text-gray-700 text-lg">{label}</label>
                <div className="flex gap-4 items-center">
                  <button
                    className="text-blue-500 hover:text-blue-700 p-2 rounded-full border border-blue-500 transition duration-200 ease-in-out"
                    onClick={() => setValue(Math.max(0, value - 1))}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{value}</span>
                  <button
                    className="text-blue-500 hover:text-blue-700 p-2 rounded-full border border-blue-500 transition duration-200 ease-in-out"
                    onClick={() => setValue(value + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGenerateClick}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Generate Floor Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planview;
