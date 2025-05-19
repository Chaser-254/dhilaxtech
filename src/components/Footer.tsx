import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dhilax Tech</h3>
            <p className="text-gray-400 mb-4">
              Professional KRA services and technology solutions for individuals
              and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-white">
                  Book Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  KRA NIL Returns
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  KRA PIN Registration
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Tax Compliance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="bi bi-geo-alt mr-2"></i> Nairobi, Kenya
              </li>
              <li className="flex items-center">
                <i className="bi bi-telephone mr-2"></i> +254 706 602170
              </li>
              <li className="flex items-center">
                <i className="bi bi-telephone mr-2"></i> +254 111 363870
              </li>
              <li className="flex items-center">
                <i className="bi bi-envelope mr-2"></i> info@dhilaxtech.co.ke
              </li>
              <li className="flex items-center">
                <i className="bi bi-clock mr-2"></i> Mon-Fri: 8am - 5pm
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Dhilax Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;