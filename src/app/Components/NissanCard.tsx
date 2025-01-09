import React, { useState } from "react";

const NissanCard: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 text-gray-800">
      {/* Title Section */}
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold">Nissan GT-R</h2>
        <button
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <svg
              className="w-6 h-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-400 hover:text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8.5C3 5.42 5.42 3 8.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35l-1.45-1.32C5.4 15.36 3 12.28 3 8.5z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Rating Section */}
      <div className="flex items-center space-x-2 mt-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.678 1.432 8.276L12 18.896l-7.431 4.364 1.432-8.276-6.001-5.678 8.332-1.151z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-500 text-sm">440+ Reviewer</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-4">
        NISMO has become the embodiment of Nissan&apos;s outstanding performance,
        inspired by the most unforgiving proving ground, the &quot;race track&quot;.
      </p>

      {/* Specifications */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-500">
        <div>
          <span className="font-semibold text-gray-700">Type Car</span>
          <p>Sport</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Capacity</span>
          <p>2 Person</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Steering</span>
          <p>Manual</p>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Gasoline</span>
          <p>70L</p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex justify-between items-center mt-6">
        <div>
          <span className="text-2xl font-bold">$80.00</span>
          <span className="text-gray-400 text-sm line-through ml-2">
            $100.00
          </span>
          <span className="text-gray-500 text-sm">/ days</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default NissanCard;
