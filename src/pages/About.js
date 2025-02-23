import React from 'react';

function AboutPage() {
  return (
    <div data-name="about-page" className="pt-16">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">About DreamHome</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" 
              alt="Our Office"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Trusted Real Estate Partner</h2>
            <p className="text-gray-600 mb-6">
              With over 20 years of experience in the real estate market, DreamHome has helped thousands 
              of clients find their perfect property. Our team of expert agents is dedicated to providing 
              exceptional service and making your real estate dreams come true.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To provide outstanding real estate services while maintaining the highest level of 
                  professionalism and integrity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Trust, Excellence, Innovation, and Customer Satisfaction are the cornerstones of 
                  our business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
