"use client"
import { LuArrowDownUp } from "react-icons/lu";
import FilterSidebar from "../Components/FilterSideBar";
import CarCatlog from "../Components/CarCatlog"


const Category: React.FC = () => {

  return (
    <div className="container mx-auto px-1 py-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <FilterSidebar />
        <div className="flex-1 space-y-2">
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
        
            <CarCatlog/>
          </div>
    </div>
    </div>
  );
};

export default Category;
