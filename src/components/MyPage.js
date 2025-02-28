import React from 'react';
import { Helmet } from 'react-helmet';

const MyPage = () => {
  return (
    <div>
      {/* SEO Meta tags */}
      <Helmet>
        <title>NCC Urban Lake Springs</title>
        <meta name="description" content="Luxury apartments in JP Nagar, Bangalore with world-class amenities and elegant design." />
        <meta name="keywords" content="real estate, homes, luxury, apartments, Bangalore, JP Nagar, NCC Urban" />
        <meta property="og:title" content="NCC Urban Lake Springs" />
        <meta property="og:description" content="Luxury apartments in JP Nagar, Bangalore with world-class amenities and elegant design." />
        <meta property="og:image" content="https://urbanlakesprings.in/images/og-image.jpg" />
        <meta property="og:url" content="https://urbanlakesprings.in/" />
      </Helmet>

      {/* Page content */}
      <header className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-12">
        <h1 className="text-4xl font-bold text-center">Welcome to NCC Urban Lake Springs</h1>
      </header>

      <section className="container mx-auto px-4 py-16">
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 italic font-medium mb-8">
          <strong className="text-[#FFD700]">NCC Urban Lake Springs</strong>, an
          <strong> Abode of Peace!</strong> Located in <strong>JP Nagar, Bangalore</strong>,
          this premium residential project offers an
          <strong> elegant and vibrant community living experience</strong>. Designed to bring
          <strong> comfort, luxury, and connectivity</strong>, the project is surrounded by
          <strong> renowned schools, hospitals, business hubs, and recreational spots</strong>.
        </p>
      </section>
    </div>
  );
};

export default MyPage;
