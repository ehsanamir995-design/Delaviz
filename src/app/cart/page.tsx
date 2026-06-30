"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useCartStore } from "@/store/cart";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore();
  const total = getTotal();
  const itemCount = getItemCount();

  return (
    <main className="min-h-screen">
      <Header />
      <CartDrawer />

      <div className="pt-32 pb-8 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center mb-16"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
              Your Selection
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-champagne-50 mb-6">
              Shopping Bag
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </motion.div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 border border-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingBag size={32} className="text-gold-500/40" strokeWidth={1} />
              </div>
              <p className="font-serif text-xl text-onyx-300 italic mb-8">
                Your bag is empty
              </p>
              <Link href="/shop" className="btn-luxury inline-block">
                Explore Collection
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 p-6 border border-onyx-700 hover:border-gold-500/20 transition-colors duration-300"
                    >
                      <Link
                        href={`/product/${item.product.id}`}
                        className="relative w-32 h-40 bg-onyx-800 overflow-hidden flex-shrink-0 group"
                      >
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="128px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </Link>

                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link
                              href={`/product/${item.product.id}`}
                              className="font-display text-lg tracking-wide text-champagne-50 hover:text-gold-500 transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="font-sans text-xs text-onyx-400 mt-1 capitalize">
                              {item.product.category} &middot; {item.product.collection}
                            </p>
                          </div>
                          <p className="font-sans text-lg text-gold-500 whitespace-nowrap">
                            ${(item.product.price * item.quantity).toLocaleString()}
                          </p>
                        </div>

                        <div className="mt-auto pt-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-9 h-9 border border-onyx-600 flex items-center justify-center text-onyx-300 hover:border-gold-500 hover:text-gold-500 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} strokeWidth={1.5} />
                            </button>
                            <span className="font-sans text-sm w-6 text-center text-champagne-50">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-9 h-9 border border-onyx-600 flex items-center justify-center text-onyx-300 hover:border-gold-500 hover:text-gold-500 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} strokeWidth={1.5} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="flex items-center gap-2 font-sans text-[10px] tracking-[0.15em] uppercase text-onyx-400 hover:text-gold-500 transition-colors"
                          >
                            <Trash2 size={12} strokeWidth={1.5} />
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-onyx-300 hover:text-gold-500 transition-colors"
                  >
                    <ChevronLeft size={14} strokeWidth={1.5} />
                    Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-32 border border-onyx-700 p-8">
                  <h3 className="font-display text-xl tracking-wide text-champagne-50 mb-8">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-sans text-xs text-onyx-300">
                        Items ({itemCount})
                      </span>
                      <span className="font-sans text-xs text-champagne-50">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-xs text-onyx-300">Shipping</span>
                      <span className="font-sans text-xs text-green-500">Complimentary</span>
                    </div>
                  </div>

                  <div className="border-t border-onyx-700 pt-4 mb-8">
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-champagne-50">Total</span>
                      <span className="font-sans text-2xl text-gold-500">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full btn-luxury-filled text-center text-xs py-4"
                  >
                    Proceed to Checkout
                  </Link>

                  <p className="font-sans text-[10px] text-onyx-400 mt-4 text-center">
                    Secure checkout &middot; Complimentary shipping on all orders
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
