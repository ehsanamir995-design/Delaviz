"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Plus, Minus, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cart";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const imageRef = useRef<HTMLDivElement>(null);

  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="font-display text-4xl text-champagne-50 mb-4">
            Product Not Found
          </h1>
          <Link href="/shop" className="btn-luxury inline-block">
            Back to Shop
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = imageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <CartDrawer />

      <div className="pt-28 pb-8 section-padding">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-onyx-300 hover:text-gold-500 transition-colors mb-10"
          >
            <ChevronLeft size={14} strokeWidth={1.5} />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                className="relative aspect-[3/4] bg-onyx-800 overflow-hidden group cursor-crosshair"
                style={{
                  "--mouse-x": "50%",
                  "--mouse-y": "50%",
                } as React.CSSProperties}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-150"
                      style={{
                        transformOrigin: "var(--mouse-x) var(--mouse-y)",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-500/80 bg-onyx-950/70 backdrop-blur-sm px-3 py-1.5">
                    {product.collection}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-24 bg-onyx-800 overflow-hidden transition-all duration-300 ${
                      selectedImage === i
                        ? "ring-1 ring-gold-500"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col"
            >
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500/70 mb-3">
                {product.collection}
              </span>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-champagne-50 mb-4">
                {product.name}
              </h1>

              <p className="font-sans text-xs tracking-[0.15em] uppercase text-onyx-300 mb-6 capitalize">
                {product.category}
              </p>

              <div className="w-12 h-[1px] bg-gold-500 mb-6" />

              <p className="font-serif text-base text-onyx-200/70 italic leading-relaxed mb-8">
                {product.description}
              </p>

              <p className="font-sans text-3xl text-gold-500 font-light mb-8">
                ${product.price.toLocaleString()}
              </p>

              <div className="space-y-3 mb-10">
                {product.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-onyx-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300">
                  Quantity
                </span>
                <div className="flex items-center border border-onyx-600">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-onyx-300 hover:text-gold-500 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center font-sans text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-onyx-300 hover:text-gold-500 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full py-4 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                  added
                    ? "bg-green-600 text-white border border-green-600"
                    : "btn-luxury-filled"
                }`}
              >
                {added ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check size={14} strokeWidth={2} />
                    Added to Bag
                  </span>
                ) : (
                  "Add to Bag"
                )}
              </button>

              <p className="font-sans text-[10px] text-onyx-400 mt-4 text-center">
                Complimentary shipping on all orders. Arrives in 3-5 business days.
              </p>
            </motion.div>
          </div>

          {related.length > 0 && (
            <div className="mt-24">
              <div className="text-center mb-12">
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
                  You May Also Love
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-champagne-50">
                  Related Pieces
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
