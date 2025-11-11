import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Services" },
    { id: 4, text: "Pricing" },
    { id: 5, text: "Reviews" },
  ];

  // Custom styles for the dark-gold buttons
  const appointmentBtnStyle = {
    background: "linear-gradient(to bottom, #A68B2F 0%, #705B1E 100%)",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
    color: "white",
    fontSize: "16px", // Slightly smaller on the bottom bar
  };

  const staffBtnStyle = {
    background: "linear-gradient(to bottom, #9B822A 0%, #68551A 100%)",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
    color: "white",
    fontSize: "16px",
  };

  return (
    // Outer container for both rows, positioned relatively for the gold separator
    <nav className="bg-neutral-900 text-white relative">
      {/* 1. Top Bar: Logo and Navigation Links */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-4 flex-wrap">
        {/* Logo */}
        <div
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mervale-font racking-wider whitespace-nowrap pt-6 lg:pt-16"
          style={{ color: "#876806" }}
        >
          Mr. Barber
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-3 lg:space-x-6 text-base lg:text-lg font-medium">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 px-6 hover:bg-yellow-600 font-poppins rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-left whitespace-nowrap"
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-50"
          role="button"
          aria-label="Toggle navigation"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* 2. Bottom Bar: Action Buttons */}
      <div className="w-full h-16 px-4 flex justify-end items-center border-t border-gray-900 md:border-t-0">
        <div className="flex space-x-4">
          {/* Appointment Button */}
          <button
            className="px-6 py-2 rounded-md font-semibold"
            style={appointmentBtnStyle}
          >
            Appointment
          </button>
          {/* Staff Button */}
          <button
            className="px-6 py-2 rounded-md font-semibold"
            style={staffBtnStyle}
          >
            Staff
          </button>
        </div>
      </div>

      {/* Gold Separator Line at the very bottom of the entire nav structure */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: "#876806" }}
      ></div>

      {/* --- Mobile Navigation Menu --- */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#876806] transition-transform duration-500 z-50 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b border-gray-600 cursor-pointer hover:bg-neutral-800"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
