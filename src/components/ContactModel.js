import React, { useState } from "react";
import axios from "axios";
import { useModal } from "../context/modal-context";
import { FaHome } from 'react-icons/fa';  
import { motion } from "framer-motion"; // Importing Framer Motion for animations

export default function BrochureModal() {
  const { isOpen, closeModal } = useModal();
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDownloadClicked, setIsDownloadClicked] = useState(false); // Track button click

  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    // Validate phone number
    if (!/^[6789]\d{9}$/.test(contact)) {
      setError("Please enter a valid phone number.");
      setLoading(false);
      return;
    }

    try {
      // const response = await axios.post("https://reakestateemail.onrender.com/send-email", {
      //   contact,
      // });

      // if (response.data.success) {
        setIsSubmitted(true);

        // Trigger PDF download after successful submission
        setTimeout(() => {
          const link = document.createElement('a');
        link.href = '/pdf/price-list.pdf'; // Path to your PDF
        link.download = 'price-list.pdf'; // Name of the file to download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        
          closeModal();
          setIsSubmitted(false);
        }, 1500);
      // } else {
      //   throw new Error(response.data.message || "Failed to submit details");
      // }
    } catch (err) {
      setError("Failed to submit details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-xl w-full sm:w-[400px] md:w-[500px] p-6 z-10"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 text-lg font-bold hover:text-gray-900"
        >
          ✕
        </button>

        {/* Top section with icon and logo */}
        <div className="flex flex-col items-center justify-center mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-full mb-4"
          >
            <FaHome size={40} /> {/* Change to the real estate related icon */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-gray-900"
          >
            Download Brochure
          </motion.h2>
        </div>

        {/* Brochure download button */}
        {!isDownloadClicked ? (
          <motion.button
            onClick={() => setIsDownloadClicked(true)} // Show the input form after the download button click
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg shadow-lg text-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Brochure
          </motion.button>
        ) : (
          // Phone input form after download clicked
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <input
              type="text"
              name="contact"
              placeholder="Enter Phone Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="border-2 p-4 rounded-lg w-full text-lg focus:ring-2 focus:ring-blue-500 transition-all bg-transparent"
            />

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <motion.button
              type="submit"
              disabled={loading}
              className={`bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 px-8 rounded-lg w-full shadow-lg text-lg transition-all ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>

            {/* Success Message */}
            {isSubmitted && <p className="text-green-500 text-center mt-3">Details submitted successfully! ✅</p>}
          </form>
        )}
      </motion.div>
    </div>
  );
}
