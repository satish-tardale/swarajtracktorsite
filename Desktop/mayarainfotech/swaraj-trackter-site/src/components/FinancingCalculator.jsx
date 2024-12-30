import React, { useState } from 'react';

const FinancingCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(4.5);

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = tenure;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  return (
    <section id="financing_calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Financing Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your monthly payments and explore our flexible financing options tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">EMI Calculator</h3>

            {/* Loan Amount Slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Loan Amount</label>
                <span className="text-green-600 font-bold">$<span id="loanAmount">{loanAmount}</span></span>
              </div>
              <input
                type="range"
                min="10000"
                max="200000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-500">$10,000</span>
                <span className="text-sm text-gray-500">$200,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Loan Tenure</label>
                <span className="text-green-600 font-bold"><span id="tenure">{tenure}</span> months</span>
              </div>
              <input
                type="range"
                min="12"
                max="84"
                step="12"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-500">12 months</span>
                <span className="text-sm text-gray-500">84 months</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <label className="text-gray-700 font-medium">Interest Rate</label>
                <span className="text-green-600 font-bold"><span id="interestRate">{interestRate}</span>%</span>
              </div>
              <input
                type="range"
                min="3"
                max="12"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between mt-1">
                <span className="text-sm text-gray-500">3%</span>
                <span className="text-sm text-gray-500">12%</span>
              </div>
            </div>

            {/* Monthly Payment Display */}
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <div className="text-center">
                <p className="text-gray-600 mb-2">Estimated Monthly Payment</p>
                <h4 className="text-4xl font-bold text-green-600">${calculateMonthlyPayment()}</h4>
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium">
              Apply for Financing
            </button>
          </div>

          {/* Loan Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Loan Options</h3>

            {/* Standard Loan */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Standard Loan</h4>
                  <p className="text-gray-600">Traditional financing with competitive rates</p>
                </div>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Popular</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  Fixed interest rates from 4.5%
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  Loan tenure up to 7 years
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  Quick approval process
                </li>
              </ul>
              <button className="text-green-600 font-medium hover:text-green-700">Learn More →</button>
            </div>

            {/* Special Financing */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Special Financing</h4>
                  <p className="text-gray-600">Limited time offers for qualified buyers</p>
                </div>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Special</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  0% APR for first 12 months
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  No down payment required
                </li>
                <li className="flex items-center text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-3"></i>
                  Flexible payment options
                </li>
              </ul>
              <button className="text-green-600 font-medium hover:text-green-700">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancingCalculator;
      