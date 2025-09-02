import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiShoppingCart, FiHeart, FiEye, FiFilter } = FiIcons;

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 200]);

  const products = [
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
    },
    {
      id: 7,
      name: "Bamboo Sushi Mat",
      price: 8.99,
      rating: 4.4,
      reviews: 92,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
      category: "tools",
      description: "Traditional bamboo mat for rolling perfect sushi"
    },
    {
      id: 8,
      name: "Tuna Sashimi Grade",
      price: 32.99,
      rating: 4.8,
      reviews: 56,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      category: "fish",
      badge: "Premium",
      description: "Fresh, sashimi-grade tuna delivered daily"
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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-heading font-bold text-neutral-dark mb-4">
            Our Products
          </h1>
          <p className="text-xl text-neutral-dark/70 max-w-2xl mx-auto">
            Discover our complete range of premium sushi-making products, 
            from fresh ingredients to professional tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-card p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-neutral-dark mb-6 flex items-center gap-2">
                <SafeIcon icon={FiFilter} className="w-5 h-5" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-medium text-neutral-dark mb-4">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-1 text-white'
                          : 'hover:bg-neutral-light'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-medium text-neutral-dark mb-4">Price Range</h4>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-neutral-dark/70">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-medium text-neutral-dark mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-1"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
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
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">
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
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price and Add to Cart */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary-1">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-neutral-dark/50 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-1 text-white p-3 rounded-full hover:bg-primary-2 transition-colors"
                      >
                        <SafeIcon icon={FiShoppingCart} className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-neutral-dark/60">
                  No products found matching your criteria.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;