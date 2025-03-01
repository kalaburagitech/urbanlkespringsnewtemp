import React from 'react';
import GradientText from '../pages/GradientText/GradientText';

function Features() {
  const features = [
    {
      icon: "fa-house",
      title: "Wide Selection",
      description: "Browse through thousands of properties that match your criteria"
    },
    {
      icon: "fa-dollar-sign",
      title: "Best Prices",
      description: "Get the best market prices and deals for your dream home"
    },
    {
      icon: "fa-handshake",
      title: "Expert Agents",
      description: "Work with professional agents who care about your needs"
    }
  ];

  return (
    <section id="features" data-name="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 data-name="features-title" className="text-3xl font-bold text-center mb-12">
          <GradientText colors={["#ff8c00", "#ff0000", "#0000ff"]} animationSpeed={5}>            
          Why Choose Us
          </GradientText>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-name={`feature-card-${index}`}
              className="feature-card bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl text-blue-600 mb-4">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
