
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amazon-blue text-white">
      <div className="container mx-auto p-4">
        {/* Back to top button */}
        <div className="text-center py-4 bg-amazon-blue bg-opacity-90 hover:bg-opacity-100 transition-all cursor-pointer mb-4">
          <a href="#top" className="text-sm">Back to top</a>
        </div>
        
        {/* Main footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Blog</Link></li>
              <li><Link to="#" className="hover:underline">About Amazon</Link></li>
              <li><Link to="#" className="hover:underline">Investor Relations</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Devices</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="#" className="hover:underline">Sell products on Amazon</Link></li>
              <li><Link to="#" className="hover:underline">Sell on Amazon Business</Link></li>
              <li><Link to="#" className="hover:underline">Sell apps on Amazon</Link></li>
              <li><Link to="#" className="hover:underline">Become an Affiliate</Link></li>
              <li><Link to="#" className="hover:underline">Advertise Your Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Amazon Payment Products</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="#" className="hover:underline">Amazon Business Card</Link></li>
              <li><Link to="#" className="hover:underline">Shop with Points</Link></li>
              <li><Link to="#" className="hover:underline">Reload Your Balance</Link></li>
              <li><Link to="#" className="hover:underline">Amazon Currency Converter</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Let Us Help You</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="#" className="hover:underline">Amazon and COVID-19</Link></li>
              <li><Link to="#" className="hover:underline">Your Account</Link></li>
              <li><Link to="#" className="hover:underline">Your Orders</Link></li>
              <li><Link to="#" className="hover:underline">Shipping Rates & Policies</Link></li>
              <li><Link to="#" className="hover:underline">Returns & Replacements</Link></li>
              <li><Link to="#" className="hover:underline">Help</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer logo and copyright */}
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex flex-col items-center justify-center">
            <Link to="/" className="mb-2">
              <span className="font-bold text-xl">amazon</span>
              <span className="text-amazon-orange">.clone</span>
            </Link>
            <div className="text-xs text-gray-300 text-center">
              <p>&copy; Amazon Clone {new Date().getFullYear()} - This is a prototype for demonstration purposes</p>
              <p className="mt-1">Not affiliated with Amazon.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
