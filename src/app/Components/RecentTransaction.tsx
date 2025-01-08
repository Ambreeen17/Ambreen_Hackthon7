/* eslint-disable @next/next/no-img-element */
import React from "react";

const transactions = [
  {
    name: "Nissan GT-R",
    price: "$80.00",
    date: "20 July",
    image: "car.png", // Nissan GT-R image
  },
  {
    name: "Koenigsegg",
    price: "$99.00",
    date: "21 July",
    image: "image 7.png", // Koenigsegg placeholder
  },
  {
    name: "Rolls-Royce",
    price: "$96.00",
    date: "22 July",
    image: "car (1).png", // Rolls-Royce image placeholder
  },
  {
    name: "CR-V",
    price: "$80.00",
    date: "23 July",
    image: "car (6).png", // Honda CR-V placeholder
  },
];

const RecentTransactions: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h3 className="font-bold text-gray-700 mb-4">Recent Transactions</h3>
      <ul className="text-gray-600 space-y-4">
        {transactions.map((tx) => (
          <li
            key={tx.name}
            className="flex items-center justify-between border-b pb-4 last:border-b-0"
          >
            <div className="flex items-center">
              <img
                src={tx.image}
                alt={tx.name}
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm md:text-base">{tx.name}</h4>
                <p className="text-xs md:text-sm text-gray-500">{tx.date}</p>
              </div>
            </div>
            <span className="font-bold text-sm md:text-base">{tx.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
