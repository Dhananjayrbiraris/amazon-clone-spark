
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import CategoryGrid from '@/components/CategoryGrid';
import Footer from '@/components/Footer';
import { mockProducts, categories, dealProducts, recommendedProducts, bestSellers } from '@/data/mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-6">
          {/* Categories grid */}
          <CategoryGrid categories={categories} />
          
          {/* Featured deals section */}
          <ProductGrid 
            title="Today's Deals - All with Prime Delivery" 
            products={dealProducts} 
          />
          
          {/* Recommended products section */}
          <ProductGrid 
            title="Recommended for you" 
            products={recommendedProducts} 
          />
          
          {/* Best sellers */}
          <div className="bg-white p-4 rounded-md shadow my-8">
            <h2 className="text-xl font-bold mb-4">Best Sellers</h2>
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4 w-max">
                {bestSellers.map((product) => (
                  <div key={product.id} className="w-40 shrink-0">
                    <div className="flex flex-col h-full">
                      <div className="h-24 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="max-h-full max-w-full object-contain" 
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://placehold.co/200x200?text=Product+Image';
                          }}
                        />
                      </div>
                      <div className="mt-2">
                        <p className="text-xs line-clamp-2">{product.title}</p>
                        <p className="font-semibold mt-1">${product.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Full product list */}
          <ProductGrid 
            title="Popular Products" 
            products={mockProducts} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
