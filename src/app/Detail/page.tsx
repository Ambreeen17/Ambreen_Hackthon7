"use client"
import React from "react";
import FilterSidebar from "../Components/FilterSideBar";
import NissanCard from "../Components/NissanCard";
import Reviewsss from "../Components/Reviewsss";
import CarDetail from "../Components/CarDetail";
import CarCatlog from "../Components/CarCatlog";


const Home: React.FC = () => {
  
  return (
    <div className="container mx-auto px-1 py-4">
    <div className="flex flex-col lg:flex-row gap-4">

        {/* FilterSidebar */}
  
      

            <FilterSidebar />
            <div className="flex-auto   space-y-6 ">
            
    
          
        </div>
      
        {/* CarDetails */}
        <div className="flex-auto  space-y-6">
          <CarDetail />
        </div>

        {/* NissanCard */}
        <div className="w-auto">
          <NissanCard />
        </div>
      </div>
      <div>
<div className="container mx-auto px-3 py-3  ">
<Reviewsss/>

    <CarCatlog/>
  </div>
    </div>
  </div>
  );
};

export default Home;
