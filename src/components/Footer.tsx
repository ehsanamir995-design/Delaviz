"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-onyx-950 border-t border-gold-500/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl tracking-[0.3em] text-gold-500 mb-6">
              DELAVIZ
            </h3>
            <p className="font-serif text-sm text-onyx-300 italic leading-relaxed mb-6">
              {t.manifestoP1.slice(0, 80)}...
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/delaviz.jewelry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-onyx-600 flex items-center justify-center text-onyx-300 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="mailto:hello@delaviz.com"
                className="w-9 h-9 border border-onyx-600 flex items-center justify-center text-onyx-300 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={14} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-6">
              {t.quickLinks}
            </h4>
            <div className="space-y-3">
              {[
                { href: "/shop", label: t.shopAll },
                { href: "/collections", label: t.collections },
                { href: "/about", label: t.ourStory },
                { href: "/contact", label: t.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-sans text-xs text-onyx-300 hover:text-gold-500 transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-6">
              {t.informationFooter}
            </h4>
            <div className="space-y-3">
              {[
                { href: "/shop", label: t.shippingReturns },
                { href: "/shop", label: t.sizeGuide },
                { href: "/about", label: t.careInstructions },
                { href: "/about", label: t.authenticity },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block font-sans text-xs text-onyx-300 hover:text-gold-500 transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-500 mb-6">
              {t.getInTouchFooter}
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@delaviz.com"
                className="flex items-center gap-3 text-onyx-300 hover:text-gold-500 transition-colors"
              >
                <Mail size={14} strokeWidth={1.5} />
                <span className="font-sans text-xs tracking-wide">hello@delaviz.com</span>
              </a>
              <a
                href="tel:+989202921374"
                className="flex items-center gap-3 text-onyx-300 hover:text-gold-500 transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span className="font-sans text-xs tracking-wide">+98 920 292 1374</span>
              </a>
              <div className="flex items-start gap-3 text-onyx-300">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" />
                <span className="font-sans text-xs tracking-wide">
                  123 Artisan Quarter<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-onyx-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-onyx-500 tracking-wider">
            &copy; {new Date().getFullYear()} Delaviz. {t.allRightsReserved}
          </p>
          <div className="flex gap-6">
            <span className="font-sans text-[10px] text-onyx-500 tracking-wider">
              {t.privacyPolicy}
            </span>
            <span className="font-sans text-[10px] text-onyx-500 tracking-wider">
              {t.termsOfService}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
