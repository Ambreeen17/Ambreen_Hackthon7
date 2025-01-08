import React, { useState } from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          CarRent
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 items-center">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cars"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20">
          <ul className="fixed right-0 top-0 w-3/4 h-full bg-white shadow-md transform transition-all duration-300 ease-in-out">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-100 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cars"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-100 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-600 hover:bg-blue-100 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-2 py-2 text-gray-600 hover:bg-blue-100 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
