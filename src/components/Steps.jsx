import React from 'react';
import { motion } from 'framer-motion';

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Sushi Class",
      description: "Select the sushi class that best fits your skill level and preferences."
    },
    {
      number: "02", 
      title: "Gather Ingredients",
      description: "Get all the necessary ingredients and tools ready for your sushi making session."
    },
    {
      number: "03",
      title: "Follow the Instructions", 
      description: "Carefully follow the step-by-step instructions provided by our experienced sushi chef."
    },
    {
      number: "04",
      title: "Enjoy Your Homemade Sushi",
      description: "Once you have completed the class, sit back and enjoy your delicious homemade sushi creations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-20 lg:self-start"
          >
            <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-6">
              Discover the Power of Our Products
            </h2>
            <p className="text-xl text-neutral-dark/70 mb-8 leading-relaxed">
              Follow our simple 4-step process to master the art of sushi making 
              and create restaurant-quality dishes at home.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-1 text-white rounded-button font-semibold hover:bg-primary-2 transition-all"
            >
              Start Learning
            </motion.button>
          </motion.div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-card transform transition-all hover:scale-105 ${
                  index % 2 === 0 
                    ? 'bg-accent-1 -rotate-2 hover:rotate-0' 
                    : 'bg-accent-2 rotate-2 hover:rotate-0'
                }`}
              >
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary-1/20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;