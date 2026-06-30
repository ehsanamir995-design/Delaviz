"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, CreditCard, Lock, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cart";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
    clearCart();
  };

  if (items.length === 0 && !completed) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-40 pb-20 text-center section-padding">
          <h1 className="font-display text-4xl text-champagne-50 mb-4">
            Your Bag is Empty
          </h1>
          <p className="font-serif text-onyx-300 italic mb-8">
            Add some pieces to proceed to checkout.
          </p>
          <Link href="/shop" className="btn-luxury inline-block">
            Explore Collection
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  if (completed) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-40 pb-20 text-center section-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={32} strokeWidth={1.5} className="text-gold-500" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-champagne-50 mb-4">
              Order Confirmed
            </h1>
            <p className="font-serif text-lg text-onyx-300 italic mb-4">
              Thank you for choosing Delaviz.
            </p>
            <p className="font-sans text-sm text-onyx-400 mb-10">
              Order #DV-{Math.random().toString(36).substring(2, 8).toUpperCase()} — 
              Confirmation sent to {formData.email || "your email"}
            </p>
            <Link href="/shop" className="btn-luxury inline-block">
              Continue Shopping
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-28 pb-8 section-padding">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-onyx-300 hover:text-gold-500 transition-colors mb-10"
          >
            <ChevronLeft size={14} strokeWidth={1.5} />
            Back to Shop
          </Link>

          <div className="flex items-center justify-center gap-4 mb-12">
            {["Information", "Payment"].map((label, i) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans ${
                      step > i + 1
                        ? "bg-gold-500 text-onyx-950"
                        : step === i + 1
                        ? "border border-gold-500 text-gold-500"
                        : "border border-onyx-600 text-onyx-400"
                    }`}
                  >
                    {step > i + 1 ? <Check size={14} /> : i + 1}
                  </div>
                  <span
                    className={`font-sans text-xs tracking-wider ${
                      step >= i + 1 ? "text-champagne-50" : "text-onyx-400"
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < 1 && (
                  <div className="w-12 h-[1px] bg-onyx-600 mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h2 className="font-display text-2xl tracking-wide text-champagne-50 mb-8">
                      Contact Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                        Shipping Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors mb-4"
                        placeholder="Street address"
                      />
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="City"
                          className="bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          placeholder="State"
                          className="bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                          placeholder="ZIP"
                          className="bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full btn-luxury-filled py-4"
                    >
                      Continue to Payment
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="font-display text-2xl tracking-wide text-champagne-50">
                        Payment
                      </h2>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500 hover:text-gold-400 transition-colors"
                      >
                        Edit Information
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Lock size={14} className="text-gold-500" strokeWidth={1.5} />
                      <span className="font-sans text-[10px] tracking-wider text-onyx-300">
                        Secure, encrypted payment
                      </span>
                    </div>

                    <div>
                      <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                        <CreditCard
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-onyx-400"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                          Expiry
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                          placeholder="MM / YY"
                          maxLength={7}
                          className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          maxLength={4}
                          className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-luxury-filled py-4 flex items-center justify-center gap-2"
                    >
                      <Lock size={14} strokeWidth={1.5} />
                      Place Order — ${total.toLocaleString()}
                    </button>
                  </motion.div>
                )}
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 border border-onyx-700 p-6">
                <h3 className="font-display text-lg tracking-wide text-champagne-50 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="relative w-16 h-20 bg-onyx-800 overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-onyx-700 rounded-full flex items-center justify-center">
                          <span className="font-sans text-[9px] text-champagne-50">
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-sans text-xs text-champagne-50 truncate">
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-onyx-400 mt-1">
                          ${item.product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-onyx-700 pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-sans text-xs text-onyx-300">Subtotal</span>
                    <span className="font-sans text-xs text-champagne-50">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-xs text-onyx-300">Shipping</span>
                    <span className="font-sans text-xs text-green-500">Complimentary</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-onyx-700">
                    <span className="font-sans text-sm text-champagne-50">Total</span>
                    <span className="font-sans text-lg text-gold-500">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
