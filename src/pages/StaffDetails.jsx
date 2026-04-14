// import { useParams } from "react-router-dom";

// export default function StaffDetails() {
//   const { id } = useParams();

//   return (
//     <div className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-3xl text-gold-700">Staff Details - ID: {id}</h1>

//       <p className="mt-4">
//         Here you will show appointments for this staff member.
//       </p>
//     </div>
//   );
// }

// pages/Roshan.jsx
import { CheckCircle, XCircle, MessageSquare } from "lucide-react";

const appointments = Array(6).fill({
  customer: "Jake White",
  email: "jakewhite123@gmail.com",
  date: "07th September",
  time: "09 a.m",
  service: "Hair Colour",
});

const Roshan = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg text-yellow-700">
              Roshan Silva
            </h2>
            <p className="text-sm text-gray-600">11 New Appointments</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 md:gap-8 mt-4 md:mt-0 text-sm md:text-base text-yellow-700 font-medium">
          <span className="cursor-pointer">Dashboard</span>
          <span className="cursor-pointer">Upcoming</span>
          <span className="cursor-pointer">Completed</span>
          <span className="cursor-pointer">Daily Summary</span>
          <span className="cursor-pointer">History</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {appointments.map((item, index) => (
          <div
            key={index}
            className="border border-yellow-600 rounded-2xl p-4 bg-white flex justify-between items-center shadow-sm"
          >
            {/* Left Content */}
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">Customer</span>{" "}
                <span className="ml-4 text-gray-700">{item.customer}</span>
              </p>
              <p>
                <span className="font-semibold">Email</span>{" "}
                <span className="ml-8 text-gray-500">{item.email}</span>
              </p>
              <p>
                <span className="font-semibold">Date</span>{" "}
                <span className="ml-10 text-gray-700">{item.date}</span>
              </p>
              <p>
                <span className="font-semibold">Time</span>{" "}
                <span className="ml-10 text-gray-700">{item.time}</span>
              </p>
              <p>
                <span className="font-semibold">Service</span>{" "}
                <span className="ml-5 text-gray-700">{item.service}</span>
              </p>
            </div>

            {/* Right Icons */}
            <div className="flex flex-col items-end justify-between h-full">
              {/* Message Icon */}
              <MessageSquare className="text-yellow-700 cursor-pointer" />

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <CheckCircle className="text-green-600 cursor-pointer" />
                <XCircle className="text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roshan;
