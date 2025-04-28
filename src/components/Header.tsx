
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-amazon-blue text-white">
        {/* Top navigation bar */}
        <div className="container mx-auto flex items-center justify-between p-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl">amazon</span>
            <span className="text-amazon-orange">.clone</span>
          </Link>
          
          {/* Search bar */}
          <div className="hidden sm:flex flex-1 mx-4 items-center">
            <div className="flex w-full max-w-3xl relative">
              <input 
                type="text" 
                placeholder="Search Amazon" 
                className="p-2 h-10 flex-grow rounded-l-md focus:outline-none text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-amazon-yellow hover:bg-amber-400 p-2 h-10 rounded-r-md transition-colors">
                <Search className="h-6 w-6 text-amazon-blue" />
              </button>
            </div>
          </div>
          
          {/* Right side navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="hidden sm:flex flex-col text-xs">
              <span>Hello, Sign in</span>
              <span className="font-bold">Account & Lists</span>
            </Link>
            
            <Link to="/orders" className="hidden sm:flex flex-col text-xs">
              <span>Returns</span>
              <span className="font-bold">& Orders</span>
            </Link>
            
            <Link to="/cart" className="flex items-center">
              <div className="relative">
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-amazon-orange text-black rounded-full flex items-center justify-center text-xs">
                  0
                </span>
                <ShoppingCart className="h-6 w-6" />
              </div>
              <span className="hidden sm:inline ml-1 font-bold">Cart</span>
            </Link>
            
            <Button variant="ghost" size="icon" className="sm:hidden">
              <User className="h-6 w-6" />
            </Button>
            
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Bottom navigation bar */}
        <div className="bg-amazon-blue bg-opacity-90 text-white py-1">
          <div className="container mx-auto flex items-center space-x-4 overflow-x-auto text-sm">
            <Link to="#" className="whitespace-nowrap hover:underline flex items-center px-2">
              <Menu className="h-4 w-4 mr-1" /> All
            </Link>
            <Link to="/category/deals" className="whitespace-nowrap hover:underline px-2">Today's Deals</Link>
            <Link to="/category/customer-service" className="whitespace-nowrap hover:underline px-2">Customer Service</Link>
            <Link to="/category/registry" className="whitespace-nowrap hover:underline px-2">Registry</Link>
            <Link to="/category/gift-cards" className="whitespace-nowrap hover:underline px-2">Gift Cards</Link>
            <Link to="/category/sell" className="whitespace-nowrap hover:underline px-2">Sell</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile search bar */}
      <div className="bg-amazon-blue p-2 sm:hidden">
        <div className="flex w-full relative">
          <input 
            type="text" 
            placeholder="Search Amazon" 
            className="p-2 h-10 flex-grow rounded-l-md focus:outline-none text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-amazon-yellow hover:bg-amber-400 p-2 h-10 rounded-r-md transition-colors">
            <Search className="h-6 w-6 text-amazon-blue" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
