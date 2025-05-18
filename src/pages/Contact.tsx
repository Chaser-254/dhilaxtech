import React, { useState } from 'react';
import Map from '../components/Map';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to
            our team.
          </p>
        </div>
      </section>
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#e30613] text-4xl mb-4">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <p className="text-gray-600">
                Dhilax Tech
                <br />
                Mombasa, Kenya
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#e30613] text-4xl mb-4">
                <i className="bi bi-envelope"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-gray-600">
                info@dhilaxtech.co.ke
                <br />
                support@dhilaxtech.co.ke
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-[#e30613] text-4xl mb-4">
                <i className="bi bi-telephone"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-gray-600">
                +254 706 602170 
                <br />
                +254 111 363870
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white shadow-lg rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {submitted ? <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                    <i className="bi bi-check-circle text-4xl text-green-600 mb-4"></i>
                    <h3 className="text-2xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="mb-4">
                      Thank you for contacting Dhilax Tech. We'll get back to
                      you shortly.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                      Send Another Message
                    </button>
                  </div> : <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Your name" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Your Email
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Your email" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Message subject" required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e30613] focus:border-transparent" placeholder="Your message..." required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#e30613] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#c8102e] transition-colors">
                      Send Message
                    </button>
                  </form>}
              </div>
            </div>
            <div>
              <div className="bg-white shadow-lg rounded-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="font-medium">Public Holidays</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 hover:bg-[#e30613] hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-[#e30613] hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-[#e30613] hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="bg-gray-100 hover:bg-[#e30613] hover:text-white text-gray-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Map />
        </div>
      </section>
    </div>;
};
export default Contact;