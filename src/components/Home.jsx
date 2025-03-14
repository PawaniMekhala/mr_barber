import React from "react";
import Home1 from "../assets/home_img/home1.jpg";
import Home2 from "../assets/home_img/home2.jpg";
import Home3 from "../assets/home_img/home3.jpg";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col px-6 sm:px-10 py-16 overflow-hidden">
      {/* Text Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        <div className=" flex flex-col justify-center">
          {/* Main Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-500 leading-tight">
            Find The Best <br /> Style For You...
          </h1>
          {/* button */}
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold mt-6 hover:bg-yellow-600 transition">
            Get Started
          </button>
        </div>

        {/*  Image Section*/}
        <div className="flex justify-center relative mt-10 lg:mt-0 lg:ml-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden lg:right-[-100px] w-[250px] h-[300px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] ">
            <img
              src={Home1}
              alt="Haircut"
              className="w-full h-full rounded-full border-2 border-yellow-500 object-cover"
            />
          </div>

          {/* Small Top Right Image */}
          <div className="absolute top-1 right-[-50px] sm:right-[-100px] lg:right-[-250px] w-16 sm:w-24 h-16 sm:h-24 ">
            <img
              src={Home2}
              alt="Side Haircut"
              className="rounded-full border-2 border-yellow-500 object-cover"
            />
          </div>

          {/* Small Bottom Left Image */}
          <div className="absolute bottom-[-80px] sm:bottom-[-120px] right-[-50px] sm:right-[-100px] lg:right-[-200px] w-24 h-24 sm:w-32 sm:h-32 ">
            <img
              src={Home3}
              alt="Beard Trim"
              className="rounded-full border-2 border-yellow-500 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
