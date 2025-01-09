
import React, { createContext, useContext, useState } from "react";



interface Car {

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

}



interface FavoritesContextProps {

  favorites: Car[];

  addFavorite: (car: Car) => void;

  removeFavorite: (id: string) => void;

  showToast: (message: string) => void;

}



const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);



import { ReactNode } from "react";

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {

  const [favorites, setFavorites] = useState<Car[]>([]);



  const addFavorite = (car: Car) => {

    setFavorites((prevFavorites) => [...prevFavorites, car]);

  };



  const removeFavorite = (id: string) => {

    setFavorites((prevFavorites) => prevFavorites.filter((car) => car.id !== id));

  };



  const showToast = (message: string) => {

    alert(message);

  };



  return (

    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, showToast }}>

      {children}

    </FavoritesContext.Provider>

  );

};



export const useFavorites = () => {

  const context = useContext(FavoritesContext)

  return context;

};
