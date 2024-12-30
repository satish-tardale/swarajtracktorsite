import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-900/90 to-green-700/90 min-h-[85vh]">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 text-white space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Driving the Future of Farming
            </h2>
            <p className="text-lg md:text-xl text-gray-200">
              Revolutionize your agricultural operations with our cutting-edge tractors designed for maximum efficiency and productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Discover Our Tractors
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all duration-300">
                Find Your Dealer
              </button>
            </div>
          </div>

          {/* Quick Navigation Cards */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <i className="fa-solid fa-tractor text-3xl text-white mb-4"></i>
                <h3 className="text-white text-xl font-semibold mb-2">Products</h3>
                <p className="text-gray-200 text-sm">Explore our range of modern tractors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <i className="fa-solid fa-map-marker-alt text-3xl text-white mb-4"></i>
                <h3 className="text-white text-xl font-semibold mb-2">Dealers</h3>
                <p className="text-gray-200 text-sm">Find authorized dealers near you</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <i className="fa-solid fa-tags text-3xl text-white mb-4"></i>
                <h3 className="text-white text-xl font-semibold mb-2">Offers</h3>
                <p className="text-gray-200 text-sm">Latest deals and financing options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
