"use client";
import React, { useState } from "react";
import CarCard from "./CarCard";

const Catlog: React.FC = () => {
  // Editable array of car details
  const allCars = [
    { image: "/Car 5.png", name: "Nissan GT-R", type: "Sport", fuelCapacity: "80L", transmission: "Manual", seats: "2", price: "$80.00", originalPrice: "$100.00" },
    { image: "/car6.png", name: "Toyota Supra", type: "Sport", fuelCapacity: "70L", transmission: "Automatic", seats: "2", price: "$75.00", originalPrice: "$95.00" },
    { image: "/car 8.png", name: "Audi R8", type: "Luxury", fuelCapacity: "75L", transmission: "Automatic", seats: "2", price: "$120.00", originalPrice: "$140.00" },
    { image: "/car9.png", name: "Ford Mustang", type: "Muscle", fuelCapacity: "60L", transmission: "Manual", seats: "4", price: "$85.00", originalPrice: "$105.00" },
    { image: "/car10.png", name: "Chevrolet Camaro", type: "Muscle", fuelCapacity: "65L", transmission: "Automatic", seats: "4", price: "$88.00", originalPrice: "$108.00" },
    { image: "/car11.png", name: "Porsche 911", type: "Sport", fuelCapacity: "70L", transmission: "Manual", seats: "2", price: "$130.00", originalPrice: "$150.00" },
    { image: "/car12.png", name: "Lamborghini Huracan", type: "Luxury", fuelCapacity: "80L", transmission: "Automatic", seats: "2", price: "$200.00", originalPrice: "$250.00" },
    { image: "/car11.png", name: "Tesla Model S", type: "Electric", fuelCapacity: "100L", transmission: "Automatic", seats: "5", price: "$150.00", originalPrice: "$170.00" },
    // Add more cars here...
  ];

  const [visibleCars, setVisibleCars] = useState(allCars.slice(0, 8)); // Show first 8 cars initially
  const [seeMoreCount, setSeeMoreCount] = useState(0); // Track how many times "See More" is clicked

  // Function to load more cars
  const handleSeeMore = () => {
    const nextCount = seeMoreCount + 1;
    if (nextCount === 1) {
      setVisibleCars(allCars.slice(0, 16)); // Show first 16 cars
    } else if (nextCount === 2) {
      setVisibleCars(allCars.slice(0, 20)); // Show first 20 cars (add 4 more)
    }
    setSeeMoreCount(nextCount);
  };

  // Function to show less cars
  const handleSeeLess = () => {
    setVisibleCars(allCars.slice(0, 8)); // Reset to first 8 cars
    setSeeMoreCount(0); // Reset the click count
  };

  return (
    <div className="w-full bg-[#E0E9F4]">
      <div className="p-11">
        {/* Add any header or title */}
      </div>
      <div className="w-full h-auto bg-[#E0E9F4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
        {visibleCars.map((car, index) => (
          <CarCard
            key={index}
            image={car.image} // Image path
            name={car.name} // Car name
            type={car.type} // Car type (Sport, Sedan, etc.)
            fuelCapacity={car.fuelCapacity} // Fuel capacity
            transmission={car.transmission} // Transmission type (Manual, Automatic)
            seats={car.seats} // Number of seats
            price={car.price} // Rent price
            originalPrice={car.originalPrice} // Original price
            buttonText="Rent Now"
            onButtonClick={() => alert(`${car.name} rented!`)} id={""}          />
        ))}
      </div>
      <div className="flex justify-center py-6">
        {seeMoreCount < 2 ? (
          <button
            onClick={handleSeeMore}
            className="text-white bg-indigo-500 px-6 py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            See More
          </button>
        ) : (
          <button
            onClick={handleSeeLess}
            className="text-white bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Catlog;
