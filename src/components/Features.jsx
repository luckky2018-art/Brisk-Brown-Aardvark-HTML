import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiBook, FiPlay } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiUsers,
      title: "Master the Art of Sushi Making",
      description: "Join our community of sushi enthusiasts and share your creations with fellow sushi lovers.",
      image: "https://images.unsplash.com/photo-1552250575-e508473b090f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1Mnx8YWJzdHJhY3R8ZW58MHx8fHwxNzE2MjAxNjAyfDA&ixlib=rb-4.0.3&w=1400"
    },
    {
      icon: FiBook,
      title: "Exclusive Recipes and Tips",
      description: "Get access to exclusive recipes and tips from professional sushi chefs to elevate your sushi game.",
      image: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDEzMDd8MA&ixlib=rb-4.0.3&w=1400"
    },
    {
      icon: FiPlay,
      title: "Step-by-Step Tutorials",
      description: "Learn the art of sushi making from the comfort of your home with our step-by-step video tutorials.",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDg0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTYyMDE1NTZ8MA&ixlib=rb-4.0.3&w=1400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.img
                key={index}
                src={feature.image}
                alt={feature.title}
                className="w-full h-64 object-cover rounded-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6 p-6 rounded-card hover:bg-accent-2/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-1 rounded-full flex items-center justify-center">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-dark/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;