"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            Curated Selection
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-champagne-50 mb-6">
            Featured Pieces
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
