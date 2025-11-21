import React from "react";
import Service1 from "../assets/services_img/service1.jpg";
import Service2 from "../assets/services_img/service2.jpg";
import Service3 from "../assets/services_img/service3.jpg";
import Service4 from "../assets/services_img/service4.webp";
import Service5 from "../assets/services_img/service5.webp";
import Service6 from "../assets/services_img/service6.jpg";

const Services = () => {
  const serviceItem = [
    { text: "Facial Treatments", image: Service1 },
    { text: "Standard Haircuts", image: Service2 },
    { text: "Hair Treatments", image: Service3 },
    { text: "Styling", image: Service4 },
    { text: "Body Treatments", image: Service5 },
    { text: "Weddings", image: Service6 },
    { text: "Hair Treatments", image: Service3 },
  ];

  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services heading */}
        <h2 className="text-7xl font-semibold font-playfair text-gold-700 mb-14">
          Our Services...
        </h2>
        {/* Service cards */}
        <div className="mx-auto mt-8 grid font-poppins max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {serviceItem.map(({ text, image }, index) => {
            return (
              <div
                key={index}
                className="group relative isolate flex flex-col justify-end items-center overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={image}
                  alt={text}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <h4 className="text-2xl font-medium text-white text-center transition-transform duration-300 ease-in-out hover:-translate-y-2 group-hover:text-gold-700">
                  {text}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
