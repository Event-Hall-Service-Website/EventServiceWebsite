import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import icons
import { NavRoutes } from "../data/NavBarArrays"; // Ensure correct path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine if the current route is active
  function isActive(routes) {
    return location.pathname === routes;
  }

  return (
    <nav className="bg-orange-400 w-full z-50 flex justify-center items-center relative">
      <div className="flex justify-between items-center container px-6 py-3 bg-amber-950 lg:h-[100px] w-full">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">Eventure</div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none z-50"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {NavRoutes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition-colors duration-300 ${
                  isActive(route.path)
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white"
                } font-PlusJakartaSans`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button - Desktop */}
        <button className="hidden lg:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Get Started
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-amber-950 flex flex-col items-center justify-center space-y-6 z-50 gap-6"
          >
            {/* Close Button Inside Menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {NavRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl transition-colors duration-300 ${
                  isActive(route.path)
                    ? "text-white font-bold"
                    : "text-gray-300 hover:text-white"
                } font-PlusJakartaSans`}
              >
                {route.label}
              </Link>
            ))}

            {/* Mobile Button */}
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
