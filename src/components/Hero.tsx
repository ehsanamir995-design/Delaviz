"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 0;
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video / Poster Background */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={loaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ scale: videoScale }}
          className="absolute inset-0"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/HERO-IMAGE.jpeg"
          >
            <source src="/videos/HERO-VIDEO.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-onyx-950/50 via-onyx-950/10 to-onyx-950/80"
        />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Gold line above title */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={loaded ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8 origin-top"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />
          </motion.div>

          {/* Brand name */}
          <motion.div style={{ y: textY, opacity: textOpacity }} className="text-center px-6">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-light tracking-[0.2em] text-champagne-50 mb-6">
              {"DELAVIZ".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, rotateX: -80 }}
                  animate={loaded ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 1 + i * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="inline-block"
                  style={{ perspective: "600px" }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={loaded ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.2 }}
              className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold-500/80 mb-6"
            >
              Handcrafted Luxury Jewelry
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="font-serif text-base md:text-lg text-onyx-200/60 max-w-md mx-auto italic"
            >
              Where artistry meets the eternal
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 3, duration: 0.8 }}
              className="font-sans text-[9px] tracking-[0.3em] uppercase text-onyx-400"
            >
              Scroll to Explore
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 3.2, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-8 bg-gradient-to-b from-gold-500 to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
