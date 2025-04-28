
import { Product } from '@/components/ProductCard';

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
    price: 199.99,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    category: "electronics"
  },
  {
    id: "2",
    title: "Apple 2023 MacBook Pro Laptop with M3 chip",
    price: 1599.99,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/61RnQM+JBOL._AC_UY218_.jpg",
    category: "electronics"
  },
  {
    id: "3",
    title: "SodaStream Art Sparkling Water Maker Bundle",
    price: 149.95,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71+-oAyKCwL._AC_UY218_.jpg",
    category: "kitchen"
  },
  {
    id: "4",
    title: "COSRX Snail Mucin 96% Power Repairing Essence 3.38 fl.oz",
    price: 16.90,
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/61itGzp+H6L._SX466_.jpg",
    category: "beauty"
  },
  {
    id: "5",
    title: "Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones",
    price: 169.95,
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/61u-OaDUdOS._AC_UY218_.jpg",
    category: "electronics"
  },
  {
    id: "6",
    title: "Amazon Basics 8-Sheet Paper Shredder",
    price: 36.99,
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg",
    category: "office"
  },
  {
    id: "7",
    title: "Nintendo Switch with Neon Blue and Neon Red Joy‑Con",
    price: 299.99,
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/71ivrWiYkJL._SX522_.jpg",
    category: "gaming"
  },
  {
    id: "8",
    title: "Ninja AF101 Air Fryer, 4 Qt, Black/gray",
    price: 89.99,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SX522_.jpg",
    category: "kitchen"
  },
  {
    id: "9",
    title: "Kindle Paperwhite (8 GB) – Now with a 6.8\" display",
    price: 139.99,
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/51QCk82iGcL._AC_SY466_.jpg",
    category: "electronics"
  },
  {
    id: "10",
    title: "SAMSUNG 55-Inch Class Crystal 4K UHD Smart Television",
    price: 397.99,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX522_.jpg",
    category: "electronics"
  },
  {
    id: "11",
    title: "Kasa Smart Light Bulbs, Color Changing Dimmable Smart WiFi",
    price: 24.99,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/611jF+X4M6L._AC_SX522_.jpg",
    category: "smart-home"
  },
  {
    id: "12",
    title: "Roku Express 4K+ | Streaming Player HD/4K/HDR",
    price: 29.00,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/81bkpyVuwzL._AC_UL320_.jpg",
    category: "electronics"
  }
];

export const categories = [
  {
    id: "1",
    title: "Electronics & Devices",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "/category/electronics"
  },
  {
    id: "2",
    title: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    link: "/category/home-kitchen"
  },
  {
    id: "3",
    title: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    link: "/category/beauty"
  },
  {
    id: "4",
    title: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "/category/fashion"
  }
];

export const dealProducts = mockProducts.filter((_, i) => i % 3 === 0);
export const recommendedProducts = mockProducts.filter((_, i) => i % 4 === 0);
export const bestSellers = mockProducts.sort(() => Math.random() - 0.5).slice(0, 5);
