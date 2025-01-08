/* eslint-disable @next/next/no-img-element */
import React from "react";

const MapContainer: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="font-bold text-gray-700 mb-4">Details Rental</h3>
      <div className="w-full h-64 md:h-80 lg:h-[400px] rounded-lg overflow-hidden">
        <img
          src="Maps.png" // Replace with the actual map image
          alt="Map showing rental details and location"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MapContainer;
