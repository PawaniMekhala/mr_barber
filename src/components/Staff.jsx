import React from "react";
import { useNavigate } from "react-router-dom";
import Staff1 from "../assets/staff_img/stf1.jpg";
import Staff2 from "../assets/staff_img/stf2.jpg";
import Staff3 from "../assets/staff_img/stf3.jpg";
import Staff4 from "../assets/staff_img/stf4.jpg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function Staff() {
  const navigate = useNavigate();

  const staff = [
    { id: 1, name: "Shan Perera", appointments: 6, img: Staff1 },
    { id: 2, name: "Roshan Silva", appointments: 12, img: Staff2 },
    { id: 3, name: "Nadun Peries", appointments: 7, img: Staff3 },
    { id: 4, name: "Kasun Fernando", appointments: 3, img: Staff4 },
  ];

  return (
    <div className="min-h-screen bg-black pt-20 pb-20">
      {/* STAFF CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto gap-8 px-6">
        {staff.map((s, i) => (
          <div
            key={i}
            // navigate to staff details page
            onClick={() => navigate("/staff1")}
            className="cursor-pointer rounded-2xl p-[2px] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #C29400 0%, #876806 52.1%)",
            }}
          >
            <div className="h-[186px] bg-black rounded-2xl px-6 flex items-center justify-between transition-transform duration-300">
              {/* Left Side - Image */}
              <div className="flex items-center gap-4">
                <img
                  src={s.img}
                  className="w-20 h-20 rounded-full object-cover"
                  alt={s.name}
                />

                {/* Name + Appointments */}
                <div>
                  <p className="text-xl font-medium font-poppins text-gold-700">
                    {s.name}
                  </p>
                  <br></br>
                  <p className="text-sm text-white font-poppins">
                    {s.appointments} new appointments
                  </p>
                </div>
              </div>

              {/* Arrow Icon */}
              <span className="text-3xl text-yellow-700">
                <MdOutlineKeyboardDoubleArrowRight />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* STAFF LOGIN */}
      {/* .div$*4 for 4 divs shortcut*/}
      {/* Title */}
      <h2
        className="mx-auto
    mt-12
    w-[197px]
    h-[53px]
    text-center
    font-playfair
    text-[40px]
    font-medium
    leading-[100%]
    tracking-[0%] text-gold-700"
      >
        Staff Login
      </h2>
      <div className="flex items-center justify-center bg-black">
        <div
          className="
    w-[529px]
    h-[511px]
    border
    border-yellow-600
    rounded-2xl
    p-8
    mt-6
    shadow-lg
    bg-black
    flex
    flex-col
    justify-center
  "
        >
          {/* Avatar */}
          <div className="flex justify-center mb-10">
            <div
              className="
    w-[64px] h-[64px]
    sm:w-[74px] sm:h-[74px]
    rounded-full
    border-2
    border-gold-700
    flex items-center justify-center
  "
            >
              <FaUser className="text-yellow-600 text-[24px] sm:text-[28px]" />
            </div>
          </div>

          {/* Username */}
          <div className="flex items-center border-b border-yellow-600 mb-6">
            <FaUser className="text-yellow-600 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent text-yellow-600 placeholder-yellow-600 outline-none py-2"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b border-yellow-600 mb-8">
            <FaLock className="text-yellow-600 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent text-yellow-600 placeholder-yellow-600 outline-none py-2"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-yellow-700 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg transition">
            Login
          </button>

          {/* Social Login */}
          <div className="flex justify-center gap-6 mt-6">
            <FaGoogle className="text-xl text-white cursor-pointer hover:text-yellow-600" />
            <FaFacebookF className="text-xl text-white cursor-pointer hover:text-yellow-600" />
            <FaApple className="text-xl text-white cursor-pointer hover:text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
