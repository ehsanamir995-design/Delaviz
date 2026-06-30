"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = products
    .filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <main className="min-h-screen">
      <Header />
      <CartDrawer />

      <div className="pt-32 pb-8 section-padding">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
              The Collection
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-champagne-50 mb-6">
              Shop
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
          >
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-gold-500 text-onyx-950"
                      : "border border-onyx-600 text-onyx-300 hover:border-gold-500 hover:text-gold-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-onyx-400"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent border border-onyx-600 pl-9 pr-4 py-2 font-sans text-xs tracking-wide text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors w-48"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-onyx-800 border border-onyx-600 px-3 py-2 font-sans text-xs tracking-wide text-onyx-300 focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + sortBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
              {filtered.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-onyx-300 italic">
                No pieces found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
