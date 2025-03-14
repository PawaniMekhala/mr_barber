import React from "react";
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
      </div>
    </div>
  );
};

export default Home;
