import React from 'react';
import Logo from '../assets/logo.png';
import '../fonts/MervaleScript-Regular.otf';
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      {/* Upper Navbar */}
      <nav className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-1">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-20" />
          <span className="text-5xl font-medium mervale-font">Mr.Barber</span>
        </div>
        {/* Right side of the upper navbar */}
        <div className="flex items-center space-x-6">
        <Button variant="gradient" className="rounded-t-full">gradient</Button>
        <Button variant="gradient">gradient</Button>
        </div>
      </nav>

      {/* Lower Navbar */}
      <nav className="bg-gray-800">
        <div className="max-w-screen-xl mx-auto p-3 flex justify-center">
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="/home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/company" className="hover:underline">
                Company
              </a>
            </li>
            <li>
              <a href="/team" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="/features" className="hover:underline">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
