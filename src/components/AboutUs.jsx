import React from "react";
import Owner from "../assets/images for saloon/owner.jpg";

const AboutUs = () => {
  return (
    <div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h1 className="text-7xl font-semibold font-playfair text-yellow-700 leading-normal lg:text-start text-center">
                  About Us...
                </h1>
                <p className="text-gray-800 text-base font-normal font-poppins leading-relaxed lg:text-start text-center">
                  Welcome to Mr. Barber, a premium barbershop located in the
                  heart of Colombo 3. Our skilled barbers combine timeless
                  craftsmanship with modern trends to deliver exceptional
                  haircuts, styling, and grooming services. We pride ourselves
                  on providing a personalized experience that leaves every
                  client feeling confident and refreshed. Visit Mr. Barber and
                  discover why we are the go-to destination for style and
                  sophistication. The shop has 4 extremely skilled barbers and
                  one owner who manages the business.
                </p>
              </div>
            </div>
            <div>
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover shadow-xl shadow-blue-gray-600"
                src={Owner}
                alt="about Us"
              />
              <div className="mt-2 font-normal text-sm font-poppins text-gray-600">
                "To be the go-to destination for timeless grooming excellence."
                <br />
                Owner-Mr. T.B.Perera
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
