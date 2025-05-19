import React from 'react';
import { Link } from 'react-router-dom';
interface NavbarProps {
  toggleSidebar: () => void;
}
const Navbar: React.FC<NavbarProps> = ({
  toggleSidebar
}) => {
  return <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
<<<<<<< HEAD
            <button onClick={toggleSidebar} className="md:hidden mr-4 text-gray-700 hover:text-[#e30613] focus:outline-none">
=======
            <button onClick={toggleSidebar} className="mr-4 text-gray-700 hover:text-[#e30613] focus:outline-none">
>>>>>>> 6bd9e27b47e3b01ff1d3c30f2f032fb4e4a4c46d
              <i className="bi bi-list text-2xl"></i>
            </button>
            <Link to="/" className="flex items-center">
              <span className="text-[#e30613] font-bold text-2xl">
                Dhilax Tech
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#e30613] font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#e30613] font-medium">
              Services
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-[#e30613] font-medium">
              Book Now
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#e30613] font-medium">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link to="/booking" className="bg-[#e30613] text-white px-5 py-2 rounded-md hover:bg-[#c8102e] transition-colors">
              Book Service
            </Link>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;