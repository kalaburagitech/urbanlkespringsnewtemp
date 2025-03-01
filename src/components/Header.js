import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Dock from './Dock/Dock';  // Import Dock component
import GradientText from '../pages/GradientText/GradientText';

// Define items for mobile dock navigation with scroll functionality
const dockItems = [
  {
    icon: <i className="fas fa-home" />, label: 'Home', to: 'home'
  },
  {
    icon: <i className="fas fa-building" />, label: 'Properties', to: 'properties'
  },
  {
    icon: <i className="fas fa-info-circle" />, label: 'About', to: 'about'
  },
  {
    icon: <i className="fas fa-envelope" />, label: 'Contact', to: 'contact'
  }
];



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
              <span className="text-2xl font-bold text-blue-600 text-[#FFD700]">
              <GradientText colors={["#ff8c00", "#ff0000", "#0000ff"]} animationSpeed={5}>
                   URBANLAKESPRINGS
             </GradientText>
             </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <ScrollLink to="home" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">Home</ScrollLink>
              <ScrollLink to="properties" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">Properties</ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">About</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600">Contact</ScrollLink>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation with Dock Effect */}
      <nav className="md:hidden mobile-nav fixed bottom-0 left-0 w-full bg-transparent shadow-none z-20">
        {/* You can set the width as 100% to make sure it stretches the entire screen */}
        <Dock items={dockItems}/>
      </nav>
    </div>
  );
}

export default Header;
