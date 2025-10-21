import React from "react";
import Home1 from "../assets/home_img/home1.jpg";
import Home2 from "../assets/home_img/home2.jpg";
import Home3 from "../assets/home_img/home3.jpg";

const Home = () => {
  return (
    <div className="relative bg-neutral-900 text-white min-h-screen flex flex-col px-4 sm:px-10 py-16 overflow-hidden">
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center">
        <div className=" flex flex-col justify-center text-center lg:text-left">
          {/* Main Text, drop-shadow-md */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-semibold text-yellow-700 leading-tight text-shadow">
            Find The Best <br /> Style For You...
          </h1> */}
          <h1 className="font-playfair font-semibold text-[40px] sm:text-[55px] lg:text-[70px] leading-[100%] tracking-[0.02em] text-[#8B6A00] opacity-100 drop-shadow-[2px_25px_2px_rgba(0,0,0,0.25)]">
            Find The Best <br /> Style For You...
          </h1>

          {/* button */}
          <button className="bg-yellow-700 text-black px-6 py-3 rounded-lg text-lg font-semibold font-poppins mt-6 hover:bg-yellow-600 transition">
            Get Started
          </button>
        </div>

        {/*  Image Section*/}
        {/* <div className="flex justify-center relative mt-10 lg:mt-0 lg:ml-auto w-full lg:w-auto">
          {/* Main Image 
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-full border-2 border-yellow-700">
            <img
              src={Home1}
              alt="Haircut"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Top Right Image 
          <div className="absolute top-0 right-[10px] sm:right-[20px] lg:right-[2px] w-16 sm:w-20 h-16 sm:h-20 ">
            <img
              src={Home2}
              alt="Side Haircut"
              className="rounded-full border-1 border-yellow-700 object-cover"
            />
          </div>

          {/* Small Bottom Left Image 
          <div className="absolute bottom-[-40px] sm:bottom-[-60px] right-[10px] sm:right-[20px] lg:right-[10px] w-20 h-20 sm:w-28 sm:h-28">
            <img
              src={Home3}
              alt="Beard Trim"
              className="rounded-full border-1 border-yellow-700 object-cover"
            />
          </div>
        </div> */}

        {/* Image Section */}
        <div className="relative flex justify-center mt-10 lg:mt-0 lg:ml-auto w-full lg:w-auto">
          {/* Main Image */}
          <div className="relative w-[350px] h-[350px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
            <img
              src={Home1}
              alt="Haircut"
              className="w-full h-full object-cover rounded-full"
            />
            {/* 3/4 Golden Ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[#8B6A00] border-t-transparent border-l-transparent rotate-[90deg] shadow-[0_0_15px_rgba(139,106,0,0.5)]"></div>
          </div>

          {/* Small Top Right Image */}
          <div className="absolute top-[40px] right-[150px] sm:top-[10px] sm:right-[-250px] md:right-[-200px] w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden">
            <img
              src={Home2}
              alt="Side Haircut"
              className="w-full h-full object-cover rounded-full"
            />
            {/* Partial Golden Ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-[#8B6A00] border-t-transparent border-l-transparent rotate-[90deg]"></div>
          </div>

          {/* Small Bottom Left Image */}
          <div className="absolute bottom-[-50px] right-[20px] sm:bottom-[-70px] sm:right-[30px] w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-[2px] border-[#8B6A00] shadow-[0_8px_15px_rgba(0,0,0,0.25)]">
            <img
              src={Home3}
              alt="Beard Trim"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 w-full max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 px-6 py-4 rounded-lg flex flex-col sm:flex-row items-center gap-4 mb-4 text-center sm:text-left">
          <span className="text-yellow-700 text-lg font-poppins font-medium">
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
