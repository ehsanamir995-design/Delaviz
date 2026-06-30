import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Delaviz | Handcrafted Luxury Jewelry",
  description:
    "Where artistry meets the eternal. Premium handcrafted jewelry born from passion, shaped by master artisans.",
  keywords: ["luxury jewelry", "handcrafted jewelry", "artisan jewelry", "silver jewelry", "Delaviz"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-onyx-950 text-champagne-50 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
