import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from farmers who have transformed their agricultural operations with our tractors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <img src="https://avatar.iran.liara.run/public" alt="Farmer" className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">John Anderson</h3>
                <p className="text-gray-600">Wheat Farmer, Kansas</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-700 italic">"The ProTech 5000 has revolutionized our farming operations. The fuel efficiency and advanced features have significantly improved our productivity."</p>
            </div>
            <p className="text-green-600 font-medium">ProTech 5000 Owner</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <img src="https://avatar.iran.liara.run/public" alt="Farmer" className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Sarah Martinez</h3>
                <p className="text-gray-600">Vineyard Owner, California</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-alt"></i>
              </div>
              <p className="text-gray-700 italic">"The compact design of the EcoFarm 3000 is perfect for our vineyard. The maneuverability and precision control are exceptional."</p>
            </div>
            <p className="text-green-600 font-medium">EcoFarm 3000 Owner</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <img src="https://avatar.iran.liara.run/public" alt="Farmer" className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">Mike Thompson</h3>
                <p className="text-gray-600">Dairy Farmer, Wisconsin</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-700 italic">"The customer service and support have been outstanding. The financing options made it possible for us to upgrade our equipment."</p>
            </div>
            <p className="text-green-600 font-medium">CompactPro 1500 Owner</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1500+</div>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
            <p className="text-gray-600">Support Available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <p className="text-gray-600">Service Centers</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300">
            Read More Success Stories
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
     