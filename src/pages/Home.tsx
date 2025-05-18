import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/services';
import ServiceCard from '../components/ServiceCard';
const Home: React.FC = () => {
  // Display only featured services (first 6)
  const featuredServices = servicesList.slice(0, 6);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#e30613] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional KRA & Tax Services
              </h1>
              <p className="text-xl mb-8">
                We help individuals and businesses navigate Kenya's tax system
                with ease. Let us handle your KRA compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/services" className="bg-white text-[#e30613] px-6 py-3 rounded-md font-semibold text-center hover:bg-gray-100 transition-colors">
                  Our Services
                </Link>
                <Link to="/booking" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold text-center hover:bg-white hover:text-[#e30613] transition-colors">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Tax services" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Dhilax Tech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#e30613] text-4xl mb-4">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Expertise</h3>
              <p className="text-gray-600">
                Our team has years of experience with KRA systems and tax
                compliance procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#e30613] text-4xl mb-4">
                <i className="bi bi-lightning-charge"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround times for all services, with most completed
                within 24 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#e30613] text-4xl mb-4">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Rates</h3>
              <p className="text-gray-600">
                Competitive pricing for all our services with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We offer a comprehensive range of tax and business services to help
            you stay compliant and focus on what matters most.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map(service => <ServiceCard key={service.id} service={service} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="bg-[#e30613] text-white px-6 py-3 rounded-md font-semibold inline-block hover:bg-[#c8102e] transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Dhilax Tech made my KRA compliance so easy. They handled my NIL
                returns quickly and at an affordable price."
              </p>
              <div className="font-semibold">John Kamau</div>
              <div className="text-sm text-gray-500">Business Owner</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I was struggling with my VAT returns until I found Dhilax Tech.
                Their team is professional and knowledgeable."
              </p>
              <div className="font-semibold">Mary Wanjiku</div>
              <div className="text-sm text-gray-500">Shop Owner</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The website they developed for my business is fantastic! Clean
                design, fast, and exactly what I needed."
              </p>
              <div className="font-semibold">David Mwangi</div>
              <div className="text-sm text-gray-500">Restaurant Owner</div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-[#e30613] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us handle your KRA compliance needs while you focus on growing
            your business.
          </p>
          <Link to="/booking" className="bg-white text-[#e30613] px-8 py-3 rounded-md font-semibold inline-block hover:bg-gray-100 transition-colors">
            Book a Service Now
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;