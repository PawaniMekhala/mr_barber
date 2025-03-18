import React from "react";
import Staff1 from "../assets/staff_img/stf1.jpg";
import Staff2 from "../assets/staff_img/stf2.jpg";
import Staff3 from "../assets/staff_img/stf3.jpg";
import Staff4 from "../assets/staff_img/stf4.jpg";
import Owner from "../assets/images for saloon/owner.jpg";

const OurTeam = () => {
  const staff = [
    { name: "T.B.Perera", image: Owner, position: "Founder" },
    { name: "Jerom Bell", image: Staff1, position: "Co-Founder" },
    { name: "Yasmine Tano", image: Staff2, position: "Chairman" },
    { name: "Martin Darbys", image: Staff3, position: "CEO" },
    { name: "Patrick Angely", image: Staff4, position: "Product Manager" },
    { name: "Jerom Bell", image: Staff1, position: "Co-Founder" },
  ];
  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Text  */}
        <div className="mb-12">
          <h2 className="text-7xl font-semibold text-yellow-700 ">
            Our team...{" "}
          </h2>
        </div>
        {/* Staff Image Gallery */}
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {staff.map(({ name, image, position }, index) => {
            return (
              <div
                key={index}
                className="block group md:col-span-2 lg:col-span-1 "
              >
                <div className="relative mb-6">
                  <img
                    src={image}
                    alt="Antonio"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  {name}
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  {position}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
