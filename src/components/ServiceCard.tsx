import React from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../data/services';
interface ServiceCardProps {
  service: Service;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  service
}) => {
  return <div className="service-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
          <i className={`${service.icon} text-[#e30613] text-xl`}></i>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.price}</p>
        <Link to="/booking" className="bg-[#e30613] text-white py-2 px-4 rounded-md text-center hover:bg-[#c8102e] transition-colors">
          Book Now
        </Link>
      </div>
    </div>;
};
export default ServiceCard;