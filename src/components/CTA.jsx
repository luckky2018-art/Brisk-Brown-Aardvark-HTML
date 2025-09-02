import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-1 to-primary-2">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-card p-12"
        >
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Become a Sushi Master Today!
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our online course and learn the art of sushi making from the comfort of your home.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-primary-1 rounded-button font-semibold hover:bg-accent-2 transition-all"
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;