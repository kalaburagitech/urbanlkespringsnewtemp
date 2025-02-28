import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Adjust path if necessary
import Footer from './components/Footer';  // Adjust path if necessary
import HomePage from './pages/Home';  // Adjust path if necessary
import AboutPage from './pages/About';  // Adjust path if necessary
import ContactPage from './components/ContactForm';  // Adjust path if necessary
import PropertyDetailPage from './pages/Properties';  // Adjust path if necessary
import { ModalProvider } from './context/modal-context';
import Features from './components/Features';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <ModalProvider>
    <Router>
      {/* Header component */}
      <Header />
      
      {/* Main content */}
      <div className="main-content">
        <Routes>
          {/* Route for the homepage */}
          <Route path="/" element={<HomePage />} />
          
          
          
          {/* Route for the about page */}
          <Route path="/about" element={<AboutPage />} />

          <Route path="/blogs" element={<BlogPost />} />

          <Route path="/features" element={<Features />} />
          
          {/* Route for the contact page */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Route for an individual property detail page */}
          <Route path="/properties" element={<PropertyDetailPage />} />
        </Routes>
      </div>
      
      {/* Footer component */}
      <Footer />
    </Router>
    </ModalProvider>
  );
}

export default App;
