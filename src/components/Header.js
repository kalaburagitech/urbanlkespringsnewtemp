// Header.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
  return (
    <div>
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Text Container */}
            <div className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="RealEstate Logo" 
                width={100} 
                height={100} 
                priority 
                className="h-[40px] w-[80px] object-contain" 
              />
              <span className="text-2xl font-bold text-blue-600">Urbanlakesprings</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <ScrollLink to="home" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">Home</ScrollLink>
              <ScrollLink to="properties" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">Properties</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">About</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">Contact</ScrollLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden mobile-nav fixed bottom-0 left-0 w-full bg-white shadow-lg z-20">
        <div className="grid grid-cols-4 gap-1">
          <ScrollLink to="home" smooth={true} duration={500} className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-home text-lg mb-1"></i>
            <span className="text-xs">Home</span>
          </ScrollLink>
          <ScrollLink to="properties" smooth={true} duration={500} className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-building text-lg mb-1"></i>
            <span className="text-xs">Properties</span>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-info-circle text-lg mb-1"></i>
            <span className="text-xs">About</span>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-envelope text-lg mb-1"></i>
            <span className="text-xs">Contact</span>
          </ScrollLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
