import React from "react";
import { useFavorites } from "./FavoritesContext"; // Use the Favorites context
import Image from "next/image";

const FavoritesPage: React.FC = () => {
  const favoritesContext = useFavorites();
  const favorites = favoritesContext ? favoritesContext.favorites : [];

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Favorites</h1>
        <p>No favorite cars added yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((car) => (
          <div key={car.id} className="border p-4 rounded shadow-lg">
            <div className="relative w-full h-40 mb-4">
              <Image
                src={car.image || "/fallback-image.jpg"} // Fallback image if the URL is missing or broken
                alt={car.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")} // Change image on error
              />
            </div>
            <h2 className="font-bold">{car.name}</h2>
            <p className="text-gray-500">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
