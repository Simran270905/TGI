import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 border-b border-gray-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">

        {/* Logo */}
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full"></div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-indigo-600">Home</Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
          </li>

          <li className="hover:text-indigo-600 cursor-pointer">Services</li>
          <li className="hover:text-indigo-600 cursor-pointer">Our Clients</li>
          <li className="hover:text-indigo-600 cursor-pointer">Testimonials</li>
        </ul>

        {/* Button */}
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700">
          Find Talent
        </button>

      </div>
    </nav>
  );
}