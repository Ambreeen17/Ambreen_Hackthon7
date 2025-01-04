import React from 'react';

interface CardProps {
  title: string;
  value: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, children }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-2xl font-bold">{value}</div>
      {children}
    </div>
  );
};

export default Card;