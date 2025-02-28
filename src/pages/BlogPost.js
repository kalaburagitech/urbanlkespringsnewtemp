import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // For fetching dynamic URL params

function BlogPage() {
  const [selectedSlug, setSelectedSlug] = useState(null);

  // Blog post data
  const blogPosts = {
    'bangalore-real-estate-investment': {
      title: 'Why Bangalore is the Best Place for Real Estate Investment',
      date: 'March 1, 2025',
      imageUrl: '/images/property1.jpg', // Correct way to reference images from the public folder
      content: `...`,
      category: 'Real Estate'
    },
    'future-luxury-apartments-bangalore': {
      title: 'The Future of Luxury Apartments in Bangalore',
      date: 'February 20, 2025',
      imageUrl: '/images/property2.jpg', // Correct way to reference images from the public folder
      content: `...`,
      category: 'Luxury Living'
    },
    'features-modern-home': {
      title: 'Top 5 Features to Look for in a Modern Home',
      date: 'February 10, 2025',
      imageUrl: '/images/property5.jpg', // Correct way to reference images from the public folder
      content: `...`,
      category: 'Home Features'
    },
  };

  const post = selectedSlug ? blogPosts[selectedSlug] : null;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-[#1F2937]">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(blogPosts).map((slug) => (
            <div key={slug} className="group cursor-pointer">
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
                onClick={() => setSelectedSlug(slug)}
              >
                <img
                  src={blogPosts[slug].imageUrl}
                  alt={blogPosts[slug].title}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-3">{blogPosts[slug].title}</h3>
                  <p className="text-sm text-gray-500">{blogPosts[slug].date}</p>
                  <p className="text-base text-gray-700 mt-4">
                    Discover insights into {blogPosts[slug].category}. Click to read more!
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {post ? (
        <div>
          <div className="relative mb-8">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white absolute bottom-8 left-8">{post.title}</h1>
          </div>

          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="text-sm font-semibold text-gray-700">Category: <span className="text-[#FFD700]">{post.category}</span></p>
          </div>

          <div className="blog-content text-lg sm:text-xl leading-relaxed text-gray-700 mb-12">
            <p>{post.content}</p>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full flex items-center">
              <i className="fab fa-facebook-f mr-2"></i> Share on Facebook
            </button>
            <button className="px-6 py-2 bg-blue-400 text-white rounded-full flex items-center">
              <i className="fab fa-twitter mr-2"></i> Share on Twitter
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full flex items-center">
              <i className="fab fa-linkedin mr-2"></i> Share on LinkedIn
            </button>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setSelectedSlug(null)}
              className="text-blue-600 hover:underline text-lg"
            >
              Back to Blog Posts
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-600">Please select a blog post to read.</p>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
