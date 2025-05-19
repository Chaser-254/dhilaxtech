import React from 'react';
import { Link } from 'react-router-dom';
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar
}) => {
  return <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#e30613] font-bold text-2xl">
              Dhilax Tech
            </span>
            <button onClick={toggleSidebar} className="text-gray-500 hover:text-[#e30613]">
              <i className="bi bi-x-lg text-2xl"></i>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-[#e30613] py-2 px-4 hover:bg-gray-100 rounded-md flex items-center" onClick={toggleSidebar}>
              <i className="bi bi-house-door mr-3"></i> Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#e30613] py-2 px-4 hover:bg-gray-100 rounded-md flex items-center" onClick={toggleSidebar}>
              <i className="bi bi-grid-1x2 mr-3"></i> Services
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-[#e30613] py-2 px-4 hover:bg-gray-100 rounded-md flex items-center" onClick={toggleSidebar}>
              <i className="bi bi-calendar-check mr-3"></i> Book Now
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#e30613] py-2 px-4 hover:bg-gray-100 rounded-md flex items-center" onClick={toggleSidebar}>
              <i className="bi bi-envelope mr-3"></i> Contact
            </Link>
          </nav>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <Link to="/booking" className="bg-[#e30613] text-white py-2 px-4 rounded-md block text-center hover:bg-[#c8102e]" onClick={toggleSidebar}>
              Book Service Now
            </Link>
          </div>
        </div>
      </div>
    </>;
};
export default Sidebar;