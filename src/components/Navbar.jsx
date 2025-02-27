import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <nav className="fixed w-full h-20 flex justify-between items-center px-6 bg-slate-900 text-gray-300 shadow-lg z-50">
      {/* Logo */}
      <div>
        <h1 className="font-thin text-2xl italic font-serif">NS</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/about" className="hover:text-white">About</Link></li>
        <li><Link to="/works" className="hover:text-white">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={toggleNav}>
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center transition-transform duration-300 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <li key={index} className="py-6 text-4xl">
            <Link to={`/${item.toLowerCase()}`} onClick={closeNav}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
