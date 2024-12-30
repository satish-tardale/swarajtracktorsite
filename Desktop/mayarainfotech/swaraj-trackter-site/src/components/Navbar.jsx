import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-green-800">TractorPro</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Dealers</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Financing</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors duration-300">Support</a>
            <a href="#" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-green-600">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
