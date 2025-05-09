import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
} from 'react-icons/fa';

import logo from './assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left justify-center">
        {/* Logo & Contact + Payment */}
        <div className="flex flex-col items-start text-base text-black mx-auto">
          <img
            src={logo}
            alt="Flynet Logo"
            className="-ml-7 h-44 w-44"
          />
          <p className='-mt-7'>
            <span className="font-semibold ">Address:</span> B-6/2 Ghansoli THANE WEST, MUMBAI, MAHARASHTRA 400701
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +971 55 217 9325
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:Skycareerinnivation.hrteam@gmail.com" className="hover:text-blue-500">
              Skycareerinnivation.hrteam@gmail.com
            </a>
          </p>
          <div className="flex space-x-3 mt-4 text-2xl text-gray-700">
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          </div>
          {/* Payment Icons */}
          <div className="flex space-x-3 text-4xl text-gray-600 mt-6">
            <FaCcVisa />
            <FaCcMastercard />
          </div>
        </div>

        {/* Links */}
        <div className="mx-auto flex flex-col items-start justify-start space-y-2 text-base text-black">
          {[
            ['Group Charters', '#'],
            ['VIP Charters', '#'],
            ['Ticketing', '#'],
            ['Cargo Services', '#'],
            ['Terms And Conditions', '#'],
            ['Refund Policy', '#'],
            ['Privacy Policy', '#'],
            ['Cookie Policy', '#'],
            ['About', '#'],
            ['Contact', '#'],
          ].map(([text, href], index) => (
            <a
              key={index}
              href={href}
              className="hover:text-yellow-500 font-medium hover:font-semibold transition-colors duration-200"
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2F2E2E] text-center text-white text-base py-10">
        © 2025, All rights reserved with Flynet | Designed & Developed by Contemporary Connect
      </div>
    </footer>
  );
};

export default Footer;
