/* eslint-disable @next/next/no-img-element */
// components/CarList.tsx
import React from "react";

interface Car {
  name: string;
  price: number;
  image: string;
}

const CarList: React.FC<{ title: string; cars: Car[] }> = ({ title, cars }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-32 h-24 object-cover rounded"
            />
            <div className="text-center">
              <p className="font-medium text-xl">{car.name}</p>
              <p className="text-blue-500">${car.price}/day</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
