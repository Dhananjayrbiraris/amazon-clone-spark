
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="w-full h-[300px] sm:h-[400px] bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <img 
            src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158';
            }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent" />
      </div>
      
      {/* Content overlaid on hero */}
      <div className="absolute bottom-8 left-0 w-full px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white bg-opacity-90 p-5 rounded-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-2">Spring Deals are here</h2>
            <p className="mb-4">Save big on smart home devices, fashion, electronics, and more.</p>
            <Button className="amazon-button flex items-center">
              Shop all deals <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
