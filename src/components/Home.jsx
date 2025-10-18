import React from "react";
import Home1 from "../assets/home_img/home1.jpg";
import Home2 from "../assets/home_img/home2.jpg";
import Home3 from "../assets/home_img/home3.jpg";

const Home = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col px-4 sm:px-10 py-16 overflow-hidden">
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center">
        <div className=" flex flex-col justify-center text-center lg:text-left">
          {/* Main Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-yellow-700 leading-tight">
            Find The Best <br /> Style For You...
          </h1>
          {/* button */}
          <button className="bg-yellow-700 text-black px-6 py-3 rounded-lg text-lg font-semibold mt-6 hover:bg-yellow-600 transition">
            Get Started
          </button>
        </div>

        {/*  Image Section*/}
        <div className="flex justify-center relative mt-10 lg:mt-0 lg:ml-auto w-full lg:w-auto">
          {/* Main Image */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-full border-2 border-yellow-700">
            <img
              src={Home1}
              alt="Haircut"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Top Right Image */}
          <div className="absolute top-0 right-[10px] sm:right-[20px] lg:right-[2px] w-16 sm:w-20 h-16 sm:h-20 ">
            <img
              src={Home2}
              alt="Side Haircut"
              className="rounded-full border-1 border-yellow-700 object-cover"
            />
          </div>

          {/* Small Bottom Left Image */}
          <div className="absolute bottom-[-40px] sm:bottom-[-60px] right-[10px] sm:right-[20px] lg:right-[10px] w-20 h-20 sm:w-28 sm:h-28">
            <img
              src={Home3}
              alt="Beard Trim"
              className="rounded-full border-1 border-yellow-700 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 w-full max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 px-6 py-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 mb-4 text-center sm:text-left">
          <span className="text-yellow-700 text-lg font-medium">
            📞 Call Us : +94 782637487
          </span>
        </div>
        <div className="bg-gray-900 px-6 py-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-yellow-700 text-lg font-medium">
            🕒 Opening Hours: Sunday - Friday, 08 a.m - 09 p.m
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
