
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, price, rating, image } = product;
  
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-amazon-orange text-amazon-orange" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-4 w-4 fill-amazon-orange text-amazon-orange" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };
  
  return (
    <div className="flex flex-col h-full bg-white rounded-md shadow hover:shadow-lg transition-shadow p-4">
      <Link to={`/product/${id}`} className="flex justify-center">
        <div className="h-40 flex items-center justify-center">
          <img 
            src={image} 
            alt={title} 
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/200x200?text=Product+Image';
            }}
          />
        </div>
      </Link>
      
      <div className="mt-4 flex-grow">
        <Link to={`/product/${id}`} className="text-sm hover:text-blue-600 line-clamp-2">{title}</Link>
        
        <div className="flex items-center mt-1">
          {renderStars()}
          <span className="text-xs ml-1 text-gray-500">({Math.floor(rating * 100)})</span>
        </div>
        
        <div className="mt-1">
          <span className="text-lg font-semibold">${price.toFixed(2)}</span>
          {Math.random() > 0.5 && (
            <span className="ml-2 text-xs text-gray-500 line-through">${(price * 1.2).toFixed(2)}</span>
          )}
        </div>
        
        <div className="text-xs text-green-600 mt-1">
          {Math.random() > 0.7 ? 'In Stock' : 'Only a few left'}
        </div>
        
        {Math.random() > 0.8 && (
          <div className="mt-1">
            <span className="text-xs bg-red-100 text-red-800 px-1 py-0.5 rounded">Deal</span>
          </div>
        )}
      </div>
      
      <div className="mt-4">
        <Button className="amazon-button w-full" size="sm">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
