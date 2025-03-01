import React from 'react';
import GradientText from "./GradientText/GradientText"; // Import GradientText

function AboutPage() {
  return (
    <div data-name="about-page" className="pt-16 bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Heading Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <GradientText colors={["#FFD700", "#FF5733", "#4079ff"]}>About NCC Urban Lake Springs</GradientText>
        </h1>

        {/* Description Section */}
        <p className="text-lg sm:text-xl leading-relaxed text-gray-700 italic font-medium mb-8">
          <strong className="text-[#FFD700]">NCC Urban Lake Springs</strong>, an
          <strong> Abode of Peace!</strong> Located in <strong>JP Nagar, Bangalore</strong>, this premium residential project offers an
          <strong> elegant and vibrant community living experience</strong>. Designed to bring
          <strong> comfort, luxury, and connectivity</strong>, the project is surrounded by
          <strong> renowned schools, hospitals, business hubs, and recreational spots</strong>.
        </p>

        {/* Row 1: Image on Left, Text on Right */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:mt-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/images/property1.jpg"  // Correct path to public/images folder
              alt="NCC Urban Lake Springs"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-lg sm:text-xl leading-relaxed text-gray-700">
            <p className="mb-6">
              NCC Urban Lake Springs is a residential project developed by <strong>NCC Urban Infrastructure Limited</strong>.
              Located in Bangalore South, this project is known for offering premium
              apartments designed with modern amenities and a focus on a **comfortable living** experience.
              Facilities include **landscaped gardens, fitness centers, and recreational areas**.
            </p>
            <p>
              The project offers a range of <strong className="text-[#FFD700]">3 BHK Premium Flats</strong> and 
              <strong className="text-[#FFA500]"> 3.5 BHK Flats</strong>, currently under construction,
              catering to various budgets and lifestyle preferences.
            </p>
          </div>
        </div>

        {/* Row 2: Image on Right, Text on Left */}
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center md:mt-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="/images/property4.jpg" 
              alt="NCC Urban Lake Springs"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-lg sm:text-xl leading-relaxed text-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D]">
              <GradientText colors={["#FFD700", "#FF5733", "#4079ff"]}>Popular Localities in Bangalore South</GradientText>
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-6 text-lg sm:text-xl">
              <li><strong>JP Nagar:</strong> Well-established, close to commercial hubs.</li>
              <li><strong>Banashankari:</strong> A peaceful environment with modern amenities.</li>
              <li><strong>Jayanagar:</strong> Tree-lined streets, shopping centers, and premium flats.</li>
              <li><strong>Vijayanagar:</strong> Affordable, with great connectivity.</li>
              <li><strong>Koramangala:</strong> A hub for startups, premium 3 BHK apartments.</li>
              <li><strong>Electronic City:</strong> IT hub with budget and mid-range flats.</li>
              <li><strong>BTM Layout:</strong> Ideal for young professionals and families.</li>
            </ul>
          </div>
        </div>

        {/* Developer Details Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D]">
            <GradientText colors={["#FFD700", "#FF5733", "#4079ff"]}>About NCC Urban Infrastructure Limited</GradientText>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mt-3">
            NCC Urban is a subsidiary of NCC Limited, a leading **construction and infrastructure company in India**.
            They develop **residential, commercial, and mixed-use projects** in multiple cities, including Bangalore, Hyderabad, and Chennai.
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-4 text-gray-800">
            <GradientText colors={["#FFD700", "#FF5733", "#4079ff"]}>Notable Projects in Bangalore</GradientText>
          </h3>
          <ul className="list-disc list-inside space-y-2 mt-3 text-lg sm:text-xl">
            <li><strong>NCC Urban Green Province:</strong> Luxury Villas in Sarjapur Road.</li>
            <li><strong>NCC Urban Lake Springs:</strong> Premium Luxury 3 BHK and 3.5 BHK Flats available.</li>
            <li><strong>NCC Urban Park View:</strong> Premium residences near Yelahanka New Town, Bangalore.</li>
            <li><strong>NCC Urban Parkside:</strong> NCC Urban Retreat - Upcoming Luxury Villa project near Hennur, Bangalore.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
