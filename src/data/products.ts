export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  details: string[];
  images: string[];
  featured: boolean;
  collection: string;
}

export const products: Product[] = [
  {
    id: "silver-horse-pendant",
    name: "Ethereal Horse Pendant",
    price: 485,
    category: "necklaces",
    description: "A masterfully handcrafted sterling silver horse pendant, capturing the grace and spirit of freedom in every curve. Each piece is individually sculpted by our master artisans.",
    details: [
      "925 Sterling Silver",
      "Handcrafted by master artisans",
      "Adjustable chain length: 40-45cm",
      "Comes with certificate of authenticity",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_230901_365.jpg", "/images/IMG_20260628_230917_089.jpg"],
    featured: true,
    collection: "Spirit Collection"
  },
  {
    id: "midnight-luna-ring",
    name: "Luna Midnight Ring",
    price: 620,
    category: "rings",
    description: "Inspired by the crescent moon's ethereal glow, this ring features hand-set stones along a sculpted silver band that catches light with every movement.",
    details: [
      "925 Sterling Silver with Rhodium Plating",
      "Hand-set cubic zirconia stones",
      "Available in sizes 5-10",
      "Tarnish-resistant coating",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_231439_823.JPG", "/images/IMG_20260628_161228_275.jpg"],
    featured: true,
    collection: "Celestial Series"
  },
  {
    id: "woven-heritage-bracelet",
    name: "Heritage Weave Bracelet",
    price: 345,
    category: "bracelets",
    description: "A testament to timeless craftsmanship, this woven silver bracelet interlinks delicate chains into a statement piece that bridges modern elegance with ancient artistry.",
    details: [
      "925 Sterling Silver",
      "Hand-woven chain links",
      "Length: 18cm with 3cm extension",
      "Lobster clasp closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_161228_201.jpg", "/images/IMG_20260628_161228_690.jpg"],
    featured: true,
    collection: "Artisan Series"
  },
  {
    id: "crystal-drop-earrings",
    name: "Crystal Cascade Earrings",
    price: 275,
    category: "earrings",
    description: "Cascading crystal elements suspended from hand-formed silver hooks, these earrings create a mesmerizing dance of light with every turn of the head.",
    details: [
      "925 Sterling Silver hooks",
      "Crystal cascade elements",
      "Drop length: 5.5cm",
      "Lightweight for all-day wear",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_161228_201.jpg", "/images/IMG_20260628_161228_690.jpg"],
    featured: true,
    collection: "Celestial Series"
  },
  {
    id: "serpent-coil-necklace",
    name: "Serpent Coil Necklace",
    price: 890,
    category: "necklaces",
    description: "An audacious statement piece featuring a hand-sculpted serpent that coils elegantly around the collarbone. A bold celebration of transformation and inner strength.",
    details: [
      "925 Sterling Silver with oxidation detail",
      "Hand-sculpted serpent head",
      "Chain length: 42cm",
      "Weight: 28g",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_230901_365.jpg", "/images/IMG_20260628_230917_089.jpg"],
    featured: false,
    collection: "Spirit Collection"
  },
  {
    id: "infinity-bangle",
    name: "Infinite Grace Bangle",
    price: 415,
    category: "bracelets",
    description: "The infinity symbol reimagined through Delaviz's signature sculptural approach. A fluid, organic form that speaks to eternal elegance.",
    details: [
      "925 Sterling Silver",
      "Hand-polished mirror finish",
      "Internal diameter: 6.5cm",
      "Hinged opening mechanism",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_161228_275.jpg", "/images/IMG_20260628_161228_201.jpg"],
    featured: false,
    collection: "Artisan Series"
  },
  {
    id: "starburst-choker",
    name: "Starburst Choker",
    price: 560,
    category: "necklaces",
    description: "A dramatic choker featuring radiating starburst elements that catch and reflect light. Perfect for evening wear and special occasions.",
    details: [
      "925 Sterling Silver with gold vermeil",
      "Hand-set accent stones",
      "Adjustable: 34-38cm",
      "Safety clasp closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_231439_823.JPG", "/images/IMG_20260628_161228_275.jpg"],
    featured: false,
    collection: "Celestial Series"
  },
  {
    id: "ornate-scroll-ring",
    name: "Ornate Scroll Ring",
    price: 380,
    category: "rings",
    description: "Baroque-inspired scrollwork hand-carved into a substantial silver band. Each ring is a wearable sculpture that tells a story of craftsmanship.",
    details: [
      "925 Sterling Silver",
      "Hand-carved scrollwork",
      "Band width: 12mm",
      "Available in sizes 5-12",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_230901_365.jpg", "/images/IMG_20260628_230917_089.jpg"],
    featured: false,
    collection: "Artisan Series"
  },
  {
    id: "feather-drop-earrings",
    name: "Feather Whisper Earrings",
    price: 295,
    category: "earrings",
    description: "Impossibly light, these feather-inspired earrings are hand-formed from silver wire, creating an organic silhouette that moves like silk.",
    details: [
      "925 Sterling Silver wire",
      "Hand-formed feather design",
      "Drop length: 7cm",
      "French hook closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/IMG_20260628_230901_365.jpg", "/images/IMG_20260628_161228_690.jpg"],
    featured: false,
    collection: "Spirit Collection"
  }
];

export const collections = [
  {
    id: "spirit",
    name: "Spirit Collection",
    description: "Pieces that capture the essence of freedom and transformation",
    image: "/images/IMG_20260628_230901_365.jpg"
  },
  {
    id: "celestial",
    name: "Celestial Series",
    description: "Inspired by the moon, stars, and cosmic elegance",
    image: "/images/IMG_20260628_231439_823.JPG"
  },
  {
    id: "artisan",
    name: "Artisan Series",
    description: "Celebrating the ancient craft of hand-weaving and sculpting",
    image: "/images/IMG_20260628_161228_201.jpg"
  }
];

export const categories = ["all", "necklaces", "rings", "bracelets", "earrings"];
