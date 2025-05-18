import React, { useState } from 'react';
import { servicesList } from '../data/services';
const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  return <div className="w-full">
      {/* Header */}
      <section className="bg-[#e30613] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below to book any of our services. We'll get back
            to you within 24 hours.
          </p>
        </div>
      </section>
      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {submitted ? <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                <i className="bi bi-check-circle text-4xl text-green-600 mb-4"></i>
                <h3 className="text-2xl font-semibold mb-2">
                  Booking Received!
                </h3>
                <p className="mb-4">
                  Thank you for booking with Dhilax Tech. We'll contact you
                  shortly to confirm your appointment.
                </p>
                <button onClick={() => setSubmitted(false)} className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  Book Another Service
                </button>
              </div> : <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Your email" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Your phone number" required />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Select Service
                    </label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" required>
                      <option value="">Select a service</option>
                      {servicesList.map(service => <option key={service.id} value={service.name}>
                          {service.name} - {service.price}
                        </option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                      Preferred Date
                    </label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" required />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Any specific requirements or questions..."></textarea>
                  </div>
                </div>
                <div className="mt-8">
                  <button type="submit" className="w-full bg-[#e30613] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#c8102e] transition-colors">
                    Book Service
                  </button>
                </div>
              </form>}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Booking Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#e30613] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Request</h3>
              <p className="text-gray-600">
                Fill out our booking form with your service requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e30613] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirmation</h3>
              <p className="text-gray-600">
                We'll contact you to confirm details and provide payment
                information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e30613] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Service Delivery</h3>
              <p className="text-gray-600">
                Our team will process your request according to the agreed
                timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#e30613] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Completion</h3>
              <p className="text-gray-600">
                We'll provide all necessary documentation and follow-up support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Booking;