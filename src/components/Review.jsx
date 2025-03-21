import React from "react";
import { FaStar } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Gallery1 from "../assets/galary_img/gallery1.jpg";
import Gallery2 from "../assets/galary_img/gallery2.jpg";
import Gallery3 from "../assets/galary_img/gallery3.jpg";

const reviews = [
  {
    id: 1,
    name: "Dilan Perera",
    image: Gallery1,
    rating: 5,
    review:
      "I got a haircut and beard trim, and it was the best grooming experience I’ve had.",
  },
  {
    id: 2,
    name: "Samith Peries",
    image: Gallery2,
    rating: 5,
    review:
      "They genuinely care about customer satisfaction. Highly recommend!",
  },
  {
    id: 3,
    name: "Amir John",
    image: Gallery3,
    rating: 5,
    review:
      "The combination of professionalism and style makes this barbershop stand out.",
  },
  {
    id: 4,
    name: "Dilan Perera",
    image: Gallery1,
    rating: 5,
    review:
      "I got a haircut and beard trim, and it was the best grooming experience I’ve had.",
  },
  {
    id: 5,
    name: "Samith Peries",
    image: Gallery2,
    rating: 5,
    review:
      "They genuinely care about customer satisfaction. Highly recommend!",
  },
  {
    id: 6,
    name: "Amir John",
    image: Gallery3,
    rating: 5,
    review:
      "The combination of professionalism and style makes this barbershop stand out.",
  },
];

const Review = () => {
  return (
    <div className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Services heading */}
        <h2 className="text-7xl font-semibold text-yellow-700 mb-14">
          Ratings and Reviews
        </h2>
      </div>
    </div>
  );
};

export default Review;
