import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: Install `lucide-react` for icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-orange-600">IMCC</span>
          <span className="text-green-600 ml-2">Friends</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-12 font-semibold">
          <li><a href="/" className="text-gray-700 hover:text-orange-500">Home</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-orange-500">About</a></li>
          <li><a href="/celebration" className="text-gray-700 hover:text-orange-500">Celebration</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-orange-500">Contact</a></li>
          <li><a href="/special" className="text-gray-700 hover:text-orange-500">Special</a></li>
        </ul>

        {/* Hamburger icon (Mobile) */}
        <div className="md:hidden z-20" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6 text-orange-600" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 px-4 space-y-4 font-semibold text-center bg-white shadow-lg rounded-lg py-4">
          <li><a href="/" className="block text-gray-700 hover:text-orange-500">Home</a></li>
          <li><a href="/about" className="block text-gray-700 hover:text-orange-500">About</a></li>
          <li><a href="/celebration" className="block text-gray-700 hover:text-orange-500">Celebration</a></li>
          <li><a href="/contact" className="block text-gray-700 hover:text-orange-500">Contact</a></li>
          <li><a href="/special" className="block text-gray-700 hover:text-orange-500">Special</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
