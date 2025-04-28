
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      
      <Link to={link} className="block">
        <div className="h-[120px] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/300x200?text=Category';
            }}
          />
        </div>
        <p className="text-xs text-blue-600 mt-2 hover:underline hover:text-amazon-orange transition-colors">Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
