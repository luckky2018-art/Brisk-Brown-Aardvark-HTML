import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck } = FiIcons;

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: 29.99,
      yearlyPrice: 299.99,
      features: [
        "Access to 50 sushi recipes",
        "Weekly sushi tips newsletter",
        "24/7 customer support"
      ],
      popular: false
    },
    {
      name: "Premium Plan",
      price: 49.99,
      yearlyPrice: 499.99,
      features: [
        "Access to 100 sushi recipes",
        "Exclusive sushi chef video tutorials",
        "Priority customer support",
        "Monthly live Q&A sessions"
      ],
      popular: true
    },
    {
      name: "Ultimate Plan",
      price: 79.99,
      yearlyPrice: 799.99,
      features: [
        "Access to unlimited sushi recipes",
        "Personalized sushi recipe recommendations",
        "24/7 VIP customer support",
        "One-on-one chef consultations",
        "Premium ingredient discounts"
      ],
      popular: false
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
            Choose Your Sushi Master Plan
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Select the perfect plan to start your sushi making journey with expert guidance and premium resources.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-card p-8 ${
                plan.popular 
                  ? 'ring-2 ring-primary-1 scale-105' 
                  : 'border border-neutral-dark/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-1 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-1">
                    ${plan.price}
                  </span>
                  <span className="text-neutral-dark/60">/month</span>
                </div>
                <p className="text-neutral-dark/60">
                  or ${plan.yearlyPrice}/year
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary-1 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-button font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary-1 text-white hover:bg-primary-2'
                    : 'border-2 border-primary-1 text-primary-1 hover:bg-primary-1 hover:text-white'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;