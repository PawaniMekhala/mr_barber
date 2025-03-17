import React from "react";
import Staff1 from "../assets/staff_img/stf1.jpg";
import Staff2 from "../assets/staff_img/stf2.jpg";
import Staff3 from "../assets/staff_img/stf3.jpg";
import Staff4 from "../assets/staff_img/stf4.jpg";
import Owner from "../assets/images for saloon/owner.jpg";

const OurTeam = () => {
  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Text  */}
        <div className="mb-12">
          <h2 className="text-7xl text-center font-semibold text-yellow-700 ">
            Our team...{" "}
          </h2>
        </div>
        {/* Staff Image Gallery */}
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          <div className="block group md:col-span-2 lg:col-span-1 ">
            <div className="relative mb-6">
              <img
                src={Owner}
                alt="Antonio"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              T.B.Perera{" "}
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Founder
            </span>
          </div>
          <div className="block group md:col-span-2 lg:col-span-1 ">
            <div className="relative mb-6">
              <img
                src={Staff2}
                alt="Patricia"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Patricia Angely{" "}
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Co-Founder
            </span>
          </div>
          <div className="group group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src={Staff3}
                alt="Jerom"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Jerom Bell{" "}
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Chairman
            </span>
          </div>
          <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
            <div className="relative mb-6">
              <img
                src={Staff4}
                alt="Yasmine"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Yasmine Tano{" "}
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              CEO
            </span>
          </div>
          <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1 ">
            <div className="relative mb-6">
              <img
                src={Staff1}
                alt="Martin"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
              Martin Darbys
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              Product Manager
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
