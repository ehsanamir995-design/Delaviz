"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-onyx-900/50 to-onyx-950" />
      <div className="absolute inset-0 shimmer-bg opacity-30" />

      <div className="relative max-w-[600px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-champagne-50 mb-4">
            Join the Inner Circle
          </h2>
          <p className="font-serif text-sm text-onyx-300 italic mb-10">
            Be the first to discover new collections, exclusive pieces, and the stories behind our craft.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4"
            >
              <p className="font-serif text-gold-500 italic text-lg">
                Welcome to the Delaviz family.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-onyx-600 px-5 py-3 font-sans text-xs tracking-wide text-champagne-50 placeholder:text-onyx-400 focus:border-gold-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-12 border border-gold-500 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-onyx-950 transition-all duration-300"
                aria-label="Subscribe"
              >
                <Send size={14} strokeWidth={1.5} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
