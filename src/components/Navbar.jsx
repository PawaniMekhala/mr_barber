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
      </div>
    </div>
  );
};

export default Navbar;
