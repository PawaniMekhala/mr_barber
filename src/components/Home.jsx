import React from "react";
import Home1 from "../assets/home_img/home1.jpg";
import Home2 from "../assets/home_img/home2.jpg";
import Home3 from "../assets/home_img/home3.jpg";

const Home = () => {
  return (
    <section className="relative bg-neutral-900 text-white min-h-screen flex flex-col px-4 sm:px-10 py-16 overflow-hidden">
      {/* Animations & reduced-motion support */}
      <style>{`
        @keyframes float-main {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.2deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes float-small {
          0% { transform: translateY(0) scale(1) rotate(0deg); }
          25% { transform: translateY(-4px) scale(1.02) rotate(0.6deg); }
          50% { transform: translateY(-8px) scale(1.01) rotate(1deg); }
          75% { transform: translateY(-4px) scale(1.02) rotate(0.6deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
           @keyframes float-small2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(6px, -6px) rotate(-0.6deg); }
          50% { transform: translate(12px, -10px) rotate(-1deg); }
          80% { transform: translate(6px, -6px) rotate(-0.6deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .float-main { animation: float-main 4s ease-in-out infinite; transform-origin: center; }
        .float-small { animation: float-small 3.6s ease-in-out infinite; transform-origin: center; }
         .float-small2 { animation: float-small2 5.2s ease-in-out infinite; transform-origin: center; }
        
         @media (prefers-reduced-motion: reduce) {
          .float-main, .float-small, .float-small2 { animation: none !important; }
        }
        .ring-blend { box-shadow: 0 8px 30px rgba(0,0,0,0.6); }
      `}</style>

      <div className="w-full max-w-6xl mx-auto overflow-hidden">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
          {/* Main Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-playfair font-semibold text-4xl sm:text-6xl lg:text-7xl leading-[100%] tracking-[0.02em] text-[#876806] opacity-100 drop-shadow-[2px_25px_2px_rgba(0,0,0,0.25)]">
              Find The Best <br /> Style For You...
            </h1>
          </div>

          {/* Image cluster */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6 items-center w-full max-w-full overflow-hidden">
              {/* Big img*/}
              <div
                className="relative rounded-full overflow-hidden float-main ring-blend w-48 sm:w-56 md:w-64 lg:w-72 aspect-square mx-auto lg:mx-0"
                aria-hidden="true"
              >
                <img
                  src={Home1}
                  alt="Barber trimming a customer's hair"
                  loading="eager"
                  className="w-full h-full object-cover block"
                  style={{ width: "100%", height: "100%" }}
                />
                {/* golden 3/4 ring */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    border: "4px solid rgba(202,166,25,0.95)",
                    borderTopColor: "transparent",
                    borderLeftColor: "transparent",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    transform: "rotate(90deg)",
                  }}
                />
              </div>

              <div className="flex flex-col items-center lg:items-center gap-6 mt-6 lg:mt-0">
                {/* small top */}
                <div
                  className="relative rounded-full overflow-hidden float-small ring-blend w-28 sm:w-36 lg:w-44 aspect-square"
                  aria-hidden="true"
                >
                  <img
                    src={Home2}
                    alt="Barber working on customer's hair (detail)"
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      border: "3px solid rgba(202,166,25,0.95)",
                      borderTopColor: "transparent",
                      borderLeftColor: "transparent",
                      transform: "rotate(90deg)",
                    }}
                  />
                </div>

                {/* small bottom */}
                <div
                  className="relative rounded-full overflow-hidden ring-blend float-small2 w-20 sm:w-28 lg:w-32 aspect-square"
                  aria-hidden="true"
                >
                  <img
                    src={Home3}
                    alt="Beard trim example"
                    loading="lazy"
                    className="w-full h-full object-cover block"
                  />
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      border: "3px solid rgba(202,166,25,0.95)",
                      borderTopColor: "transparent",
                      borderLeftColor: "transparent",
                      transform: "rotate(90deg)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 w-full max-w-4xl mx-auto px-2">
          {/* Get Started Button */}
          <div className="flex mb-4">
            <button className="border-2 border-yellow-700 text-yellow-700 px-4 py-3 rounded-lg text-lg font-poppins font-medium hover:bg-yellow-700 hover:text-white transition-colors duration-300">
              Get Started
            </button>
          </div>

          {/* Contact + Hours Box */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center border border-yellow-700 rounded-lg px-6 py-4 gap-4 text-center sm:text-left text-white font-poppins font-medium text-lg transition-colors duration-300 hover:bg-yellow-700 hover:text-black">
            {/* Call */}
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              <span>Call Us : +94 782637487</span>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-calendar-days text-xl"></i>
              <span>Opening Hours : Sunday – Friday, 08 a.m – 09 p.m</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
