import React, { useState } from "react";
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

  // Track the current start index of visible images
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4; // how many images to show at a time

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + galleryItem.length) % galleryItem.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItem.length);
  };

  const visibleImages = Array.from(
    { length: visibleCount },
    (_, i) => galleryItem[(currentIndex + i) % galleryItem.length]
  );

  return (
    <section id="gallery" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Text  */}
        <div className="mb-12">
          <h2 className="text-7xl font-semibold font-playfair text-gold-700 ">
            Gallery...
          </h2>
        </div>
        {/* Image Gallery Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-gold-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gold-700 transition"
          >
            ❮
          </button>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
            {visibleImages.map(({ image }, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl h-64"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-gold-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gold-700 transition"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
