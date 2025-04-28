
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center bg-gray-100 py-12 px-4">
        <div className="text-center max-w-md">
          <div className="text-amazon-orange text-9xl font-bold mb-4">404</div>
          <h1 className="text-2xl font-bold mb-4">Looking for something?</h1>
          <p className="text-gray-600 mb-8">
            We're sorry. The Web address you entered is not a functioning page on our site.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="amazon-button w-full">Go to Amazon's Home Page</Button>
            </Link>
            <div className="text-sm text-gray-600">
              Or try using the search bar at the top of the page
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
