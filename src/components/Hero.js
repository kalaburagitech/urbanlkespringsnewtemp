import React from "react";
import { useModal } from "../context/modal-context"; // Adjust path for useModal hook
import { Typewriter } from "react-simple-typewriter"; // Correct import
import { motion } from "framer-motion";

const HeroSection = () => {
  const { openModal } = useModal();

  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url(/images/property2.jpg)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative text-center p-8 rounded-lg"
      >
        {/* Gradient Text Effect */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text drop-shadow-xl">
          <Typewriter
            words={[
              "Welcome to Your Dream Home",
              "Luxury Living Awaits You",
              "Find Your Perfect Space Today",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-white mb-8"
        >
          Luxury, comfort, and convenience all in one place.
        </motion.p>

        {/* CTA Button with Gradient Effect */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal} // Open the modal when clicked
          className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 px-6 py-3 rounded-md text-black font-semibold shadow-lg transition-all duration-300"
        >
          View Price
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
