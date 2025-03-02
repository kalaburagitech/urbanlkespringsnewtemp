import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';  // Adjust path if necessary
import Footer from './components/Footer';  // Adjust path if necessary
import HomePage from './pages/Home';  // Adjust path if necessary
import { ModalProvider } from './context/modal-context';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

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
            
            {/* Admin login route */}
            <Route path="/admin" element={<AdminLogin />} />
            
            {/* Admin dashboard route */}
            <Route path="/admindashboard" element={<AdminDashboard />} />
            
            {/* Catch-all route to redirect invalid paths to the homepage */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        
        {/* Footer component */}
        <Footer />
      </Router>
    </ModalProvider>
  );
}

export default App;
