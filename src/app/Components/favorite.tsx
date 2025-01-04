import React from "react";
import { useFavorites } from "../HomePage/FavoritesContext"; // Use the Favorites context
import Image from "next/image";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((car) => (
          <div key={car.id} className="border p-4 rounded shadow-lg">
            <Image src={car.image} alt={car.name} width={304} height={170} />
            <h2 className="font-bold">{car.name}</h2>
            <p className="text-gray-500">{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
