import React, { useState, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // Social Media Icons

function BlogPage() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  // Blog post data
  const blogPosts = {
    "bangalore-real-estate-investment": {
      title: "Why Bangalore is the Best Place for Real Estate Investment",
      date: "March 1, 2025",
      imageUrl: "/images/property1.jpg",
      content: "Detailed content about Bangalore Real Estate investment...",
      category: "Real Estate",
    },
    "future-luxury-apartments-bangalore": {
      title: "The Future of Luxury Apartments in Bangalore",
      date: "February 20, 2025",
      imageUrl: "/images/property2.jpg",
      content: "Detailed content about luxury apartments...",
      category: "Luxury Living",
    },
    "features-modern-home": {
      title: "Top 5 Features to Look for in a Modern Home",
      date: "February 10, 2025",
      imageUrl: "/images/property5.jpg",
      content: "Detailed content about modern home features...",
      category: "Home Features",
    },
  };

  // Handle the click on the blog card
  const handleCardClick = (slug) => {
    // Toggle the selection (show or hide blog content)
    setSelectedSlug(selectedSlug === slug ? null : slug);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-[#1F2937]">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Object.keys(blogPosts).map((slug) => (
            <div key={slug} className="group cursor-pointer">
              <div
                className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                onClick={() => handleCardClick(slug)} // Handle click for smooth scroll and content expansion
              >
                <img
                  src={blogPosts[slug].imageUrl}
                  alt={blogPosts[slug].title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                    {blogPosts[slug].title}
                  </h3>
                  <p className="text-sm text-gray-500">{blogPosts[slug].date}</p>
                  <p className="text-base text-gray-700 mt-4">
                    Discover insights into {blogPosts[slug].category}. Click to read more!
                  </p>
                </div>
              </div>

              {/* Show blog content only for the selected card */}
              {selectedSlug === slug && (
                <div className="mt-4 p-6 bg-gray-100 rounded-lg">
                  <img
                    src={blogPosts[slug].imageUrl}
                    alt={blogPosts[slug].title}
                    className="w-full h-72 object-cover rounded-lg shadow-lg"
                  />
                  <div className="flex justify-between items-center mb-8">
                    <p className="text-gray-600 text-sm">{blogPosts[slug].date}</p>
                    <p className="text-sm font-semibold text-gray-700">
                      Category:{" "}
                      <span className="text-[#FFD700]">{blogPosts[slug].category}</span>
                    </p>
                  </div>
                  <div className="blog-content text-lg sm:text-xl leading-relaxed text-gray-700 mb-12">
                    <p>{blogPosts[slug].content}</p>
                  </div>

                  {/* Social Share Icons (Only show on mobile view) */}
                  <div className="flex gap-6 justify-center mb-12 sm:hidden">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-all">
                      <FaFacebookF size={20} />
                    </button>
                    <button className="px-6 py-3 bg-blue-400 text-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-500 transition-all">
                      <FaTwitter size={20} />
                    </button>
                    <button className="px-6 py-3 bg-pink-600 text-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-700 transition-all">
                      <FaInstagram size={20} />
                    </button>
                    
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Back to Blog Posts Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setSelectedSlug(null)}
          className="text-blue-600 hover:underline text-lg"
        >
          Back to Blog Posts
        </button>
      </div>
    </div>
  );
}

export default BlogPage;
