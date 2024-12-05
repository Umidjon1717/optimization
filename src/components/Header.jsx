import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import profile from '../assets/Profile.png';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex justify-between items-center">

        <img src={logo} alt="Logo" className="h-12" />

  
        <ul className="hidden md:flex space-x-10">
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
              to="/about"
              className="font-bold text-lg cursor-pointer hover:text-blue-500 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
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
            <img
              src={cart}
              alt="Cart"
              className="h-8 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
