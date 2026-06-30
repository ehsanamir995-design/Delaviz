"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useLang } from "@/lib/language-context";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { toggleCart } = useCartStore();
  const itemCount = useCartStore((s) => s.items.length);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t.home },
    { href: "/shop", label: t.shop },
    { href: "/collections", label: t.collections },
    { href: "/about", label: t.about },
    { href: "/contact", label: t.contact },
  ];

  return (
    <>
      <motion.header
        initial={false}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "glass-light shadow-luxury py-4"
            : "bg-transparent py-6 pointer-events-none"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <span className="font-display text-2xl md:text-3xl font-light tracking-[0.3em] text-gold-500">
              DELAVIZ
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-onyx-200 hover:text-gold-500"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gold-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLang}
              className="font-sans text-[10px] tracking-[0.15em] uppercase text-onyx-200 hover:text-gold-500 transition-colors duration-300 border border-onyx-600 hover:border-gold-500 px-3 py-1.5"
              aria-label="Toggle language"
            >
              {lang === "en" ? "FA" : "EN"}
            </button>

            <button
              onClick={toggleCart}
              className="relative text-onyx-200 hover:text-gold-500 transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-gold-500 text-onyx-950 rounded-full text-[10px] font-medium flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-onyx-200 hover:text-gold-500 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-onyx-950/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={toggleLang}
              className="absolute top-6 right-6 font-sans text-[10px] tracking-[0.15em] uppercase text-onyx-200 hover:text-gold-500 transition-colors duration-300 border border-onyx-600 hover:border-gold-500 px-3 py-1.5"
              aria-label="Toggle language"
            >
              {lang === "en" ? "FA" : "EN"}
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className={`font-display text-3xl tracking-[0.2em] transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-gold-500"
                      : "text-onyx-200 hover:text-gold-500"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
