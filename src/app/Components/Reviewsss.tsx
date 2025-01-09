import React from 'react';
import Image from 'next/image';

const reviews = [
  {
    name: "Alex Stanton",
    role: "CEO at Hukkupick",
    date: "21 July 2022",
    rating: 4,
    comment:
      "We are very happy with the service from the MONRENT App. Monrent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    avatar: "Profill.png", // Replace with real images
  },
  {
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    rating: 5,
    comment:
      "We are greatly helped by the services of the MONRENT Application. Monrent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    avatar: "Profill (1).png", // Replace with real images
  },
];

const ReviewSection: React.FC = () => {
  return (
    <div className="bg-gray-50  py-10 px-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
          
              <Image
                src={review.avatar}
                alt={review.name}
                width={100}
                height={100}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-4 mt-4 md:mt-0">
                <h3 className="text-lg font-semibold text-gray-700">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.role}</p>
                <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                <div className="mt-3 flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={
                        starIndex < review.rating
                          ? "currentColor"
                          : "none"
                      }
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-5 h-5 text-yellow-400 ${
                        starIndex < review.rating
                          ? "fill-current"
                          : "stroke-current"
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-300">
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
