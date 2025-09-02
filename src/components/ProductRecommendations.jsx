import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiShoppingCart, FiHeart, FiEye } = FiIcons;

const ProductRecommendations = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: "Premium Sushi Kit",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
      category: "kits",
      badge: "Best Seller",
      description: "Complete sushi making kit with bamboo mat, rice paddle, and chopsticks"
    },
    {
      id: 2,
      name: "Fresh Salmon Sashimi",
      price: 24.99,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      category: "fish",
      badge: "Fresh Today",
      description: "Premium grade salmon, perfect for sashimi and nigiri"
    },
    {
      id: 3,
      name: "Sushi Rice (5kg)",
      price: 18.99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      category: "ingredients",
      description: "High-quality short-grain rice, perfect for sushi preparation"
    },
    {
      id: 4,
      name: "Nori Seaweed Sheets",
      price: 12.99,
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop",
      category: "ingredients",
      description: "Premium quality nori sheets for authentic sushi rolls"
    },
    {
      id: 5,
      name: "Wasabi Paste Set",
      price: 15.99,
      rating: 4.5,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
      category: "condiments",
      description: "Authentic wasabi paste with pickled ginger"
    },
    {
      id: 6,
      name: "Master Chef Knife",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1594736797933-d0ddb1057e6e?w=400&h=300&fit=crop",
      category: "tools",
      badge: "Professional",
      description: "Professional-grade sushi knife for precise cutting"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'kits', name: 'Sushi Kits' },
    { id: 'fish', name: 'Fresh Fish' },
    { id: 'ingredients', name: 'Ingredients' },
    { id: 'tools', name: 'Tools' },
    { id: 'condiments', name: 'Condiments' }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    // Add to cart logic
    console.log('Added to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    // Add to wishlist logic
    console.log('Added to wishlist:', product);
  };

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold text-neutral-dark mb-4">
            Recommended Products
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Discover our curated selection of premium sushi-making products, 
            carefully chosen by our master chefs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-button font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-1 text-white'
                  : 'bg-white text-neutral-dark border border-neutral-dark/20 hover:border-primary-1'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-image mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-card shadow-lg overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-primary-1 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  )}
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAddToWishlist(product)}
                      className="bg-white p-3 rounded-full hover:bg-accent-2 transition-colors"
                    >
                      <SafeIcon icon={FiHeart} className="w-5 h-5 text-neutral-dark" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-3 rounded-full hover:bg-accent-2 transition-colors"
                    >
                      <SafeIcon icon={FiEye} className="w-5 h-5 text-neutral-dark" />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-dark/60 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon
                          key={i}
                          icon={FiStar}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-neutral-dark/60">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary-1">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-neutral-dark/50 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(product)}
                      className="bg-primary-1 text-white p-3 rounded-full hover:bg-primary-2 transition-colors"
                    >
                      <SafeIcon icon={FiShoppingCart} className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-1 text-white rounded-button font-semibold hover:bg-primary-2 transition-all"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductRecommendations;