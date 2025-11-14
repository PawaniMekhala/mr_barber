import React from "react";
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const AppointmentForm = () => {
  const Input = ({ label, ...props }) => (
    <div className="w-full">
      <label className="sr-only">{label}</label>
      <input
        {...props}
        placeholder={label}
        className="w-full bg-transparent border-b border-gold-600 placeholder-gold-700 text-gold-50 py-2 focus:outline-none focus:border-gold-400 transition"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#0f0f0f] px-6 py-16">
      <div className="max-w-3xl w-full">
        <h1 className="text-center font-serif text-3xl md:text-4xl text-gold-500 mb-12">
          Make Appointment
        </h1>

        <form className="space-y-8">
          {/* top row (name) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="md:col-span-2">
              <Input label="Name" name="name" type="text" />
            </div>

            <Input label="Email Address" name="email" type="email" />
            <Input label="Phone number" name="phone" type="tel" />

            {/* Dropdowns */}
            <div className="relative">
              <label className="sr-only">Category</label>
              <select
                className="w-full bg-transparent border-b border-gold-600 py-2 pl-0 pr-8 appearance-none placeholder-gold-700 text-gold-50 focus:outline-none focus:border-gold-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Category
                </option>
                <option>Haircut</option>
                <option>Shave</option>
                <option>Color</option>
              </select>
              <ChevronDownIcon className="w-5 h-5 absolute right-0 top-3 text-gold-600 pointer-events-none" />
            </div>

            <div className="relative">
              <label className="sr-only">Select Barber</label>
              <select
                className="w-full bg-transparent border-b border-gold-600 py-2 pl-0 pr-8 appearance-none placeholder-gold-700 text-gold-50 focus:outline-none focus:border-gold-400"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Barber
                </option>
                <option>John</option>
                <option>Michael</option>
                <option>Sonia</option>
              </select>
              <ChevronDownIcon className="w-5 h-5 absolute right-0 top-3 text-gold-600 pointer-events-none" />
            </div>

            {/* Date & Time */}
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <label className="sr-only">Appointment Date</label>
                <input
                  type="date"
                  className="w-full bg-transparent border-b border-gold-600 py-2 pr-8 placeholder-gold-700 text-gold-50 focus:outline-none focus:border-gold-400"
                />
                <CalendarIcon className="w-5 h-5 absolute right-0 top-2 text-gold-600 pointer-events-none" />
              </div>
            </div>

            <div>
              <Input label="Time" name="time" type="time" />
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label className="sr-only">Type Your Message</label>
            <textarea
              rows="5"
              placeholder="Type Your Message"
              className="w-full bg-transparent border border-gold-600 rounded-xl p-6 placeholder-gold-700 text-gold-50 focus:outline-none focus:ring-0 focus:border-gold-400 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 md:w-1/2 bg-gold-500 text-[#111] font-semibold py-4 rounded-full shadow-sm hover:brightness-95 transition"
            >
              Send
            </button>
          </div>
        </form>

        {/* small arrow/chevron bottom-right (like screenshot) */}
        <div className="fixed right-6 bottom-6 text-gold-600">
          <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
            ⌃
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
