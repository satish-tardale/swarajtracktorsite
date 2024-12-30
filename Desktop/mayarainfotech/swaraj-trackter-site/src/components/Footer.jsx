import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">TractorPro</h3>
            <p className="text-gray-400">Driving the future of farming with innovative agricultural solutions and trusted machinery.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Dealers</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-green-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Service Centers</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Parts & Accessories</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-4">
              <div className="relative">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none" />
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TractorPro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button className="fixed bottom-8 right-8 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </section>
  );
};

export default Footer;
