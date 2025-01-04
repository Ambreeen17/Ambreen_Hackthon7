"use client"
import React, { useState } from "react";
import { FaBars, FaHome, FaTimes } from "react-icons/fa";
import { FaHeart, FaBell, FaSearch, FaCog } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between">
      {/* Logo and Search Bar Container */}
      <div className="flex items-center space-x-4 lg:space-x-20 w-full lg:w-auto">
        {/* Logo */}
        <Image src="/Logo.png" alt="Logo" width={80} height={80} />
        

        {/* Search Bar */}
        <div className="relative w-full lg:w-[492px] h-[44px] mt-2 lg:mt-0">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ borderRadius: "70px" }}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>
        </div>
      </div>

      {/* Original Icons (Visible on Large Screens) */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-4">
        <Link href="/">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <span className="text-lg md:text-xl text-gray-600 cursor-pointer">
              <FaHome />
            </span>
          </div>
        </Link>
      
        <Link href="/Category">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <span className="text-lg md:text-xl text-gray-600 cursor-pointer">
              <FaHeart />
            </span>
          </div>
        </Link>
        <Link href="/Detail">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <div className="text-lg md:text-xl text-gray-600 cursor-pointer">
              <FaBell />
            </div>
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/PaymentPage">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <div className="text-lg md:text-xl text-gray-600 cursor-pointer">
              <FaCog />
            </div>
          </div>
        </Link>
        <Link href="/DetailedDashboardPage">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profile.jpg" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>

      {/* Hamburger Icon (Visible on Medium and Small Screens) */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Hamburger Menu (Medium and Small Screens Only) */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-500  w-11px h-8px z-50 flex flex-col items-center justify-item-right   space-y-6 transition-opacity">
          <Link href="/HomePage" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="/Category" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-500 transition">
            Categories
          </Link>
          <Link href="/Detail" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-500 transition">
          Booking Details
          </Link>
          <Link href="/PaymentPage" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-500 transition">
            Confirmation
          </Link>
          <Link href="/DetailedDashboardPage" onClick={() => setMenuOpen(false)} className="text-lg font-medium hover:text-blue-500 transition">
            Dashboard
          </Link>
    
        </div>
      )}
    </header>
  );
};

export default Header;
