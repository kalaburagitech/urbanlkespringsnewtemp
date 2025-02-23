import React from 'react';
import AboutPage from './About';
import Features from '../components/Features';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import Properties from '../components/Properties';

function HomePage() {
  return (
    <div data-name="home-page">
      <Hero />
      <Features />
      <Properties />
      <div id="about">
        <AboutPage />
      </div>
      <ContactForm />
    </div>
  );
}

export default HomePage;
