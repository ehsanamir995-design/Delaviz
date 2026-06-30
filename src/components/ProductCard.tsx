"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cart";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group product-card-hover"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-onyx-800 mb-5">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-onyx-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="w-full btn-luxury text-[10px] py-2.5"
            >
              Add to Cart
            </button>
          </div>
          <div className="absolute top-4 left-4">
            <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-500/80 bg-onyx-950/70 backdrop-blur-sm px-3 py-1.5">
              {product.collection}
            </span>
          </div>
        </div>
      </Link>

      <Link href={`/product/${product.id}`}>
        <h3 className="font-display text-lg md:text-xl font-light tracking-wide text-champagne-50 mb-2 group-hover:text-gold-500 transition-colors duration-300">
          {product.name}
        </h3>
      </Link>

      <p className="font-sans text-xs tracking-[0.15em] uppercase text-onyx-300 mb-2">
        {product.category}
      </p>

      <p className="font-sans text-sm text-gold-500 font-light">
        ${product.price.toLocaleString()}
      </p>
    </motion.div>
  );
}
