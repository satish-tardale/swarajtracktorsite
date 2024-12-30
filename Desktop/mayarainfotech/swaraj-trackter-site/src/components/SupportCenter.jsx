import React from 'react';

const SupportCenter = () => {
  return (
    <section id="support_center" className="py-20 bg-gray-50">
      {/* Sticky Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 group">
          <i className="fa-solid fa-comments text-2xl"></i>
          <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg shadow-lg text-gray-800 whitespace-nowrap hidden group-hover:block">
            Need Help? Chat with us!
          </span>
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Support Center</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions or get in touch with our support team for assistance.</p>
        </div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-green-600 mb-4">
              <i className="fa-solid fa-tractor text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Product Support</h3>
            <p className="text-gray-600 mb-4">Technical specifications, manuals, and operation guides</p>
            <button className="text-green-600 hover:text-green-700 font-medium">View FAQs →</button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-green-600 mb-4">
              <i className="fa-solid fa-wrench text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Service & Maintenance</h3>
            <p className="text-gray-600 mb-4">Maintenance schedules, repairs, and service centers</p>
            <button className="text-green-600 hover:text-green-700 font-medium">View FAQs →</button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-green-600 mb-4">
              <i className="fa-solid fa-credit-card text-4xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Warranty & Finance</h3>
            <p className="text-gray-600 mb-4">Warranty information and financing queries</p>
            <button className="text-green-600 hover:text-green-700 font-medium">View FAQs →</button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <span className="text-lg font-semibold text-gray-800">How do I schedule a maintenance service?</span>
              <i className="fa-solid fa-chevron-down text-green-600"></i>
            </button>
            <div className="px-6 pb-6 text-gray-600">
              Contact your nearest dealer through our dealer locator or call our service hotline. Regular maintenance is recommended every 500 hours of operation.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <span className="text-lg font-semibold text-gray-800">What warranty coverage is included?</span>
              <i className="fa-solid fa-chevron-down text-green-600"></i>
            </button>
            <div className="px-6 pb-6 text-gray-600">
              Our tractors come with a comprehensive 2-year warranty covering manufacturing defects and mechanical issues. Extended warranty options are available.
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <button className="w-full flex items-center justify-between p-6 text-left">
              <span className="text-lg font-semibold text-gray-800">How can I order replacement parts?</span>
              <i className="fa-solid fa-chevron-down text-green-600"></i>
            </button>
            <div className="px-6 pb-6 text-gray-600">
              Genuine replacement parts can be ordered through any authorized dealer. Please have your tractor model and serial number ready.
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300">
              <i className="fa-solid fa-phone mr-2"></i>
              Call Support
            </button>
            <button className="inline-flex items-center bg-white text-gray-800 px-8 py-3 rounded-full border-2 border-gray-200 hover:border-green-600 transition-all duration-300">
              <i className="fa-solid fa-envelope mr-2"></i>
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportCenter;
      