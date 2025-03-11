import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h1 className="w-full text-5xl md:text-7xl font-bold mervale-font self-center whitespace-nowrap text-yellow-200">
            Mr. Barber
          </h1>
          <p className="text-gray-600 mt-4 text-sm">
            At Mr. Barber, we envision a world where every visit transforms into
            a unique journey of style, elegance, and self-expression, setting a
            new standard for grooming excellence.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-gray-600">
            <AiFillYoutube className="text-red-600" />
            <FaFacebookF className="text-blue-600" />
            <FiInstagram className="text-pink-600" />
            <AiOutlineTwitter className="text-blue-400" />
          </div>
        </div>

        {/* Discover Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-4">
            Discover
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Meet Our Team
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Make an Appointment
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Need a Career?
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              News & Blogs
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-600 space-y-2">
            <li className="hover:text-yellow-500 cursor-pointer">
              Hair Cutting
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Shaving & Styling
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Hair Treatments
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">
              Facial Treatments
            </li>
            <li className="hover:text-yellow-500 cursor-pointer">Weddings</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-700 mb-4">
            Contact
          </h3>
          <p className="text-gray-600 flex items-center gap-2">
            <FaMapMarkerAlt /> Colombo 03, Sri Lanka
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaPhoneAlt /> +94 789417345
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <FaRegClock /> Sun - Fri: 08 am - 09 pm
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <MdEmail /> mrbarbershop@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t pt-4">
        Copyright {new Date().getFullYear()}, Mr. Barber. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
