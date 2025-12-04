import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About Us", link: "#about" },
    { id: 3, text: "Services", link: "#services" },
    { id: 4, text: "Pricing", link: "#pricing" },
    { id: 5, text: "Reviews", link: "#review" },
  ];

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
    <nav className="bg-neutral-900 text-white relative">
      <div className="overflow-x-auto">
        {/* Logo and Navigation Links */}
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center h-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 flex-nowrap">
          {/* Logo */}
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mervale-font racking-wider whitespace-nowrap pt-4 lg:pt-10"
            style={{ color: "#876806" }}
          >
            Mr. Barber
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-5 text-sm lg:text-base font-medium">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="py-2 px-6 hover:bg-gold-600 font-poppins rounded-xl m-2 cursor-pointer duration-300 hover:text-black text-left whitespace-nowrap"
              >
                <a href={item.link}>{item.text}</a>
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

        {/* Bottom Bar: Action Buttons */}
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
            <Link
              to="/staff"
              className="px-6 py-2 rounded-md font-semibold"
              style={staffBtnStyle}
            >
              Staff
            </Link>
          </div>
        </div>

        {/* Gold Separator Line */}
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
              onClick={() => {
                setNav(false); // close menu
              }}
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
