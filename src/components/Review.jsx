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

        {/* review card section */}
        <div className="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3  no-scrollbar">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center border border-gray-200"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 mx-auto rounded-full mb-3"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <div className="flex justify-center my-2 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>

        {/* Navigation & Button */}
        <div className="flex justify-center items-center mt-6">
          <MdChevronLeft className="text-3xl text-gray-600 cursor-pointer" />
          <MdChevronRight className="text-3xl text-gray-600 cursor-pointer ml-4" />
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-[#B5913E] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#9c7a30]">
            Give Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
