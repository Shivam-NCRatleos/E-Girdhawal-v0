import React from "react";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => (
  <footer className="bg-gray-900 text-white mt-10">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-700">
      <div className="flex items-center space-x-2">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          E-Girdhawal
        </Link>
      </div>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="/" className="hover:text-green-400 transition">
          Home
        </a>
        <a href="/upload" className="hover:text-green-400 transition">
          Mobile Upload
        </a>
        <a href="/contact" className="hover:text-green-400 transition">
          Contact
        </a>
        <a href="/gallery" className="hover:text-green-400 transition">
          Gallery
        </a>
      </div>
      <div className="mt-4 sm:mt-0 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} E-Girdhawal. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;