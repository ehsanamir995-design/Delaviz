"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function BrandManifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-onyx-950 via-onyx-900 to-onyx-950" />

      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 100px, rgba(201,164,110,0.1) 100px, rgba(201,164,110,0.1) 101px)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-6">
              Our Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-champagne-50 mb-8 leading-tight">
              Every Piece
              <br />
              <span className="text-gradient-gold">Tells a Story</span>
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-gold-500 to-transparent mb-8" />
            <p className="font-serif text-lg text-onyx-200/70 italic leading-relaxed mb-4">
              At Delaviz, we believe that true luxury lies not in excess, but in 
              intention. Each piece is born from a dialogue between the artisan 
              and the metal &mdash; a conversation shaped by decades of mastery.
            </p>
            <p className="font-serif text-lg text-onyx-200/70 italic leading-relaxed mb-10">
              Our workshop is a sanctuary of craft, where time moves differently, 
              and every hammer strike carries the weight of tradition.
            </p>
            <Link
              href="/about"
              className="btn-luxury inline-block"
            >
              Our Story
            </Link>
          </motion.div>

          <motion.div style={{ y }} className="relative">
            <div className="aspect-[4/5] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
              <div className="absolute inset-4 border border-gold-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl md:text-9xl font-light text-gold-500/20">
                    D
                  </div>
                  <div className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-500/40 mt-4">
                    Est. 2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
