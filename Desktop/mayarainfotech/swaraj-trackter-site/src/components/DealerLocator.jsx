import React from 'react';

const DealerLocator = () => {
  return (
    <section id="dealer_locator" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Your Nearest Dealer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Locate authorized TractorPro dealers and service centers in your area for sales, support, and maintenance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Panel */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              {/* Search Input */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">Enter Location</label>
                <div className="relative">
                  <input type="text" id="location" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter ZIP code or city" />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-600">
                    <i className="fa-solid fa-search"></i>
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Filter By:</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox text-green-600 rounded" />
                    <span className="text-gray-700">Sales Center</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox text-green-600 rounded" />
                    <span className="text-gray-700">Service Center</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox text-green-600 rounded" />
                    <span className="text-gray-700">Parts Dealer</span>
                  </label>
                </div>
              </div>

              {/* Distance Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Distance Range</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>Within 10 km</option>
                  <option>Within 25 km</option>
                  <option>Within 50 km</option>
                  <option>Within 100 km</option>
                </select>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Search Dealers
              </button>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-green-50 rounded-xl overflow-hidden h-[600px] relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-green-100 flex items-center justify-center">
                <div className="text-center">
                  <i className="fa-solid fa-map-location-dot text-6xl text-green-600 mb-4"></i>
                  <p className="text-gray-600">Interactive Map Would Load Here</p>
                </div>
              </div>

              {/* Results List */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800">Nearby Dealers</h3>
                  <span className="text-sm text-gray-600">3 Found</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer">
                    <i className="fa-solid fa-location-dot text-green-600 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-800">TractorPro Main Dealer</h4>
                      <p className="text-sm text-gray-600">123 Farming Avenue, Agricultural District</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-green-600">2.5 km away</span>
                        <button className="text-sm text-blue-600 hover:underline">Get Directions</button>
                      </div>
                    </div>
                  </div>
                  {/* Repeat for more dealers if necessary */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocator;
