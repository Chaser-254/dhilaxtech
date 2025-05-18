import React, { useState } from 'react';
import { servicesList } from '../data/services';
import ServiceCard from '../components/ServiceCard';
const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredServices = servicesList.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="w-full">
      {/* Header */}
      <section className="bg-[#e30613] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive KRA and tax services to help individuals and
            businesses stay compliant.
          </p>
        </div>
      </section>
      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input type="text" placeholder="Search services..." className="w-full py-3 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <div className="absolute right-3 top-3 text-gray-400">
                  <i className="bi bi-search"></i>
                </div>
              </div>
            </div>
          </div>
          {filteredServices.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => <ServiceCard key={service.id} service={service} />)}
            </div> : <div className="text-center py-10">
              <h3 className="text-xl font-semibold">No services found</h3>
              <p className="text-gray-600 mt-2">Try a different search term</p>
            </div>}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                How long does it take to process KRA returns?
              </h3>
              <p className="text-gray-600">
                Most KRA returns are processed within 24 hours after receiving
                all required information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                What information do I need to provide for KRA PIN registration?
              </h3>
              <p className="text-gray-600">
                For KRA PIN registration, you'll need to provide your national
                ID or passport, a valid email address, and phone number. For
                company registration, additional documents like certificate of
                incorporation may be required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Do you offer payment plans for website development?
              </h3>
              <p className="text-gray-600">
                Yes, we offer flexible payment plans for our website development
                services. Typically, we require a 50% deposit to start the
                project with the balance due upon completion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                How can I pay for your services?
              </h3>
              <p className="text-gray-600">
                We accept payments through M-Pesa, bank transfers, and major
                credit/debit cards. For recurring services, we can set up
                automatic payments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;