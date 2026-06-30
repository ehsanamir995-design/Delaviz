"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-onyx-900 border-l border-gold-500/10 z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold-500/10">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-gold-500" strokeWidth={1.5} />
                <h2 className="font-display text-xl tracking-[0.15em] text-champagne-50">
                  Your Bag
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="text-onyx-300 hover:text-gold-500 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6">
                  <div className="w-16 h-16 border border-gold-500/20 rounded-full flex items-center justify-center">
                    <ShoppingBag size={24} className="text-gold-500/40" strokeWidth={1} />
                  </div>
                  <p className="font-serif text-lg text-onyx-300 italic">
                    Your bag is empty
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="btn-luxury text-xs"
                  >
                    Explore Collection
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex gap-4"
                    >
                      <div className="relative w-20 h-24 bg-onyx-800 overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-sm tracking-wide text-champagne-50 truncate">
                          {item.product.name}
                        </h3>
                        <p className="font-sans text-xs text-onyx-300 mt-1 capitalize">
                          {item.product.category}
                        </p>
                        <p className="font-sans text-sm text-gold-500 mt-2">
                          ${item.product.price.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-7 h-7 border border-onyx-600 flex items-center justify-center hover:border-gold-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="font-sans text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-7 h-7 border border-onyx-600 flex items-center justify-center hover:border-gold-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto font-sans text-[10px] tracking-[0.15em] uppercase text-onyx-400 hover:text-gold-500 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gold-500/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-onyx-300">
                    Subtotal
                  </span>
                  <span className="font-sans text-lg text-gold-500">
                    ${total.toLocaleString()}
                  </span>
                </div>
                <p className="font-sans text-[10px] text-onyx-400">
                  Shipping and taxes calculated at checkout
                </p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full btn-luxury-filled text-center text-xs"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="block w-full text-center font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 hover:text-gold-500 transition-colors py-2"
                >
                  Continue Shopping
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full text-center font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500/70 hover:text-gold-500 transition-colors py-2"
                >
                  View Full Bag
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
