import React, { useRef } from "react";
import {
  CalendarIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const AppointmentForm = () => {
  // reference for date input
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const openDatePicker = () => {
    if (dateRef.current && dateRef.current.showPicker) {
      dateRef.current.showPicker(); // Opens native calendar
    }
  };

  const openTimePicker = () => {
    if (timeRef.current && timeRef.current.showPicker) {
      timeRef.current.showPicker();
    }
  };

  const Input = ({ label, ...props }) => (
    <div className="w-full">
      <label className="sr-only">{label}</label>
      <input
        {...props}
        placeholder={label}
        className="w-full bg-transparent border-b border-gold-600 placeholder-gold-700 text-gold-300 py-2 focus:outline-none focus:border-gold-400 transition"
      />
    </div>
  );

  return (
    <section
      id="appoinment"
      className="min-h-screen flex items-start justify-center bg-[#0f0f0f] px-6 py-16"
    >
      <div className="max-w-3xl w-full">
        <h1 className="text-center font-playfair text-3xl md:text-4xl text-gold-700 mb-12">
          Make Appointment
        </h1>

        <form className="space-y-8">
          {/* name, email and phone section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="md:col-span-2">
              <Input label="Name" name="name" type="text" />
            </div>

            <Input label="Email Address" name="email" type="email" />
            <Input label="Phone number" name="phone" type="tel" />

            {/* Category dropdown  */}
            <div className="relative">
              <label className="sr-only">Category</label>
              <select
                className="w-full bg-transparent border-b border-gold-600 py-2 pl-0 pr-8 appearance-none placeholder-gold-700 text-[#876806] focus:outline-none focus:border-gold-400"
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

            {/* Barber dropdown */}
            <div className="relative">
              <label className="sr-only">Select Barber</label>
              <select
                className="w-full bg-transparent border-b border-gold-600 py-2 pl-0 pr-8 appearance-none placeholder-gold-700 text-[#876806] focus:outline-none focus:border-gold-400
                "
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

            {/* Date Input with custom icon */}
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <label className="sr-only">Appointment Date</label>
                <input
                  ref={dateRef}
                  type="date"
                  className="w-full bg-transparent border-b border-gold-600 py-2 pr-8 placeholder-gold-700 text-gold-50 focus:outline-none focus:border-gold-400"
                />

                {/* Make icon clickable */}
                <CalendarIcon
                  onClick={openDatePicker}
                  className="w-5 h-5 absolute right-0 top-2 text-gold-600 cursor-pointer
                  [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Time input */}
            {/* <div className="relative w-full">
              <label className="sr-only">Appointment Time</label>
              <input
                ref={timeRef}
                type="time"
                className="w-full bg-transparent border-b border-gold-600 py-2 pr-8 placeholder-gold-700 text-gold-50 focus:outline-none focus:border-gold-400
                [color-scheme:dark]"
              />
              <ClockIcon
                onClick={openTimePicker}
                className="w-5 h-5 absolute right-0 top-2 text-gold-600 cursor-pointer"
              />
            </div> */}

            <div className="relative w-full">
              <span
                className="absolute left-0 top-2 text-gold-700 pointer-events-none"
                id="timePlaceholder"
              >
                Select time
              </span>

              <input
                ref={timeRef}
                type="time"
                className="w-full bg-transparent border-b border-gold-600 py-2 pr-8 text-gold-50 focus:outline-none focus:border-gold-400 [color-scheme:dark]"
                onChange={(e) => {
                  const placeholder =
                    document.getElementById("timePlaceholder");
                  if (placeholder)
                    placeholder.style.display = e.target.value
                      ? "none"
                      : "block";
                }}
              />
              <ClockIcon
                onClick={openTimePicker}
                className="w-5 h-5 absolute right-0 top-2 text-gold-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label className="sr-only">Type Your Message</label>
            <textarea
              rows="5"
              placeholder="Type Your Message"
              className="w-full bg-transparent border border-gold-600 rounded-xl p-6 placeholder-gold-700 text-gold-700 focus:outline-none focus:ring-0 focus:border-gold-400 resize-none"
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

        {/* bottom arrow */}
        <div className="fixed right-6 bottom-6 text-gold-600">
          <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
            ⌃
          </span>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
