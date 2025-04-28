
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import ProductGrid from '@/components/ProductGrid';
import { recommendedProducts } from '@/data/mockData';

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "1",
      title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
      price: 199.99,
      image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
      quantity: 1
    },
    {
      id: "7",
      title: "Nintendo Switch with Neon Blue and Neon Red Joy‑Con",
      price: 299.99,
      image: "https://m.media-amazon.com/images/I/71ivrWiYkJL._SX522_.jpg",
      quantity: 1
    }
  ]);
  
  const [subtotal, setSubtotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  
  // Recalculate totals when cart changes
  useEffect(() => {
    setSubtotal(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
    setItemCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);
  
  // Handle quantity change
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Handle item removal
  const removeItem = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  
  // Empty cart UI
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-8 flex-grow">
          <div className="bg-white p-6 rounded-md shadow">
            <div className="flex flex-col items-center text-center py-8">
              <div className="text-4xl mb-4">🛒</div>
              <h1 className="text-2xl font-bold mb-2">Your Amazon Cart is empty</h1>
              <p className="text-gray-600 mb-6">Shop today's deals</p>
              <Link to="/">
                <Button className="amazon-button">Continue shopping</Button>
              </Link>
            </div>
          </div>
          
          <ProductGrid
            title="Recommended for you"
            products={recommendedProducts}
          />
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main cart items */}
            <div className="lg:col-span-3">
              <div className="bg-white p-4 rounded-md shadow">
                <div className="border-b pb-2 mb-4">
                  <h1 className="text-2xl font-bold">Shopping Cart</h1>
                  <div className="text-sm text-right">Price</div>
                </div>
                
                {/* Cart items */}
                {cart.map(item => (
                  <div key={item.id} className="py-4 border-b last:border-0">
                    <div className="flex items-start">
                      {/* Item image */}
                      <div className="w-28 h-28 mr-4">
                        <Link to={`/product/${item.id}`}>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://placehold.co/200x200?text=Product+Image';
                            }}
                          />
                        </Link>
                      </div>
                      
                      {/* Item details */}
                      <div className="flex-grow">
                        <Link to={`/product/${item.id}`} className="text-sm hover:text-blue-600">
                          {item.title}
                        </Link>
                        
                        <div className="text-sm text-green-600 mt-1">In Stock</div>
                        
                        <div className="text-sm mt-1">
                          <span className="mr-2">
                            <Checkbox id={`gift-${item.id}`} />
                            <label htmlFor={`gift-${item.id}`} className="ml-1">This is a gift</label>
                          </span>
                        </div>
                        
                        {/* Item actions */}
                        <div className="flex items-center mt-2">
                          <select
                            className="border rounded-md px-1 py-0.5 mr-2 text-sm"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          
                          <span className="text-sm text-gray-500 px-2 border-l border-r">|</span>
                          
                          <button 
                            className="ml-2 text-sm text-blue-600 hover:underline"
                            onClick={() => removeItem(item.id)}
                          >
                            Delete
                          </button>
                          
                          <span className="text-sm text-gray-500 px-2 border-l border-r">|</span>
                          
                          <button className="ml-2 text-sm text-blue-600 hover:underline">
                            Save for later
                          </button>
                        </div>
                      </div>
                      
                      {/* Item price */}
                      <div className="text-right font-medium">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Subtotal */}
                <div className="text-right py-2">
                  <span>
                    Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'}): 
                    <span className="font-bold"> ${subtotal.toFixed(2)}</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-md shadow">
                <div>
                  <span>
                    Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'}): 
                    <span className="font-bold"> ${subtotal.toFixed(2)}</span>
                  </span>
                </div>
                
                <div className="mt-2 mb-4">
                  <Checkbox id="gift-option" />
                  <label htmlFor="gift-option" className="ml-1 text-sm">This order contains a gift</label>
                </div>
                
                <Button className="primary-button w-full">
                  Proceed to checkout
                </Button>
              </div>
            </div>
          </div>
          
          {/* Recommended products */}
          <div className="mt-8">
            <ProductGrid
              title="Customers who bought items in your cart also bought"
              products={recommendedProducts}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
