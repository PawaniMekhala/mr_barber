import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Services" },
    { id: 4, text: "Pricing" },
    { id: 5, text: "Reviews" },
  ];

  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-black flex justify-between items-center h-24 max-w-[3000px] mx-auto px-4 text-white">
        {/* Logo */}
        <h1 className="w-full text-5xl md:text-7xl font-bold mervale-font self-center whitespace-nowrap text-yellow-200">
          Mr. Barber
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 px-6 hover:bg-yellow-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-left whitespace-nowrap"
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden"
          role="button"
          aria-label="Toggle navigation"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] transition-transform duration-500 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Logo */}
          <div className="flex justify-center items-center py-4">
            <img
              src={Logo}
              alt="Mr. Barber Logo"
              className="w-30 h-30 object-contain"
            />
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="py-2 px-6 border-b rounded-xl hover:bg-[#876806] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      {/* Bottom Navbar */}
      <div className="bg-black flex justify-end items-center h-16 px-4 text-white">
        <button className="bg-yellow-700 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-xl m-2">
          Appointment
        </button>
        <button className="bg-transparent border border-yellow-700 hover:bg-yellow-700 text-yellow-700 hover:text-black font-bold py-2 px-6 rounded-xl m-2">
          Staff
        </button>
      </div>
      {/* Yellow Line */}
      <div className="w-full h-[1px] bg-yellow-700"></div>
    </div>
  );
};

export default Navbar;
