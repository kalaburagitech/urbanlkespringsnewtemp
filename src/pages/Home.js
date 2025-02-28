// HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import PropertyListPage from './Properties'; // Replace with correct path to Property List Page
import AboutPage from './About'; // Replace with correct path to About page
import ContactForm from '../components/ContactForm'; // Replace with correct path to Contact Form
import { useModal } from "../context/modal-context";
import BrochureModal from '../components/ContactModel';
import Features from '../components/Features';
import BlogPost from './BlogPost';

function HomePage() {
  const { openModal } = useModal();  

  return (
    <div>
      {/* Section for Home */}
      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <Features />
      </section>

      {/* Section for Properties */}
      <section id="properties">
        <PropertyListPage />
      </section>

      {/* Section for About */}
      <section id="about">
        <AboutPage />
      </section>

      {/* Section for Blog */}
      <section id="blog">
        <BlogPost />
      </section>

      {/* Section for Contact */}
      <section id="contact">
        <ContactForm />
      </section>
      <BrochureModal/>
    </div>
  );
}

export default HomePage;
