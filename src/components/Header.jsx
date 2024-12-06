import React from 'react';
import logo from '../assets/logo.png';
import profile from '../assets/Profile.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />
        <ul className="flex space-x-10">
          <li>
            <Link
              to="/"
              className="font-bold text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Discovery
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-bold text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-bold text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex space-x-5">
          <img
            src={profile}
            alt="Profile"
            className="h-8 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          />
          <Link to="/cart">
            <div className="relative">
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {/* Example: Display cart count dynamically */}
                0
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700 hover:text-blue-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.343 3.354A4.992 4.992 0 019 9h6a5 5 0 014.657 3.354L21 15H7M7 15h14m-3 0a4 4 0 01-4 4H8a4 4 0 01-4-4H5m1-10h2"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
