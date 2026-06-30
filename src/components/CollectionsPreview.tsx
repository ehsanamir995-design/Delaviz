"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/products";

export default function CollectionsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 section-padding">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-500/70 block mb-4">
            Explore
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-champagne-50 mb-6">
            Our Collections
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link href={`/collections#${collection.id}`}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/20 to-transparent" />
                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-10 h-[1px] bg-gold-500 mb-4 group-hover:w-16 transition-all duration-500" />
                    <h3 className="font-display text-2xl tracking-wide text-champagne-50 mb-2">
                      {collection.name}
                    </h3>
                    <p className="font-sans text-xs text-onyx-200/60 tracking-wide">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
