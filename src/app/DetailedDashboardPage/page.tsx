"use client"
import React from "react";
import MapContainer from "../Components/MapContainer";
import TopCarRental from "../Components/TopCarRental";

import RecentTransactions from "../Components/RecentTransaction";
import DetailsRental from "../Components/DetailsRental";
import Sidebar from "@/app/SideBar";


const DetailedDashboardPage: React.FC = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 p-6 w-auto h-500">
        {/* Map and Top Car Rental */}
        <div className="lg:col-span-1">
          <MapContainer />
        </div>
        <div className="lg:col-span-1">
          <TopCarRental />
        </div>

        {/* Details Rental and Recent Transactions */}
        <div className="lg:col-span-1">
          <DetailsRental />
        </div>
        <div className="lg:col-span-1">
          <RecentTransactions />
        </div>
      </main>
    </div>
  );
};

export default DetailedDashboardPage;
