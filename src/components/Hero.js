import React from 'react';

function Hero() {
  return (
    <div data-name="hero" className="hero-section h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-4">
          Find Your Dream Home
        </h1>
        <p data-name="hero-subtitle" className="text-xl md:text-2xl mb-8">
          Let us help you find the perfect property
        </p>
        <a
          href="#contact"
          data-name="cta-button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Hero;
