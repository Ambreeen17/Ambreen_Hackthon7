/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';

const MapContainer: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="font-bold text-gray-700 mb-4">Details Rental</h3>
        <img
          src="Top 5 Car Rental.png" // Replace with the actual map image
          alt="TopCar"
          className="w-full h-full object-cover"
        />
    
      </div>
  
  );
};

export default MapContainer;
