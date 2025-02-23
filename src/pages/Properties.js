import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetailPage() {
  const { id } = useParams();  // Get the property ID from the URL

  // Sample properties data (you can replace this with real data)
  const properties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      beds: 5,
      baths: 4,
      sqft: 4500
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      beds: 3,
      baths: 3,
      sqft: 3200
    },
    // Add more properties as needed...
  ];

  // Find the property with the matching ID
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;  // Handle case where property is not found
  }

  return (
    <div className="property-detail">
      <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
      <img src={property.image} alt={property.title} className="w-full h-96 object-cover mb-6" />
      <p className="text-lg mb-4">{property.location}</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">{property.price}</p>
      <div className="details">
        <p><strong>Beds:</strong> {property.beds}</p>
        <p><strong>Baths:</strong> {property.baths}</p>
        <p><strong>Square Feet:</strong> {property.sqft} sqft</p>
      </div>
    </div>
  );
}

export default PropertyDetailPage;
