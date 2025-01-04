/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const CarDetails: React.FC = () => {
  // Car images and active image state
  const [images] = useState(["View.png","2.png","3 (3).png"])
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <div className="container mx-auto px-3 py-3 ">
        <div className="flex flex-col gap-2">
          {/* Main Image */}
          <div className="w-[700px] h-[550] mb-5 mt-2">
            <img
              src={activeImage} // Dynamically display the selected image
              alt="Car"
              className="w-full h-[300px] object-cover-centre rounded-lg shadow-lg"
            />
          </div>

          {/* Thumbnails Below Main Image */}
          <div className="flex justify-center gap-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-50 h-40 pr-2 rounded-lg cursor-pointer border-2 transition-transform duration-300 ${
                  activeImage === img
                    ? "border-blue-500 scale-100"
                    : "border-transparent hover:scale-105"
                }`}
                onClick={() => setActiveImage(img)} // Clicking a thumbnail updates the main image
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
