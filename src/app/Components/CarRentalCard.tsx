import React, { useState } from "react";

const CarRentalCard: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState("/car-main.jpg");
  const [loading, setLoading] = useState(true); // Loading state for images

  const images = [
    "/car-main.jpg",
    "/car-interior-1.jpg",
    "/car-interior-2.jpg",
  ];

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false once image is loaded
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-10">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center">
        <div className="w-full mb-4">
          <img
            src={selectedImage}
            alt="Main Car"
            className="w-full h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            onLoad={handleImageLoad}
            aria-label="Main car image"
          />
          {loading && <div className="text-center text-gray-500">Loading...</div>} {/* Loading text */}
        </div>
        <div className="flex justify-center gap-4 sm:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="sm:w-16 sm:h-16 w-12 h-12"
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-300 ${
                  selectedImage === img ? "ring-2 ring-blue-500" : ""
                }`}
                aria-label={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 lg:pl-6 mt-6 lg:mt-0">
        <h2 className="text-2xl font-semibold text-gray-800">Nissan GT-R</h2>
        <p className="text-gray-600 mt-2">
          NISMO has become the embodiment of Nissan&apos;s outstanding performance,
          inspired by the most unforgiving proving ground, the &quot;race track.&quot;
        </p>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            <strong>Type Car:</strong> Sport
          </p>
          <p className="text-sm text-gray-600">
            <strong>Steering:</strong> Manual
          </p>
          <p className="text-sm text-gray-600">
            <strong>Capacity:</strong> 2 Person
          </p>
          <p className="text-sm text-gray-600">
            <strong>Gasoline:</strong> 70L
          </p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-xl font-bold text-blue-600">$80.00/day</p>
            <p className="text-sm text-gray-500 line-through">$100.00</p>
          </div>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
            aria-label="Rent this car"
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarRentalCard;
