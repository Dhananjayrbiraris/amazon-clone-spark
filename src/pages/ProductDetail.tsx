
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Button } from '@/components/ui/button';
import { Star, ChevronDown, ChevronUp, Truck, ShoppingCart, Heart } from 'lucide-react';
import { mockProducts, recommendedProducts } from '@/data/mockData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [expandDescription, setExpandDescription] = useState(false);
  
  // Find the product based on id from URL
  const product = mockProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-12 flex-grow">
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
            <Link to="/">
              <Button className="amazon-button">Return to Home Page</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Render stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation breadcrumb */}
          <div className="text-sm mb-4">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            {' > '}
            <Link to={`/category/${product.category}`} className="text-blue-600 hover:underline">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            {' > '}
            <span className="text-gray-600">{product.title.slice(0, 20)}...</span>
          </div>
          
          {/* Product detail section */}
          <div className="bg-white p-4 rounded-md shadow mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product image */}
              <div className="flex justify-center items-center p-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-w-full max-h-80 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/300x300?text=Product+Image';
                  }}
                />
              </div>
              
              {/* Product information */}
              <div>
                <h1 className="text-xl font-medium mb-2">{product.title}</h1>
                
                <div className="flex items-center mb-2">
                  <div className="flex mr-2">
                    {renderStars()}
                  </div>
                  <Link to="#reviews" className="text-sm text-blue-600 hover:underline">
                    {Math.floor(product.rating * 100)} ratings
                  </Link>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <div className="flex items-baseline">
                    <span className="text-sm">Price:</span>
                    <span className="text-red-600 text-2xl ml-2">${product.price.toFixed(2)}</span>
                    {Math.random() > 0.5 && (
                      <span className="ml-2 text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                    )}
                  </div>
                  
                  {Math.random() > 0.7 && (
                    <div className="text-sm mt-1">
                      <span className="text-green-600 font-medium">Save ${(product.price * 0.2).toFixed(2)} (20%)</span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="text-sm">
                    <span className="font-medium">About this item:</span>
                    <p className={`mt-1 text-gray-700 ${expandDescription ? '' : 'line-clamp-3'}`}>
                      {product.description || `This is a high-quality ${product.title.toLowerCase()} designed to meet all your needs. It features premium materials, excellent craftsmanship, and a user-friendly design. Perfect for home, office, or on-the-go use. This product is backed by our satisfaction guarantee and excellent customer support.`}
                    </p>
                    <button 
                      className="text-blue-600 hover:underline flex items-center mt-1"
                      onClick={() => setExpandDescription(!expandDescription)}
                    >
                      {expandDescription ? (
                        <>Show less <ChevronUp className="h-4 w-4 ml-1" /></>
                      ) : (
                        <>Show more <ChevronDown className="h-4 w-4 ml-1" /></>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Buy box */}
              <div className="border rounded-md p-4">
                <div className="text-xl font-medium mb-2">${product.price.toFixed(2)}</div>
                
                <div className="text-sm mb-4">
                  {Math.random() > 0.3 ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-orange-500">Only {Math.floor(Math.random() * 10) + 1} left in stock</span>
                  )}
                </div>
                
                {/* Quantity selector */}
                <div className="mb-4">
                  <label htmlFor="quantity" className="block text-sm mb-1">Quantity:</label>
                  <select 
                    id="quantity" 
                    className="border rounded-md px-2 py-1 w-16"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                
                {/* Add to Cart button */}
                <Button className="primary-button w-full mb-2">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </Button>
                
                {/* Buy Now button */}
                <Button className="amazon-button w-full mb-4">Buy Now</Button>
                
                {/* Wishlist */}
                <Button variant="outline" className="w-full mb-6">
                  <Heart className="h-4 w-4 mr-2" /> Add to List
                </Button>
                
                {/* Shipping info */}
                <div className="text-sm">
                  <div className="flex items-start mb-2">
                    <Truck className="h-4 w-4 mr-2 shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium">FREE delivery </span> 
                      {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  
                  <div>Sold by <span className="text-blue-600 hover:underline cursor-pointer">Amazon.com</span></div>
                  <div>Returns eligible through {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product details accordion (simplified) */}
          <div className="bg-white rounded-md shadow mb-8">
            <div className="p-4 border-b">
              <h2 className="text-lg font-medium">Product Details</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Technical Details</h3>
                  <ul className="text-sm space-y-1">
                    <li><span className="font-medium">Brand:</span> Amazon</li>
                    <li><span className="font-medium">Model:</span> {product.id}</li>
                    <li><span className="font-medium">Color:</span> Various</li>
                    <li><span className="font-medium">Item Weight:</span> 1.2 pounds</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Additional Information</h3>
                  <ul className="text-sm space-y-1">
                    <li><span className="font-medium">ASIN:</span> B0{Math.floor(Math.random() * 10000)}</li>
                    <li><span className="font-medium">Customer Reviews:</span> {product.rating}/5</li>
                    <li><span className="font-medium">Date First Available:</span> {new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recommended products */}
          <ProductGrid 
            title="Customers who bought this item also bought" 
            products={recommendedProducts} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
