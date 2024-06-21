import React from "react";

const Card = ({ imgSrc, title, description }) => {
  return (
    <div className="w-full md:w-1/3 p-2">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 truncate">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
