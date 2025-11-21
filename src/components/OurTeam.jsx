import React from "react";
import Staff1 from "../assets/staff_img/stf1.jpg";
import Staff2 from "../assets/staff_img/stf2.jpg";
import Staff3 from "../assets/staff_img/stf3.jpg";
import Staff4 from "../assets/staff_img/stf4.jpg";
import Owner from "../assets/images for saloon/owner.jpg";

const OurTeam = () => {
  const staff = [
    {
      name: "T.B.Perera",
      image: Owner,
      position: "Founder",
      description:
        "The visionary behind our salon, setting the standards for excellence.",
    },
    {
      name: "Jerom Bell",
      image: Staff1,
      position: "Co-Founder",
      description: "Co-founder and creative mind leading the design team.",
    },
    {
      name: "Yasmine Tano",
      image: Staff2,
      position: "Chairman",
      description: "Focused on vision, leadership, and growth.",
    },
    {
      name: "Martin Darbys",
      image: Staff3,
      position: "CEO",
      description: "Leads with passion and commitment to perfection.",
    },
    {
      name: "Patrick Angely",
      image: Staff4,
      position: "Product Manager",
      description: "Ensures quality in every product we deliver.",
    },
    {
      name: "Jerom Bell",
      image: Staff1,
      position: "Co-Founder",
      description: "Dedicated to modern trends and unique designs.",
    },
  ];

  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Team heading */}
        <h2 className="text-7xl font-semibold font-playfair text-gold-700 mb-14">
          Our Team...
        </h2>
        <div className="mx-auto mt-8 grid font-poppins max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {/* Team members */}
          {staff.map(({ name, position, description, image }, index) => {
            return (
              <div
                key={index}
                className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={name}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 -z-10 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

                {/* Info content */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h4 className="text-2xl font-semibold text-gold-700">
                    {name}
                  </h4>
                  <p className="text-lg text-white">~{position}</p> <br></br>
                  <p className="mt-2 text-sm text-gray-300">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
