/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const MapContainer: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="font-bold text-gray-700 mb-4">Details Rental</h3>
      <div className="w-full h-64 md:h-80 lg:h-[400px] rounded-lg ogject-cover overflow-hidden">
      <Image src="Map.png" alt="Map" width={700} height={700} />

    
      </div>
    </div>
  );
};

export default MapContainer;
