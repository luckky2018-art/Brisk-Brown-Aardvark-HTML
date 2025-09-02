import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200",
      text: "The sushi kit is top quality and makes sushi preparation so much easier. I highly recommend it to all sushi lovers!",
      rating: 5
    },
    {
      name: "Pedro Santos", 
      role: "Chef",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200",
      text: "As a professional chef, I can say that the tools in this kit are essential for anyone who wants to master the art of sushi making.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      role: "Food Critic", 
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200",
      text: "Sushi Mestre's kit exceeded my expectations. The ingredients are fresh, and the instructions are easy to follow.",
      rating: 5
    },
    {
      name: "Ricardo Costa",
      role: "Sushi Enthusiast",
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200", 
      text: "I've tried many sushi kits before, but Sushi Mestre's kit is by far the best. The taste and quality are unmatched!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            Our Happy Customers
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            I absolutely love the sushi making kit from Sushi Mestre! It has everything I need to create delicious sushi at home.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-card p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-neutral-dark">
                    {testimonial.name}
                  </h3>
                  <p className="text-neutral-dark/60">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon
                    key={i}
                    icon={FiStar}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-dark/80 leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;