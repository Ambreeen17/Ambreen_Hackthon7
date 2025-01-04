import React from "react";
import Image from "next/image";
import { LuArrowDownUp } from "react-icons/lu"
const Hero = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center item-justify-center">
      <section className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Card */}
          <div
            
              className="bg-blue-100 p-6 rounded-lg shadow-lg w-[640px] h-[360px]"
              style={{
                backgroundImage: "url('/b2.jpg')", // Replace with your image path
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
                >
        
            <h2 className="text-3xl w-[272px] font-bold text-[#FFFFFF] mb-2">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/image 7.png"
              alt="Car"
              width={340}
              height={108}
              className="mt-4 ml-40 object-cover"
            />
          </div>

          {/* Right Card */}
          <div
        
            
            className="bg-blue-100 p-6 rounded-lg shadow-lg w-[640px] h-[360px]"
            style={{
              backgroundImage: "url('/b1.jpg')", // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
              
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/image 8.png"
              alt="Car"
              width={340}
              height={108}
              className="mt-4 ml-40 object-cover"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              
              <div>
  <label className="block text-sm mb-1">Locations</label>
  <select className="w-full border rounded-md p-2">
    <option value="">Select your city</option>
    <option value="newyork">New York</option>
    <option value="miami">Miami</option>
    <option value="newjersey">New Jersey</option>
    <option value="florida">Florida</option>
    <option value="houston">Houstan</option>
  </select>
</div>

              <div>
                <label className="block text-sm mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 square-full shadow-md hover:bg-blue-600">
            <LuArrowDownUp />
              
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
              <div>
  <label className="block text-sm mb-1">Locations</label>
  <select className="w-full border rounded-md p-2">
  <option value="">Select your city</option>
    <option value="newyork">New York</option>
    <option value="miami">Miami</option>
    <option value="newjersey">New Jersey</option>
    <option value="florida">Florida</option>
    <option value="houston">Houstan</option>
  </select>

</div>

              <div>
                <label className="block text-sm mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
