import React from 'react';

const FeaturedProducts = () => {
  return (
    <section id="featured_products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Tractors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular models designed to meet your farming needs with advanced technology and superior performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-green-100">
              <div className="p-20 bg-green-50 flex items-center justify-center">
                <i className="fa-solid fa-tractor text-6xl text-green-600"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pro Series X750</h3>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Premium</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">75 HP</span>
              </div>
              <p className="text-gray-600 mb-4">
                Perfect for medium to large farms with advanced features for maximum efficiency.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-gas-pump mr-2"></i>
                  <span>Fuel Efficient</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-gear mr-2"></i>
                  <span>Smart Tech</span>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-green-100">
              <div className="p-20 bg-green-50 flex items-center justify-center">
                <i className="fa-solid fa-tractor text-6xl text-green-600"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eco Series E450</h3>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Eco-Friendly</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">45 HP</span>
              </div>
              <p className="text-gray-600 mb-4">
                Environmentally conscious design with optimal performance for small farms.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-leaf mr-2"></i>
                  <span>Eco Engine</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-battery-full mr-2"></i>
                  <span>Low Emission</span>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 bg-green-100">
              <div className="p-20 bg-green-50 flex items-center justify-center">
                <i className="fa-solid fa-tractor text-6xl text-green-600"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Ultra Series U950</h3>
              <div className="flex items-center mb-4">
                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">Heavy Duty</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">95 HP</span>
              </div>
              <p className="text-gray-600 mb-4">
                Heavy-duty performance with smart technology for commercial farming.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-gauge-high mr-2"></i>
                  <span>High Power</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-shield mr-2"></i>
                  <span>Durable</span>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
            View All Products
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
    