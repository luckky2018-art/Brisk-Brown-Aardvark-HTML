import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-neutral-light border-b border-neutral-dark/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original"
              alt="Sushi Mestre Logo"
              className="h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-dark hover:text-primary-1 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-neutral-dark hover:text-primary-1 transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-neutral-dark hover:text-primary-1 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-neutral-dark hover:text-primary-1 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-primary-1 border border-primary-1 rounded-button hover:bg-primary-1 hover:text-white transition-all">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary-1 text-white rounded-button hover:bg-primary-2 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-neutral-dark hover:text-primary-1 transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-neutral-dark hover:text-primary-1 transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-neutral-dark hover:text-primary-1 transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-neutral-dark hover:text-primary-1 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-6 py-2 text-primary-1 border border-primary-1 rounded-button hover:bg-primary-1 hover:text-white transition-all">
                  Sign In
                </button>
                <button className="px-6 py-2 bg-primary-1 text-white rounded-button hover:bg-primary-2 transition-all">
                  Get Started
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;