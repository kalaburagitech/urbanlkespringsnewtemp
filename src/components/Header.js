import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div data-name="header-wrapper">
      <header data-name="header" className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div data-name="logo" className="text-2xl font-bold text-blue-600">
              <i className="fas fa-home mr-2"></i>
              DreamHome
            </div>
            <nav data-name="navigation" className="hidden md:flex space-x-8">
              <Link to="#home" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="#properties" className="text-gray-600 hover:text-blue-600">Properties</Link>
              <Link to="#about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link to="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav data-name="mobile-navigation" className="md:hidden mobile-nav fixed bottom-0 left-0 w-full bg-white shadow-lg z-20">
        <div className="grid grid-cols-4 gap-1">
          <Link to="#home" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-home text-lg mb-1"></i>
            <span className="text-xs">Home</span>
          </Link>
          <Link to="#properties" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-building text-lg mb-1"></i>
            <span className="text-xs">Properties</span>
          </Link>
          <Link to="#about" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-info-circle text-lg mb-1"></i>
            <span className="text-xs">About</span>
          </Link>
          <Link to="#contact" className="flex flex-col items-center py-2 text-gray-600 hover:text-blue-600">
            <i className="fas fa-envelope text-lg mb-1"></i>
            <span className="text-xs">Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
