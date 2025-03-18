import React from "react";
import Gallery1 from "../assets/galary_img/gallery1.jpg";
import Gallery2 from "../assets/galary_img/gallery2.jpg";
import Gallery3 from "../assets/galary_img/gallery3.jpg";
import Gallery4 from "../assets/galary_img/gallery4.jpg";
import Gallery5 from "../assets/galary_img/gallery5.jpg";
import Gallery6 from "../assets/galary_img/gallery6.jpg";
import Gallery7 from "../assets/galary_img/gallery7.jpg";

const Gallery = () => {
  const galleryItem = [
    { image: Gallery1 },
    { image: Gallery2 },
    { image: Gallery3 },
    { image: Gallery4 },
    { image: Gallery5 },
    { image: Gallery6 },
    { image: Gallery7 },
  ];
  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Text  */}
        <div className="mb-12">
          <h2 className="text-7xl font-semibold text-yellow-700 ">
            Gallery...{" "}
          </h2>
        </div>
        {/* Image Gallery */}
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {galleryItem.map(({ image }, index) => {
            return (
              <div
                key={index}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                {/* <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
