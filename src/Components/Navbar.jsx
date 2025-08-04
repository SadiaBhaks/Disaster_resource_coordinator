import React, { useState } from "react";
import { Link } from "react-scroll";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-16 items-center h-30">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">
            DisasterCo.IN
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-100 font-medium ">
            <a href="#Hero" className="transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Home
            </a>
            <a href="#Features" className="transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Features
            </a>
            <a href="#Preview" className="transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Resources
            </a>
            <a href="#Contact" className="transition-transform duration-300 hover:-translate-y-2  p-4 rounded">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                // Hamburger Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close Icon
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
            <a
              href="#Hero"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Home
            </a>
            <a
              href="#Features"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Features
            </a>
            <a
              href="#Preview"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Resources
            </a>
            <a
              href="#Contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
