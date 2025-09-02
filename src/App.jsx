import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import ProductRecommendations from './components/ProductRecommendations';
import Pricing from './components/Pricing';
import Steps from './components/Steps';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import './App.css';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <CTA />
      <ProductRecommendations />
      <Pricing />
      <Steps />
      <Testimonials />
      <Contact />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-light">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;