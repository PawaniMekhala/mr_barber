import React from 'react';
import '../fonts/MervaleScript-Regular.otf';
// import Logo from '../assets/logo.png';


// const Navbar = () => {
//   return (
//     <div>
//       {/* Navbar */}
      
//       {/* D:\Projects\Mr Barber\mr-barber\src\assets\logo.png
//       D:\Projects\Mr Barber\mr-barber\src\components\Navbar.jsx */}
// <nav className="bg-white border-gray-200 dark:bg-gray-900">
//     <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//             <img src={Logo} className="h-8" alt="Mr Barber Logo" />
//             <span className="text-3xl font-bold mervale-font self-center whitespace-nowrap text-yellow-600">Mr Barber</span>
//         </a>
//         <div className="flex items-center space-x-6 rtl:space-x-reverse">
//             <a href="tel:5541251234" className="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
//             <a href="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
//         </div>
//     </div>
// </nav>
// <nav className="bg-gray-50 dark:bg-gray-700">
//     <div className="max-w-screen-xl px-4 py-3 mx-auto">
//         <div className="flex items-center">
//             <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
//                 <li>
//                     <a href="/home" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
//                 </li>
//                 <li>
//                     <a href="/company" className="text-gray-900 dark:text-white hover:underline">Company</a>
//                 </li>
//                 <li>
//                     <a href="/team" className="text-gray-900 dark:text-white hover:underline">Team</a>
//                 </li>
//                 <li>
//                     <a href="/features" className="text-gray-900 dark:text-white hover:underline">Features</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
//     </div>
//   );
// };

const Navbar = () => {
    return (
      <div>
        {/* upper Navbar */}
        <nav className="bg-black text-yellow-500 p-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* <img src={Logo} alt="Mr Barber" className="" /> */}
                <div className="text-4xl font-bold mervale-font self-center whitespace-nowrap text-yellow-500">
                    Mr Barber
                </div>
                <div className="flex space-x-6 text-white">
                    <ul className="flex">
                        <li className="mr-6">
                            <a href="/" className="hover:text-yellow-400">Home</a>
                        </li>
                        <li className="mr-6">
                            <a href="/about-us" className="hover:text-yellow-400">About Us</a>
                        </li>
                        <li className="mr-6">
                            <a href="services" className="hover:text-yellow-400">Services</a>
                        </li>
                        <li className="mr-6">
                            <a href="pricing" className="hover:text-yellow-400">Pricing</a>
                        </li>
                        <li className="mr-6">
                            <a href="reviews" className="hover:text-yellow-400">Reviews</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* bottom navbar */}
        <nav className="bg-black text-yellow-500 p-8">
            <div className="container mx-auto flex justify-between items-center">
            <div className="absolute top-20 right-0 mt-2 mr-4 flex space-x-4">
                <button className="bg-yellow-600 text-black px-4 py-1 rounded-md hover:bg-yellow-700 shadow-lg shadow-yellow-700/10 ">
                    Appointment
                </button>
                <button data-ripple-light="true" className="bg-yellow-600 text-black px-4 py-1 rounded-md hover:bg-yellow-700 shadow-lg shadow-yellow-700/10">
                    Staff
                </button>
            </div>
            </div>
        </nav>

        {/* Bottom Border */}
      <div className="h-1 bg-yellow-600"></div>
      </div>
    );
  };
  

export default Navbar;

