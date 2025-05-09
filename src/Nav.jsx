import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './assets/logo.png'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? 'text-gray-100 font-medium' : 'text-yellow-400'
    } hover:text-gray-200`;

  return (
    <nav className="bg-[#141414] shadow-md  py-1 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
          <img src={logo} alt="Logo" className="h-28 w-28" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg mx-auto">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/career" className={linkClasses}>
            Career
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses}>
            Contact
          </NavLink>
        </ul>

        {/* Apply Now Button */}
        <div className="hidden md:block">
          <button className="bg-[#E2C072]   px-4 py-2 rounded-lg text-sm">
           <a href="#book"> Apply Now</a>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
  <div className="md:hidden px-6 pb-4 mt-2 text-base">
    <div className="flex flex-col items-center gap-y-3">
      <NavLink to="/" className={linkClasses} onClick={() => setMenuOpen(false)}>
        Home
      </NavLink>
      <NavLink to="/career" className={linkClasses} onClick={() => setMenuOpen(false)}>
        Career
      </NavLink>
      <NavLink to="/about" className={linkClasses} onClick={() => setMenuOpen(false)}>
        About
      </NavLink>
      <NavLink to="/contact" className={linkClasses} onClick={() => setMenuOpen(false)}>
        Contact
      </NavLink>
      <button className="bg-[#E2C072]   px-4 py-2 rounded-lg">
       <a href="#book"> Apply Now</a>
      </button>
    </div>
  </div>
)}

    </nav>
  );
};

export default Nav;
