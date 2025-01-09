"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart, FaGasPump, FaCogs, FaUsers } from "react-icons/fa";

interface CarCardProps {
  id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seats: string;
  price: string;
  originalPrice?: string;
  buttonText: string;
  onButtonClick?: () => void;
  onFavoriteToggle?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  seats,
  price,
  originalPrice,
  buttonText,
  onButtonClick,
  onFavoriteToggle,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
    if (onFavoriteToggle) {
      onFavoriteToggle();
    }
  };

  return (
    <div className="w-[304px] h-[388px] bg-white flex items-center m-2 justify-center">
      <div className="justify-items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold">{name}</h2>
              <p className="text-sm text-gray-500">{type}</p>
            </div>
            <div
              onClick={handleFavoriteToggle}
              className="cursor-pointer"
              title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
              {isFavorite ? (
                <FaHeart className="text-red-500 text-xl" />
              ) : (
                <FaRegHeart className="text-black text-xl" />
              )}
            </div>
          </div>
          <div className="my-4">
            <Image
              className="w-full"
              src={image}
              alt={name}
              width={304}
              height={170}
            />
          </div>
          <div className="flex justify-around text-sm text-gray-500">
            <div className="flex items-center">
              <FaGasPump />
              {fuelCapacity}
            </div>
            <div className="flex items-center">
              <FaCogs />
              {transmission}
            </div>
            <div className="flex items-center">
              <FaUsers />
              {seats} People
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-blue-500">{price}</p>
                {originalPrice && (
                  <p className="text-sm line-through text-gray-400">
                    {originalPrice}
                  </p>
                )}
              </div>
              <button
                onClick={onButtonClick}
                className="w-[120px] h-[44px] bg-blue-500 hover:bg-blue-700 text-white text-sm px-4 rounded"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
