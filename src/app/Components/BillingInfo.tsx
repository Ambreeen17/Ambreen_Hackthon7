/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const App = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Billing Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Town or city"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Rental Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Rental Info</h2>
            <div>
              <h3 className="font-semibold">Pick - Up</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <select className="border p-2 rounded w-full">
                  <option value="">Select your city</option>
                  <option value="newyork">New York</option>
                  <option value="miami">Miami</option>
                  <option value="newjersey">New Jersey</option>
                  <option value="florida">Florida</option>
                  <option value="houston">Houston</option>
                </select>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                />
              </div>
              <input
                type="time"
                className="border p-2 rounded w-full my-2"
              />
            </div>
            <div>
              <h3 className="font-semibold mt-4">Drop - Off</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                <select className="border p-2 rounded w-full">
                  <option value="">Select your city</option>
                  <option value="newyork">New York</option>
                  <option value="miami">Miami</option>
                  <option value="newjersey">New Jersey</option>
                  <option value="florida">Florida</option>
                  <option value="houston">Houston</option>
                </select>
                <input
                  type="date"
                  className="border p-2 rounded w-full"
                />
              </div>
              <input
                type="time"
                className="border p-2 rounded w-full my-2"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                <span className="flex items-center gap-4">
                  Credit Card
                  <img src="Visa (3).png" alt="Visa" className="h-6 w-auto" />
                  <img src="mc.png" alt="MasterCard" className="h-6 w-auto" />
                </span>
              </label>
              {paymentMethod === "credit" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border p-2 rounded w-full"
                  />
                </div>
              )}
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <span className="flex items-center gap-4">
                  PayPal
                  <img src="PayPal (1).png" alt="PayPal" className="h-6 w-auto" />
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "bitcoin"}
                  onChange={() => setPaymentMethod("bitcoin")}
                />
                <span className="flex items-center gap-4">
                  Bitcoin
                  <img src="Bitcoin.png" alt="Bitcoin" className="h-6 w-auto" />
                </span>
              </label>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Confirmation</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>
                  I agree with sending marketing and newsletter emails. No spam,
                  promised!
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>
                  I agree with the terms and conditions and privacy policy.
                </span>
              </label>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
                Rent Now
              </button>
              <p className="text-gray-500 text-center text-sm mt-2">
                All your data are safe. We use advanced security measures.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Rental Summary */}
        <div>
          <div className="border rounded-lg bg-white shadow-md p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Rental Summary
            </h2>
            <div className="flex items-center mb-4">
              <img
                src="Look.png"
                alt="Nissan GT-R"
                className="w-20 h-12 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-base sm:text-lg font-medium">Nissan GT-R</h3>
                <p className="text-yellow-500">★★★★☆ 4.5</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Tax:</span>
                <span>$0</span>
              </div>
              <button className="w-full bg-gray-200 py-1 rounded mb-3 hover:bg-gray-300">
                Apply Promo Code
              </button>
              <div className="flex justify-between font-bold text-lg">
                <span>Total Rental Price:</span>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
