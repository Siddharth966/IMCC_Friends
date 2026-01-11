import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Calendar, Phone, Star, UserPlus, Camera } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-2" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4 mr-2" /> },
    { name: 'Celebration', path: '/celebration', icon: <Calendar className="w-4 h-4 mr-2" /> },
    { name: 'Gallery', path: '/gallery', icon: <Camera className="w-4 h-4 mr-2" /> },
    { name: 'Special', path: '/special', icon: <Star className="w-4 h-4 mr-2" /> },
    { name: 'Contact', path: '/contact', icon: <Phone className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-r from-green-50 to-orange-50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">

          {/* LEFT SECTION */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-green-500 shadow-lg">
              <span className="text-2xl font-bold text-white">IF</span>
            </div>

            {/* Desktop Title */}
            <div className="hidden sm:block">
              <div className="text-2xl font-bold">
                <span className="text-orange-600">IMCC</span>
                <span className="text-green-600 ml-1">Friends</span>
              </div>
              <p className="text-xs text-gray-500 -mt-1">
                Classmates • Memories • Forever
              </p>
            </div>

            {/* Mobile Title */}
            <div className="block sm:hidden leading-tight">
              <div className="text-lg font-bold">
                <span className="text-orange-600">IMCC</span>
                <span className="text-green-600 ml-1">Friends</span>
              </div>
              <p className="text-[10px] text-gray-500 -mt-0.5">
                Classmates • Memories
              </p>
            </div>
          </div>

          {/* RIGHT Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white hover:shadow-md hover:text-orange-600 text-gray-700"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-green-500 rounded-lg hover:shadow-lg transition-all duration-200">
              <UserPlus className="w-4 h-4 mr-2" />
              Namaskar Dosto
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-green-500 text-white">
              <Star className="w-5 h-5" />
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-white shadow-md text-gray-700 hover:text-orange-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 animate-slideDown">
            <div className="mb-4 pb-4 border-b border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <button className="w-full flex items-center justify-center p-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-green-500 rounded-lg hover:shadow-lg">
              <UserPlus className="w-4 h-4 mr-2" />
              Namaskar Dosto !!
            </button>

            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">Designed By Siddharth Maurya</p>
            </div>
          </div>
        )}
      </div>

      {/* Correct style tag */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
