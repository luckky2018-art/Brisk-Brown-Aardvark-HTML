import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail } = FiIcons;

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Have a question or want to place an order? Feel free to reach out to us!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center p-8 rounded-card bg-neutral-light hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-1 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiMapPin} className="w-8 h-8 text-white" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400"
              alt="Store location"
              className="w-full h-48 object-cover rounded-image mb-6"
            />
            <h3 className="text-xl font-semibold text-neutral-dark mb-4">
              Visit Our Store
            </h3>
            <p className="text-neutral-dark/70 mb-4">
              123 Main Street, City, Country
            </p>
            <p className="text-neutral-dark/60 mb-6">
              Visit us at our store location for a delightful experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-1 text-white rounded-button hover:bg-primary-2 transition-all"
            >
              Get Directions
            </motion.button>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center p-8 rounded-card bg-neutral-light hover:shadow-lg transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-1 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
            </div>
            <img
              src="https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400"
              alt="Phone contact"
              className="w-full h-48 object-cover rounded-image mb-6"
            />
            <h3 className="text-xl font-semibold text-neutral-dark mb-4">
              Call Us
            </h3>
            <p className="text-neutral-dark/70 mb-4">
              +123-456-7890
            </p>
            <p className="text-neutral-dark/60 mb-6">
              Give us a call during our business hours for assistance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-1 text-white rounded-button hover:bg-primary-2 transition-all"
            >
              Call Now
            </motion.button>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 rounded-card bg-neutral-light hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 bg-primary-1 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
            </div>
            <div className="w-full h-48 bg-gradient-to-br from-primary-1 to-primary-2 rounded-image mb-6 flex items-center justify-center">
              <SafeIcon icon={FiMail} className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-dark mb-4">
              Email Us
            </h3>
            <p className="text-neutral-dark/70 mb-4">
              info@sushimestre.com
            </p>
            <p className="text-neutral-dark/60 mb-6">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-1 text-white rounded-button hover:bg-primary-2 transition-all"
            >
              Send Email
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;