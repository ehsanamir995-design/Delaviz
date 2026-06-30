"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const BrandManifesto = dynamic(() => import("@/components/BrandManifesto"), { ssr: false });
const FeaturedProducts = dynamic(() => import("@/components/FeaturedProducts"), { ssr: false });
const CollectionsPreview = dynamic(() => import("@/components/CollectionsPreview"), { ssr: false });
const Newsletter = dynamic(() => import("@/components/Newsletter"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Header />
      <CartDrawer />
      <Hero />
      <BrandManifesto />
      <FeaturedProducts />
      <CollectionsPreview />
      <Newsletter />
      <Footer />
    </main>
  );
}
