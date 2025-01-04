"use client"

import React, { useState } from "react";

const FilterComponent: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["Sport", "SUV"]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>(["2 Person", "8 or More"]);
  const [maxPrice, setMaxPrice] = useState<number>(100);

  const types = [
    { label: "Sport", count: 10 },
    { label: "SUV", count: 12 },
    { label: "MPV", count: 16 },
    { label: "Sedan", count: 20 },
    { label: "Coupe", count: 14 },
    { label: "Hatchback", count: 14 },
  ];

  const capacities = [
    { label: "2 Person", count: 10 },
    { label: "4 Person", count: 14 },
    { label: "6 Person", count: 12 },
    { label: "8 or More", count: 16 },
  ];

  const toggleSelection = (value: string, selected: string[], setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="p-3 bg-gray-50 min-h-screen ">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6 tracking-wide">MORENT</h1>
      <div className="space-y-8">
        {/* Type Filter */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-800">Type</h2>
          <div className="grid grid-row gap-4">
            {types.map((type) => (
              <label
                key={type.label}
                className={`flex items-center p-3 rounded-lg shadow-sm border cursor-pointer ${
                  selectedTypes.includes(type.label)
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                } hover:shadow-md transition-all`}
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type.label)}
                  onChange={() => toggleSelection(type.label, selectedTypes, setSelectedTypes)}
                  className="form-checkbox text-blue-600 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-3 text-gray-700 font-medium">{type.label} ({type.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Capacity Filter */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-800">Capacity</h2>
          <div className="grid grid-row gap-4">
            {capacities.map((capacity) => (
              <label
                key={capacity.label}
                className={`flex items-center p-3 rounded-lg shadow-sm border cursor-pointer ${
                  selectedCapacities.includes(capacity.label)
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white border-gray-300"
                } hover:shadow-md transition-all`}
              >
                <input
                  type="checkbox"
                  checked={selectedCapacities.includes(capacity.label)}
                  onChange={() => toggleSelection(capacity.label, selectedCapacities, setSelectedCapacities)}
                  className="form-checkbox text-blue-600 focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-3 text-gray-700 font-medium">{capacity.label} ({capacity.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-gray-800">Price</h2>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min={0}
              max={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <span className="text-blue font-medium">Max. ${maxPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
