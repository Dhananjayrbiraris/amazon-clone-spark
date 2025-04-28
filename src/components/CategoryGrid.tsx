
import React from 'react';
import CategoryCard from './CategoryCard';

interface Category {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
      {categories.map((category) => (
        <CategoryCard 
          key={category.id}
          title={category.title}
          image={category.image}
          link={category.link}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
