import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  useEffect(() => {
    const spots = document.querySelectorAll('.moving-spot');
    spots.forEach((spot) => {
      const delay = Math.random() * 5 + 's';
      const duration = Math.random() * 20 + 15 + 's';
      spot.style.animationDelay = delay;
      spot.style.animationDuration = duration;
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8888/api/contacts', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 sm:px-12 relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="moving-spot bg-yellow-600 opacity-50 w-48 h-48 rounded-full blur-xl absolute top-20 left-10"></div>
        <div className="moving-spot bg-gradient-to-r from-blue-500 to-indigo-600 opacity-40 w-40 h-40 rounded-full blur-xl absolute top-40 right-20"></div>
        <div className="moving-spot bg-gradient-to-r from-pink-300 to-purple-600 opacity-30 w-48 h-48 rounded-full blur-xl absolute bottom-40 left-24"></div>
        <div className="moving-spot bg-gradient-to-r from-green-500 to-yellow-500 opacity-25 w-40 h-40 rounded-full blur-xl absolute bottom-10 right-10"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-500 mt-2">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-4">
              Natsons is committed to providing the best experience. If you have any inquiries, concerns, or feedback, feel free to contact us.
            </p>
            <div className="mb-6">
              <p className="font-medium text-gray-700">Email:</p>
              <p className="text-gray-600">natsons@gmail.com</p>
            </div>
            <div className="mb-6">
              <p className="font-medium text-gray-700">Phone:</p>
              <p className="text-gray-600">+91-9998812345</p>
            </div>
            <div className="mb-6">
              <p className="font-medium text-gray-700">Office Address:</p>
              <p className="text-gray-600">SRM University Sonepat, Haryana</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
            {status && (
              <div
                className={`mb-4 p-3 rounded-lg ${
                  status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Your Message"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
