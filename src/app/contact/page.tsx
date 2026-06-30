"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-champagne-50 mb-6">
              Contact
            </h1>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl tracking-wide text-champagne-50 mb-8">
                We&apos;d Love to Hear From You
              </h2>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@delaviz.com",
                    href: "mailto:hello@delaviz.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+98 920 292 1374",
                    href: "tel:+989202921374",
                  },
                  {
                    icon: MapPin,
                    label: "Atelier",
                    value: "123 Artisan Quarter, New York, NY 10001",
                    href: "#",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Mon - Sat: 10am - 7pm EST",
                    href: "#",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-onyx-600 flex items-center justify-center flex-shrink-0">
                      <item.icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-gold-500"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-500/70 mb-1">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="font-sans text-sm text-onyx-200 hover:text-gold-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="aspect-video bg-onyx-800 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin
                      size={32}
                      strokeWidth={1}
                      className="text-gold-500/40 mx-auto mb-3"
                    />
                    <p className="font-sans text-xs text-onyx-400 tracking-wider">
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={24} strokeWidth={1.5} className="text-gold-500" />
                    </div>
                    <h3 className="font-display text-2xl tracking-wide text-champagne-50 mb-4">
                      Message Sent
                    </h3>
                    <p className="font-serif text-sm text-onyx-300 italic">
                      Thank you for reaching out. We&apos;ll respond within 24 hours.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-onyx-800 border border-onyx-600 px-4 py-3 font-sans text-sm text-onyx-300 focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="bespoke">Bespoke Commission</option>
                      <option value="care">Care & Repair</option>
                      <option value="press">Press & Media</option>
                      <option value="wholesale">Wholesale</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-onyx-300 block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border border-onyx-600 px-4 py-3 font-sans text-sm text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-luxury-filled flex items-center justify-center gap-2"
                  >
                    <Send size={14} strokeWidth={1.5} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
