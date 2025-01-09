/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const DetailsRental: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-14 shadow rounded-lg">
      <h3 className="font-bold text-gray-700 mb-4 text-xl">Details Rental</h3>
      <div className="flex items-center mb-4">
        <Image
          src="Look.png" // Nissan GT-R image placeholder
          alt="Nissan GT-R"
          className="w-24 h-14 rounded-lg mr-4 object-cover"
          aria-label="Image of Nissan GT-R"
        />
        <div>
          <h4 className="font-semibold text-gray-700">Nissan GT-R</h4>
          <p className="text-gray-500 text-sm">Sport Car</p>
        </div>
      </div>
      <div className="text-sm text-gray-600 space-y-4">
        <div className="flex justify-between text-sm font-medium">
          <span>Pick-Up</span>
          <span>Drop-Off</span>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Location: NKA Semarang</p>
            <p>Date: 20 July 2022</p>
            <p>Time: 07:00</p>
          </div>
          <div>
            <p>Location: NKA Semarang</p>
            <p>Date: 21 July 2022</p>
            <p>Time: 07:00</p>
          </div>
        </div>
      </div>
      <div className="mt-4 font-bold text-gray-700">
        Total Rental Price: <span className="text-lg text-blue-600">$80.00</span>
      </div>
    </div>
  );
};

export default DetailsRental;
