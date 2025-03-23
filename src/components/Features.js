import React, { useState, useEffect } from 'react';
import GradientText from '../pages/GradientText/GradientText';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'; // Import volume icons

function Features() {
  const [isMuted, setIsMuted] = useState(true); // Initial state set to mute
  const [isVisible, setIsVisible] = useState(false); // For fade-in effect

  // Function to toggle mute/unmute
  const toggleAudio = () => {
    setIsMuted(!isMuted);
  };

  // Use useEffect to add fade-in animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Start fade-in animation after the component is mounted
    }, 100); // 100ms delay for smoother effect
    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  const features = [
    {
      icon: "fa-house",
      title: "Property Selection",  // Updated title
      description: "Browse through thousands of properties that match your criteria."
    },
    {
      icon: "fa-dollar-sign",
      title: "Competitive Pricing",  // Updated title
      description: "Get the best market prices and deals for your dream home."
    },
    {
      icon: "fa-handshake",
      title: "Real Estate Professionals",  // Replaced "Expert Agents" with "Real Estate Professionals"
      description: "Work with professionals who care about your needs and provide expert advice."
    }
  ];

  return (
    <section id="features" data-name="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
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

      <div className="container mx-auto px-4 mt-3">
        <h2 className="text-3xl font-bold text-center mb-12">
          <GradientText colors={["#FFD700", "#FF5733", "#4079ff"]}>
            Watch Our NCC Urban Lake Springs Video
          </GradientText>
        </h2>

        {/* Centered Video Container with animation */}
        <div className={`relative mx-auto w-full max-w-3xl mt-3 px-4 transition-transform duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Local Video (replace with your local file path) */}
          <div className="video-container mt-3">
            <video
              src="/images/AT-WORK.mp4" // Replace with the correct path to your video file in the public folder
              title="Animated Video"
              className="w-full h-full"
              autoPlay
              muted={isMuted} // Dynamically mute/unmute
              loop
              controls
            />
          </div>

          {/* Speaker Icon with animation */}
          {/* <div
            className="absolute bottom-5 right-5 cursor-pointer text-white text-3xl transform transition-all duration-300 ease-in-out"
            onClick={toggleAudio} // Toggle mute/unmute on click
            style={{ transform: isVisible ? 'scale(1)' : 'scale(0.5)' }} // Scale animation for the icon
          >
            {isMuted ? (
              <FaVolumeMute /> // Muted icon
            ) : (
              <FaVolumeUp /> // Unmuted icon
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Features;
