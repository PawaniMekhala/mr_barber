import React from "react";
import Service1 from "../assets/services_img/service1.jpg";
import Service2 from "../assets/services_img/service2.jpg";
import Service3 from "../assets/services_img/service3.jpg";
import Service4 from "../assets/services_img/service4.webp";
import Service5 from "../assets/services_img/service5.webp";
import Service6 from "../assets/services_img/service6.jpg";

const Pricing = () => {
  const services = [
    {
      name: "Hair Cutting",
      price: "850/=",
      image: Service2,
    },
    {
      name: "Hair Treatments",
      price: "700/=",
      image: Service3,
    },
    {
      name: "Hair Styling",
      price: "1500/=",
      image: Service4,
    },
    {
      name: "Facial Treatments",
      price: "1800/=",
      image: Service1,
    },
    {
      name: "Wedding Plans",
      price: "2000/=",
      image: Service6,
    },
    {
      name: "Body Treatments",
      price: "1600/=",
      image: Service5,
    },
  ];
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main text */}
        <h2 className="text-7xl font-semibold font-playfair text-yellow-700 mb-10">
          Pricing...
        </h2>
        {/* button group */}
        {/* price menu */}
        <div className="max-w-7xl mx-auto font-poppins grid grid-cols-2 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:items-center md:flex-row justify-between bg-gray-100 border border-gray-200 shadow-md rounded-3xl p-5 space-x-8 transition-all duration-500 hover:border-gray-400"
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-24 h-24 rounded-full object-cover"
              />

              {/* Service Name */}
              <h3 className="text-gray-800 font-medium">{service.name}</h3>

              {/* Service Price */}
              <div className="text-right">
                <p className="text-sm text-gray-500">From</p>
                <p className="text-lg font-bold text-yellow-700">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* // */}
      </div>
    </div>
  );
};

export default Pricing;
