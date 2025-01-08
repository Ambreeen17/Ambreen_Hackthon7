"use client";
import React from "react";
import CarCard from "../Components/CarCard";
import Image from "next/image";

export default function Popular() {
    return (
        <div className="w-full bg-[#E0E9F4]">
            <div className="p-11">
                <p className="text-xl font-bold">Popular Cars</p>
            </div>
            <div className="w-full h-auto bg-[#E0E9F4] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                <CarCard 
                    image="/car1.png" 
                    name="Nissan GT-R" 
                    type="Sport" 
                    fuelCapacity="80L" 
                    transmission="Manual" 
                    seats="2" 
                    price="$80.00" 
                    originalPrice="$100.00" 
                    buttonText="Rent Now" 
                    onButtonClick={() => alert('Car rented!')} 
                />
                <CarCard 
                    image="/car2.png" 
                    name="Toyota Supra" 
                    type="Sport" 
                    fuelCapacity="70L" 
                    transmission="Automatic" 
                    seats="2" 
                    price="$75.00" 
                    originalPrice="$95.00" 
                    buttonText="Rent Now" 
                    onButtonClick={() => alert('Car rented!')} 
                />
                <CarCard 
                    image="/car3.png" 
                    name="BMW M3" 
                    type="Sedan" 
                    fuelCapacity="65L" 
                    transmission="Manual" 
                    seats="4" 
                    price="$90.00" 
                    originalPrice="$110.00" 
                    buttonText="Rent Now" 
                    onButtonClick={() => alert('Car rented!')} 
                />
                <CarCard 
                    image="/car4.png" 
                    name="Porsche 911"
                    type="Luxury"
                    fuelCapacity="75L"
                    transmission="Automatic"
                    seats="2"
                    price="$120.00"
                    originalPrice="$140.00"
                    buttonText="Rent Now"
                    onButtonClick={() => alert('Car rented!')} 
                />
            </div>
        </div>
    );
}
