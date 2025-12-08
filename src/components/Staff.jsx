import React from "react";
import Staff1 from "../assets/staff_img/stf1.jpg";
import Staff2 from "../assets/staff_img/stf2.jpg";
import Staff3 from "../assets/staff_img/stf3.jpg";
import Staff4 from "../assets/staff_img/stf4.jpg";

export default function Staff() {
  const staff = [
    { name: "Shan Perera", appointments: 6, img: Staff1 },
    { name: "Roshan Silva", appointments: 12, img: Staff2 },
    { name: "Nadun Peries", appointments: 7, img: Staff3 },
    { name: "Kasun Fernando", appointments: 3, img: Staff4 },
  ];

  return (
    <div className="min-h-screen bg-black text-gold-500 pt-20">
      {/* STAFF CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-5">
        {staff.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl p-[2px]"
            style={{
              background: "linear-gradient(180deg, #C29400 0%, #876806 52.1%)",
            }}
          >
            <div className="flex items-center justify-between p-5 bg-black rounded-2xl hover:scale-105 transition-transform duration-300">
              {/* Left Side - Image */}
              <div className="flex items-center gap-4">
                <img
                  src={s.img}
                  className="w-20 h-20 rounded-full object-cover"
                  alt={s.name}
                />

                {/* Name + Appointments */}
                <div>
                  <p className="text-xl font-semibold text-gold-600">
                    {s.name}
                  </p>
                  <br></br>
                  <p className="text-sm text-gray-400">
                    {s.appointments} new appointments
                  </p>
                </div>
              </div>

              {/* Arrow Icon */}
              <span className="text-3xl text-yellow-600">{">>"}</span>
            </div>
          </div>
        ))}
      </div>

      {/* STAFF LOGIN */}
      <h2 className="text-center mt-12 text-2xl font-semibold">Staff Login</h2>

      <div className="border border-yellow-700 max-w-md mx-auto mt-6 p-8 rounded-xl">
        <div className="text-center text-4xl mb-4">👤</div>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 bg-black border border-yellow-700 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-black border border-yellow-700 rounded mb-4"
        />

        <button className="w-full bg-yellow-600 py-2 rounded text-black font-bold">
          Login
        </button>
      </div>
    </div>
  );
}
