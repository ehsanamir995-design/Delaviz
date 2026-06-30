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
  },
  {
    id: "lilium-half-set",
    name: "Lilium Half Set",
    price: 780,
    category: "sets",
    description: "A stunning sterling silver half set inspired by the delicate beauty of lily blossoms. The matching necklace and earring pair creates a harmonious statement of floral elegance.",
    details: [
      "925 Sterling Silver",
      "Handcrafted lily blossom design",
      "Necklace length: 42cm, Earrings drop: 4cm",
      "Matching set with signature packaging",
      "Delaviz signature packaging"
    ],
    images: ["/images/نیم-ست-لیلیوم-نقره-گالری-دلاویز-2-scaled.webp", "/images/نیم-ست-لیلیوم-نقره-گالری-دلاویز-3-scaled.webp"],
    featured: true,
    collection: "Lilium Collection"
  },
  {
    id: "lilium-earrings",
    name: "Lilium Silver Earrings",
    price: 320,
    category: "earrings",
    description: "Delicate lily-inspired earrings handcrafted in sterling silver. Each petal is individually sculpted to capture the flower's natural grace and femininity.",
    details: [
      "925 Sterling Silver",
      "Hand-sculpted lily petal design",
      "Drop length: 4.5cm",
      "Lever-back closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/گوشواره-نقره-لیلیوم-گالری-دلاویز-1-600x739.webp", "/images/نیم-ست-لیلیوم-نقره-گالری-دلاویز-2-scaled.webp"],
    featured: true,
    collection: "Lilium Collection"
  },
  {
    id: "cascade-flower-earrings",
    name: "Cascade Bloom Earrings",
    price: 290,
    category: "earrings",
    description: "Flowing silver cascade earrings adorned with hand-formed flower elements. These earrings create a mesmerizing dance of light and movement with every step.",
    details: [
      "925 Sterling Silver",
      "Hand-formed cascade flower design",
      "Drop length: 6cm",
      "Fish hook closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/گوشواره ریسه ای شکوفه نقره.jpg", "/images/گوشواره-نقره-لیلیوم-گالری-دلاویز-1-600x739.webp"],
    featured: false,
    collection: "Lilium Collection"
  },
  {
    id: "lilium-necklace",
    name: "Lilium Blossom Necklace",
    price: 520,
    category: "necklaces",
    description: "A captivating sterling silver necklace featuring hand-sculpted lily blossoms along a delicate chain. A wearable garden of artisan-crafted beauty.",
    details: [
      "925 Sterling Silver",
      "Hand-sculpted lily blossom charms",
      "Chain length: 40-45cm adjustable",
      "Lobster clasp closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/گردنبند-گل-لیلیوم-نقره-گالری-دلاویز-2-scaled.webp", "/images/نیم-ست-لیلیوم-نقره-گالری-دلاویز-3-scaled.webp"],
    featured: false,
    collection: "Lilium Collection"
  },
  {
    id: "horse-clasp-pendant",
    name: "Equestrian Clasp Pendant",
    price: 445,
    category: "necklaces",
    description: "A bold equestrian-inspired pendant featuring a horse clasp motif, handcrafted in sterling silver. A tribute to strength, loyalty, and the timeless bond between rider and steed.",
    details: [
      "925 Sterling Silver",
      "Hand-sculpted horse clasp design",
      "Chain length: 42cm",
      "Weight: 18g",
      "Delaviz signature packaging"
    ],
    images: ["/images/اسب-قفل-تی-1-گالری-دلاویز-600x685.webp", "/images/IMG_20260628_230901_365.jpg"],
    featured: false,
    collection: "Spirit Collection"
  },
  {
    id: "horse-horseshoe-pendant",
    name: "Fortune Horse Pendant",
    price: 510,
    category: "necklaces",
    description: "A striking pendant combining a horse and horseshoe motif, handcrafted in sterling silver. Symbolizing luck and freedom, this piece is a talisman of good fortune.",
    details: [
      "925 Sterling Silver with antiqued finish",
      "Horse and horseshoe motif",
      "Chain length: 45cm",
      "Weight: 22g",
      "Delaviz signature packaging"
    ],
    images: ["/images/آویز-اسب-و-نعل-اسب-دلاویز-گالری-scaled.webp", "/images/اسب-قفل-تی-1-گالری-دلاویز-600x685.webp"],
    featured: false,
    collection: "Spirit Collection"
  },
  {
    id: "artisan-银ring",
    name: "Artisan Heritage Ring",
    price: 350,
    category: "rings",
    description: "A bold, hand-forged silver ring with organic textures that celebrate the raw beauty of artisan metalwork. Each ring carries unique marks of its creation.",
    details: [
      "925 Sterling Silver",
      "Hand-forged organic texture",
      "Band width: 10mm",
      "Available in sizes 5-12",
      "Delaviz signature packaging"
    ],
    images: ["/images/New folder/IMG_4513.JPG", "/images/IMG_20260628_161228_275.jpg"],
    featured: false,
    collection: "Artisan Series"
  },
  {
    id: "silver-wire-bracelet",
    name: "Silver Wire Wrap Bracelet",
    price: 265,
    category: "bracelets",
    description: "An intricate wire-wrapped bracelet handcrafted from sterling silver. The organic wrapping technique creates a one-of-a-kind piece that wraps the wrist in artisan luxury.",
    details: [
      "925 Sterling Silver wire",
      "Hand-wrapped design",
      "Length: 17cm with 2cm extension",
      "Toggle clasp closure",
      "Delaviz signature packaging"
    ],
    images: ["/images/New folder/IMG_5320.JPG", "/images/IMG_20260628_161228_201.jpg"],
    featured: false,
    collection: "Artisan Series"
  },
  {
    id: "pendant-necklace-silver",
    name: "Silver Charm Necklace",
    price: 395,
    category: "necklaces",
    description: "A delicate chain adorned with hand-crafted silver charms. Each charm is individually made, creating a necklace that tells a story of craftsmanship and attention to detail.",
    details: [
      "925 Sterling Silver",
      "Hand-crafted charm elements",
      "Chain length: 42cm",
      "Spring ring clasp",
      "Delaviz signature packaging"
    ],
    images: ["/images/New folder/IMG_5365.JPG", "/images/IMG_20260628_231439_823.JPG"],
    featured: false,
    collection: "Celestial Series"
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
  },
  {
    id: "lilium",
    name: "Lilium Collection",
    description: "Delicate floral designs inspired by the beauty of lily blossoms",
    image: "/images/نیم-ست-لیلیوم-نقره-گالری-دلاویز-2-scaled.webp"
  }
];

export const categories = ["all", "necklaces", "rings", "bracelets", "earrings", "sets"];
