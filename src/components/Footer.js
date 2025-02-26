import React from 'react';

function Footer() {
  return (
    <footer data-name="footer" className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4 pb-20 md:pb-0"> {/* Added padding bottom for mobile nav */}
        <div className="grid md:grid-cols-3 gap-8">
          <div data-name="footer-about">
            <h3 className="text-xl font-bold mb-4">🏡 urbanlakesprings</h3>
            <p className="text-gray-400">
              We help you find the perfect property that matches your needs and dreams.
            </p>
          </div>
          <div data-name="footer-contact">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="text-gray-400">
              <p><i className="fas fa-phone mr-2"></i> +91 99452 64555</p>
              <p><i className="fas fa-envelope mr-2"></i> Sales@urbanlakesprings.in</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i> Opposite Avalahalli Lake, Royal Park Residency, JP Nagar 9th Phase, Anjanapura, Bengaluru, Karnataka 560062</p>
            </div>
          </div>
          <div data-name="footer-social">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
          © {new Date().getFullYear()} <span className="font-bold">urbanlakesprings</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
