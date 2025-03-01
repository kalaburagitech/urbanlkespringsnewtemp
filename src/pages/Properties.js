import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaHome } from 'react-icons/fa';  // Importing icons
import { useModal } from "../context/modal-context"; // Importing the custom modal hook
import GradientText from './GradientText/GradientText';

function PropertiesPage() {
  // Sample properties data (replace with real data)
  const properties = [
    {
      id: 1,
      title: "3 BHK Apartment",
      location: "Bangalore South",
      price: "₹1.62 Cr - 2.30 Cr",
      beds: 3,
      baths: 3,
      sqft: 1622,
      image: "/images/property5.jpg",
    },
    {
      id: 2,
      title: "3 BHK Apartment",
      location: "Bangalore South",
      price: "₹1.62 Cr - 2.30 Cr",
      beds: 3,
      baths: 3,
      sqft: 1622,
      image: "/images/property1.jpg",
    },
    {
      id: 3,
      title: "3.5 BHK Apartment",
      location: "Bangalore South",
      price: "₹1.62 Cr - 2.30 Cr",
      beds: 3,
      baths: 3,
      sqft: 2168,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    }
  ];

  // Get the openModal function from the modal context
  const { openModal } = useModal();

  const handleViewDetails = (property) => {
    // You can pass the property data to the modal here
    openModal(property);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        <GradientText colors={["#ff8c00", "#ff0000", "#0000ff"]} animationSpeed={5}>
          Properties
          </GradientText>
          </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="property-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4">{property.location}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">{property.price}</p>

              {/* Improved icons layout */}
              <div className="flex items-center mb-2 space-x-4">
                <div className="flex items-center">
                  <FaBed className="text-blue-600 text-xl mr-2" />
                  <p className="text-gray-600">{property.beds} Beds</p>
                </div>
                <div className="flex items-center">
                  <FaBath className="text-blue-600 text-xl mr-2" />
                  <p className="text-gray-600">{property.baths} Baths</p>
                </div>
                <div className="flex items-center">
                  <FaHome className="text-blue-600 text-xl mr-2" />
                  <p className="text-gray-600">{property.sqft} Sqft</p>
                </div>
              </div>

              {/* The View Details link now triggers the modal */}
              <button
                onClick={() => handleViewDetails(property)} // Trigger modal with property data
                className="text-blue-600 hover:underline"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertiesPage;
