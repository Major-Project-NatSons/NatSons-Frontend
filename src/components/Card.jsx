import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { MdBathroom } from "react-icons/md";

const Card = ({ image, title, description, price, bed, hall, bathroom, shadowColor, buttonColor }) => {
  return (
    <div className={`flex flex-col items-center bg-white rounded-3xl cursor-pointer shadow-md ${shadowColor}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-3xl"
      />
      <div className="w-full px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <span className="text-sm text-gray-600">{price}</span>
          </div>
          <CiHeart size={22} className="text-red-500 cursor-pointer" />
        </div>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <hr className="mb-4" />
        <div className="flex justify-between text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <FaBed size={16} />
            <span>{bed} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <GiSoccerField size={16} />
            <span>{hall} Hall</span>
          </div>
          <div className="flex items-center gap-2">
            <MdBathroom size={16} />
            <span>{bathroom} Bath</span>
          </div>
        </div>
        <hr className="my-4" />
        <button className={`w-full py-2 text-white rounded-lg ${buttonColor}`}>
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
