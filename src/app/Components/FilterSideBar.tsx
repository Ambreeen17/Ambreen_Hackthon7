import React, { useState } from "react";

const FilterSidebar: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [price, setPrice] = useState(100);

  const toggleSelection = (item: string, list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="w-full lg:w-1/6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter</h2>
      <div className="space-y-6">
        {/* Car Type */}
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Type</h3>
          <ul className="space-y-2">
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
              <li
                key={type}
                className={`flex items-center ${
                  selectedTypes.includes(type) ? "text-blue-500 font-semibold" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
                  className="mr-2 rounded text-blue-500"
                />
                <span>{type}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capacity */}
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Capacity</h3>
          <ul className="space-y-2">
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
              <li
                key={capacity}
                className={`flex items-center ${
                  selectedCapacities.includes(capacity) ? "text-blue-500 font-semibold" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedCapacities.includes(capacity)}
                  onChange={() =>
                    toggleSelection(capacity, selectedCapacities, setSelectedCapacities)
                  }
                  className="mr-2 rounded text-blue-500"
                />
                <span>{capacity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2">Max: ${price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
