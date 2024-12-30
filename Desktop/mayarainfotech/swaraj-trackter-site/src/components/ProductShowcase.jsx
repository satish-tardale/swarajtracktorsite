import React, { useState } from 'react';

const ProductShowcase = () => {
  const [selectedTab, setSelectedTab] = useState('All Models');

  const tabs = ['All Models', 'Compact Series', 'Utility Series', 'Professional Series'];
  const products = [
    {
      id: 1,
      name: 'ProTech 5000',
      category: 'Professional Series',
      enginePower: '85 HP',
      transmission: 'PowerShift',
      liftingCapacity: '2500 kg',
      price: '$45,999',
      badge: 'New',
      badgeColor: 'green-100',
      badgeTextColor: 'green-600',
    },
    {
      id: 2,
      name: 'EcoFarm 3000',
      category: 'Utility Series',
      enginePower: '65 HP',
      transmission: 'Automatic',
      liftingCapacity: '2000 kg',
      price: '$35,999',
      badge: 'Popular',
      badgeColor: 'blue-100',
      badgeTextColor: 'blue-600',
    },
    {
      id: 3,
      name: 'CompactPro 1500',
      category: 'Compact Series',
      enginePower: '45 HP',
      transmission: 'Manual',
      liftingCapacity: '1500 kg',
      price: '$25,999',
      badge: 'Best Value',
      badgeColor: 'yellow-100',
      badgeTextColor: 'yellow-600',
    },
  ];

  return (
    <section id="product_showcase" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-full transition-colors ${
                selectedTab === tab
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter((product) => selectedTab === 'All Models' || product.category === selectedTab)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-12 bg-gray-100 flex items-center justify-center">
                    <i className="fa-solid fa-tractor text-6xl text-green-600"></i>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <i className="fa-regular fa-heart text-gray-600"></i>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <span
                      className={`bg-${product.badgeColor} text-${product.badgeTextColor} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {product.badge}
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Engine Power</span>
                      <span className="font-medium">{product.enginePower}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Transmission</span>
                      <span className="font-medium">{product.transmission}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Lifting Capacity</span>
                      <span className="font-medium">{product.liftingCapacity}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 mt-6 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-gray-500">Starting from</span>
                        <p className="text-2xl font-bold text-gray-800">{product.price}</p>
                      </div>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
            Load More Products
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
