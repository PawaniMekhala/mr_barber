import React from "react";
import Home1 from "../assets/home_img/home1.jpg";
import Home2 from "../assets/home_img/home2.jpg";
import Home3 from "../assets/home_img/home3.jpg";

const Home = () => {
  return (
    <div className="relative bg-neutral-900 text-white min-h-screen flex flex-col px-4 sm:px-10 py-16 overflow-hidden">
      {/* Inline keyframes so no extra config is required */}
      <style>{`
        @keyframes float-main {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float-small1 {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.01); }
          100% { transform: translateY(0) scale(1); }
        }
        @keyframes float-small2 {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }

        .float-main { animation: float-main 4s ease-in-out infinite; transform-origin: center; }
        .float-small1 { animation: float-small1 3.6s ease-in-out infinite; transform-origin: center; }
        .float-small2 { animation: float-small2 5s ease-in-out infinite; transform-origin: center; }

        /* small help for smoothing edges on the rings */
        .ring-blend { box-shadow: 0 8px 30px rgba(0,0,0,0.6); }
      `}</style>

      {/* Text Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center">
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left">
          <h1 className="font-playfair font-semibold text-[40px] sm:text-[55px] lg:text-[70px] leading-[100%] tracking-[0.02em] text-[#C9A915] opacity-100 drop-shadow-[2px_25px_2px_rgba(0,0,0,0.25)]">
            Find The Best <br /> Style For You...
          </h1>

          <button
            className="bg-yellow-700 text-black px-6 py-3 rounded-lg text-lg font-semibold font-poppins mt-6 hover:bg-yellow-600 transition focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Get started with booking"
          >
            Get Started
          </button>
        </div>

        {/* Image Section */}
        <div className="relative hidden lg:block mt-10 lg:mt-0 lg:ml-auto w-full lg:w-auto">
          {/* Main Image (big circle) */}
          <div
            className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden float-main ring-blend"
            style={{ borderRadius: "9999px" }}
          >
            <img
              src={Home1}
              alt="Haircut"
              loading="eager"
              className="w-full h-full object-cover block"
            />
            {/* Golden ring (3/4) */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "4px solid rgba(202,166,25,0.95)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                transform: "rotate(90deg)",
                filter: "blur(2px)",
              }}
            />
          </div>

          {/* Small Top Right Image */}
          <div
            className="absolute w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden float-small1"
            style={{
              right: "-30px",
              top: "20px",
              zIndex: 30,
            }}
          >
            <img
              src={Home2}
              alt="Side Haircut"
              loading="lazy"
              className="w-full h-full object-cover block"
            />
            {/* Partial Golden Ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "3px solid rgba(202,166,25,0.95)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                transform: "rotate(90deg)",
                filter: "blur(1px)",
              }}
            />
          </div>

          {/* Small Bottom Right Image */}
          <div
            className="absolute w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] rounded-full overflow-hidden float-small2"
            style={{
              right: "10px",
              bottom: "-45px",
              zIndex: 20,
            }}
          >
            <img
              src={Home3}
              alt="Beard Trim"
              loading="lazy"
              className="w-full h-full object-cover block"
            />
            {/* Partial Golden Ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "3px solid rgba(202,166,25,0.95)",
                borderTopColor: "transparent",
                borderLeftColor: "transparent",
                transform: "rotate(90deg)",
                filter: "blur(1px)",
              }}
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
