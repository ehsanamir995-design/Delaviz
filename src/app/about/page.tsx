"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const values = [
  {
    title: "Artisan Craft",
    description:
      "Every piece is handcrafted by master artisans with decades of experience, ensuring each creation is truly one-of-a-kind.",
  },
  {
    title: "Ethical Sourcing",
    description:
      "We source only conflict-free materials, working with suppliers who share our commitment to responsible practices.",
  },
  {
    title: "Timeless Design",
    description:
      "Our designs transcend trends, created to be treasured for generations and passed down as modern heirlooms.",
  },
  {
    title: "Sustainable Practice",
    description:
      "From studio to packaging, we minimize our footprint while maximizing the beauty of our craft.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="min-h-screen">
      <Header />
      <CartDrawer />

      <section ref={heroRef} className="relative h-[80vh] overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <Image
            src="/images/IMG_20260628_230901_365.jpg"
            alt="Delaviz artisan at work"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-onyx-950/20" />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
                Our Story
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-champagne-50">
                About Delaviz
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 section-padding">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-10" />
            <p className="font-serif text-xl md:text-2xl text-onyx-200/70 italic leading-relaxed mb-8">
              Delaviz was born from a simple belief: that jewelry should be more 
              than adornment. It should be a conversation between the wearer 
              and the maker &mdash; a tangible piece of someone&apos;s passion, 
              skill, and creative vision.
            </p>
            <p className="font-serif text-lg text-onyx-200/70 italic leading-relaxed mb-8">
              Founded in 2024, our workshop brings together master artisans 
              who have spent decades perfecting the ancient arts of metalwork. 
              Each piece begins as a sketch, evolves through hand-sculpted 
              prototypes, and finally emerges as a finished creation that 
              carries the unmistakable mark of human touch.
            </p>
            <p className="font-serif text-lg text-onyx-200/70 italic leading-relaxed">
              We work exclusively with 925 sterling silver, selected for its 
              luminous quality and enduring beauty. Every Delaviz piece is 
              handcrafted, never mass-produced &mdash; because true luxury 
              cannot be manufactured.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-onyx-900/50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
              What Guides Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide text-champagne-50">
              Our Values
            </h2>
          </motion.div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="p-8 border border-onyx-700 hover:border-gold-500/30 transition-colors duration-500"
              >
                <h3 className="font-display text-xl tracking-wide text-gold-500 mb-4">
                  {value.title}
                </h3>
                <p className="font-serif text-sm text-onyx-300 italic leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 section-padding">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
              The Workshop
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-champagne-50 mb-6">
              Where Magic Happens
            </h2>
            <div className="w-12 h-[1px] bg-gold-500 mb-6" />
            <p className="font-serif text-base text-onyx-200/70 italic leading-relaxed mb-4">
              Our studio is a sanctuary of craft. Here, surrounded by tools 
              passed down through generations, our artisans transform raw 
              silver into wearable art. Each piece spends between 40 and 
              200 hours in the making.
            </p>
            <p className="font-serif text-base text-onyx-200/70 italic leading-relaxed">
              We welcome visitors by appointment to witness the magic firsthand 
              and perhaps commission a bespoke creation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square relative overflow-hidden"
          >
            <Image
              src="/images/IMG_20260628_161228_201.jpg"
              alt="Delaviz workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 border border-gold-500/10" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
