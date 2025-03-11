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
      </div>
    </footer>
  );
};

export default Footer;
