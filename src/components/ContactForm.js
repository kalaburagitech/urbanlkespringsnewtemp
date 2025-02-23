import React from 'react';

function ContactForm() {
  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      alert('Thank you for your message! We will contact you soon.');
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert('There was an error submitting the form. Please try again.');
    }
  }

  // Handle phone call
  function handleCall() {
    window.location.href = "tel:+15551234567";
  }

  // Handle WhatsApp
  function handleWhatsApp() {
    window.open("https://wa.me/15551234567", "_blank");
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">We're here to help you find your dream home</p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">(555) 123-4567</p>
              <button 
                onClick={handleCall}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full inline-flex items-center"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Call Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-whatsapp text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">(555) 123-4567</p>
              <button 
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full inline-flex items-center"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Chat Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">info@dreamhome.com</p>
              <a 
                href="mailto:info@dreamhome.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full inline-flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form 
                onSubmit={handleSubmit}
                className="contact-form space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Phone Number*</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">
                      <i className="fas fa-phone"></i>
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="propertyType" className="block text-gray-700 mb-2 font-medium">Property Interest</label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    <option value="">Select Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    placeholder="Tell us about your dream property..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-8">Our Office</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Visit Us</h4>
                    <p className="text-blue-100">123 Real Estate St, Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Business Hours</h4>
                    <p className="text-blue-100">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Contact Numbers</h4>
                    <p className="text-blue-100">
                      Office: (555) 123-4567<br />
                      Mobile: (555) 987-6543<br />
                      Fax: (555) 246-8135
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  <h4 className="font-semibold text-xl mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
