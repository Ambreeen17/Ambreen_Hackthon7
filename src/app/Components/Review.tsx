// components/Reviews.tsx
import React from "react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Alex Stanton",
      role: "CEO at Bukalapak",
      date: "21 July 2022",
      comment: "We are very happy with the service from MORNT App...",
    },
    {
      name: "Skylar Dias",
      role: "CEO at Amazon",
      date: "20 July 2022",
      comment: "We are greatly helped by the services of MORNT Application...",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b py-4">
          <h4 className="font-medium">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.role}</p>
          <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
          <p className="text-xs text-gray-400 mt-1">{review.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
