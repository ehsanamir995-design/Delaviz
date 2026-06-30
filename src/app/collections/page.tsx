"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { collections, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function CollectionsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            className="text-center mb-20"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
              Curated Worlds
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-champagne-50 mb-6">
              Collections
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
            <p className="font-serif text-lg text-onyx-300 italic max-w-2xl mx-auto">
              Each collection is a chapter in the Delaviz story &mdash; a curated 
              world of design, emotion, and artistry.
            </p>
          </motion.div>

          <div ref={ref} className="space-y-24">
            {collections.map((collection, index) => {
              const collectionProducts = products.filter(
                (p) => p.collection === collection.name
              );

              return (
                <motion.section
                  key={collection.id}
                  id={collection.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className={`order-2 lg:order-${index % 2 === 0 ? "1" : "2"}`}>
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 border border-gold-500/10" />
                      </div>
                    </div>

                    <div className={`order-1 lg:order-${index % 2 === 0 ? "2" : "1"}`}>
                      <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
                        Collection {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-champagne-50 mb-6">
                        {collection.name}
                      </h2>
                      <div className="w-12 h-[1px] bg-gold-500 mb-6" />
                      <p className="font-serif text-base text-onyx-200/70 italic leading-relaxed mb-8">
                        {collection.description}. Each piece in this collection 
                        is individually handcrafted, carrying the signature Delaviz 
                        mark of artisan excellence.
                      </p>
                      <Link
                        href={`/shop?collection=${collection.id}`}
                        className="btn-luxury inline-block"
                      >
                        Explore Collection
                      </Link>
                    </div>
                  </div>

                  {collectionProducts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {collectionProducts.map((product, pIndex) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          index={pIndex}
                        />
                      ))}
                    </div>
                  )}
                </motion.section>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
