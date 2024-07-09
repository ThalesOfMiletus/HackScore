import React from 'react';

interface CardProps {
  title: string;
  count: number;
}

const Card: React.FC<CardProps> = ({ title, count }) => {
  return (
    <div className="bg-orange-400 shadow-md rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
      <p className="text-4xl font-semibold">{count}</p>
    </div>
  );
};

export default Card;
