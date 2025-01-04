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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cars.map((car, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border rounded-lg"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-24 h-16 object-cover rounded"
            />
            <div>
              <p className="font-medium">{car.name}</p>
              <p className="text-blue-500">${car.price}/day</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
