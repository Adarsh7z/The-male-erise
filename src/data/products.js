// Blazers Local High-Resolution Photography Assets (Untouched)
import blazer1 from '../assets/blazers/blazer-1-navy-notch.jpg';
import blazer3 from '../assets/blazers/blazer-3-velvet-peak.jpg';
import blazer4 from '../assets/blazers/blazer-4-sand-linen.jpg';
import blazer5 from '../assets/blazers/blazer-5-savile-double-breasted.jpg';
import blazer6 from '../assets/blazers/blazer-6-wine-jacquard.jpg';

export const PRODUCTS = [
  // =========================================================================
  // SECTION 1: Shirts (Real Products from Catalog, Alphabetical Order)
  // =========================================================================
  {
    id: "moe-sh-01",
    name: "Beige, maroon shirt",
    slug: "beige-maroon-shirt",
    category: "Shirts",
    categorySlug: "shirts",
    price: 1899,
    originalPrice: 4299,
    discount: "56% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewsCount: 44,
    isFeatured: true,
    badge: "Bestseller",
    images: [
      "/images/products/beige-maroon-shirt-1.jpg",
      "/images/products/beige-maroon-shirt-2.jpg"
    ],
    description: "Elegantly styled beige and maroon patterned casual shirt crafted with tailored collar and breathable premium cotton weave for modern everyday refinement.",
    fabric: "100% Premium Breathable Cotton",
    care: "Gentle machine wash cold, warm iron inside out."
  },
  {
    id: "moe-sh-02",
    name: "Cream grey shirt",
    slug: "cream-grey-shirt",
    category: "Shirts",
    categorySlug: "shirts",
    price: 1799,
    originalPrice: 3999,
    discount: "55% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewsCount: 38,
    isFeatured: true,
    badge: "New Arrival",
    images: [
      "/images/products/cream-grey-shirt-1.jpg",
      "/images/products/cream-grey-shirt-2.jpg"
    ],
    description: "Subtle textured cream and grey tonal shirt featuring a sharp spread collar, tailored placket, and ultra-comfortable drape for casual to smart office wear.",
    fabric: "Luxury Combed Cotton Blend",
    care: "Machine wash cold with like colors, tumble dry low."
  },
  {
    id: "moe-sh-03",
    name: "Olive grey shirt",
    slug: "olive-grey-shirt",
    category: "Shirts",
    categorySlug: "shirts",
    price: 1999,
    originalPrice: 4499,
    discount: "56% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewsCount: 52,
    isFeatured: true,
    badge: "Trending",
    images: [
      "/images/products/olive-grey-shirt-1.jpg",
      "/images/products/olive-grey-shirt-2.jpg"
    ],
    description: "Contemporary olive and grey shirt engineered with structured tailoring, durable mother-of-pearl finish buttons, and all-day soft-touch breathability.",
    fabric: "100% Long-Staple Compact Cotton",
    care: "Gentle cold cycle wash, medium steam iron."
  },

  // =========================================================================
  // SECTION 2: Kurtas (Real Products from Catalog, Alphabetical Order)
  // =========================================================================
  {
    id: "moe-ku-01",
    name: "Blue kurta",
    slug: "blue-kurta",
    category: "Kurtas",
    categorySlug: "kurtas",
    price: 2999,
    originalPrice: 6499,
    discount: "54% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 5.0,
    reviewsCount: 67,
    isFeatured: true,
    badge: "Bestseller",
    images: [
      "/images/products/blue-kurta-1.jpg",
      "/images/products/blue-kurta-2.jpg",
      "/images/products/blue-kurta-3.jpg"
    ],
    description: "Rich royal blue kurta with artisanal mandarin collar and subtle handcrafted placket detailing. Designed for festive gatherings and wedding occasions.",
    fabric: "Artisanal Silk-Cotton Blend",
    care: "Gentle hand wash or dry clean recommended."
  },
  {
    id: "moe-ku-02",
    name: "Nb kurta",
    slug: "nb-kurta",
    category: "Kurtas",
    categorySlug: "kurtas",
    price: 3299,
    originalPrice: 7299,
    discount: "55% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 4.9,
    reviewsCount: 59,
    isFeatured: true,
    badge: "Handcrafted",
    images: [
      "/images/products/nb-kurta-1.jpg",
      "/images/products/nb-kurta-2.jpg",
      "/images/products/nb-kurta-3.jpg"
    ],
    description: "Tailored deep navy/black festive kurta featuring exquisite textured weave, structured silhouette, and refined cuffs for modern ethnic celebrations.",
    fabric: "Pure Textured Cotton Silk",
    care: "Specialist dry clean only."
  },
  {
    id: "moe-ku-03",
    name: "Pink kurta",
    slug: "pink-kurta",
    category: "Kurtas",
    categorySlug: "kurtas",
    price: 2899,
    originalPrice: 6299,
    discount: "54% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 46,
    isFeatured: true,
    badge: "Festive Essential",
    images: [
      "/images/products/pink-kurta-1.jpg",
      "/images/products/pink-kurta-2.jpg"
    ],
    description: "Vibrant festive pink kurta crafted from lightweight breathable chanderi silk-cotton. Features intricate tone-on-tone accents and relaxed comfort fit.",
    fabric: "Fine Chanderi Silk-Cotton",
    care: "Dry clean or gentle hand wash separately."
  },
  {
    id: "moe-ku-04",
    name: "Yellow kurta",
    slug: "yellow-kurta",
    category: "Kurtas",
    categorySlug: "kurtas",
    price: 2799,
    originalPrice: 5999,
    discount: "53% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 4.9,
    reviewsCount: 51,
    isFeatured: false,
    badge: "Haldi Special",
    images: [
      "/images/products/yellow-kurta-1.jpg",
      "/images/products/yellow-kurta-2.jpg"
    ],
    description: "Bright auspicious yellow kurta designed for traditional ceremonies and celebrations, finished with elegant buttons and soft-touch lining.",
    fabric: "Pure Handloom Cotton Silk",
    care: "Gentle cold wash or dry clean."
  },

  // =========================================================================
  // SECTION 3: Blazers (Exactly 6 Products — 100% Untouched)
  // =========================================================================
  {
    id: "moe-bz-01",
    name: "Erise Navy Notch Lapel Blazer",
    category: "Blazers",
    categorySlug: "blazers",
    price: 4499,
    originalPrice: 10499,
    discount: "57% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.9,
    reviewsCount: 52,
    isFeatured: true,
    badge: "BESTSELLER",
    images: [blazer1],
    description: "Signature single-breasted navy blazer tailored from fine virgin wool with classic notch lapels, flap pockets, and mother-of-pearl buttons.",
    fabric: "Super 120s Italian Virgin Wool",
    care: "Specialist dry clean only."
  },
  {
    id: "moe-bz-03",
    name: "Midnight Velvet Peak Lapel Blazer",
    category: "Blazers",
    categorySlug: "blazers",
    price: 3999,
    originalPrice: 9499,
    discount: "58% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.9,
    reviewsCount: 45,
    isFeatured: true,
    badge: "BLACK TIE",
    images: [blazer3],
    description: "Opulent micro-pile black velvet dinner blazer featuring lustrous satin peak lapels, jetted pockets, and silk-covered buttons.",
    fabric: "100% Cotton Velvet with Satin Lapel Facing",
    care: "Professional dry clean only."
  },
  {
    id: "moe-bz-04",
    name: "Sand Linen Blend Summer Blazer",
    category: "Blazers",
    categorySlug: "blazers",
    price: 3799,
    originalPrice: 8999,
    discount: "58% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.7,
    reviewsCount: 34,
    isFeatured: false,
    badge: "SMART CASUAL",
    images: [blazer4],
    description: "Unstructured summer blazer tailored in lightweight sand linen blend. Breathable natural drape with casual patch pockets and horn buttons.",
    fabric: "65% French Linen, 35% Long Staple Cotton",
    care: "Gentle dry clean or steam iron."
  },
  {
    id: "moe-bz-05",
    name: "Savile Double-Breasted Wool Blazer",
    category: "Blazers",
    categorySlug: "blazers",
    price: 4999,
    originalPrice: 12999,
    discount: "62% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 5.0,
    reviewsCount: 68,
    isFeatured: true,
    badge: "ATELIER SIGNATURE",
    images: [blazer5],
    description: "Sartorial double-breasted 6-button blazer cut with sharp peak lapels and sculpted waist suppression in luxury navy virgin wool.",
    fabric: "85% Virgin Wool, 15% Cashmere Blend",
    care: "Specialist dry clean only."
  },
  {
    id: "moe-bz-06",
    name: "Wine Jacquard Party Blazer",
    category: "Blazers",
    categorySlug: "blazers",
    price: 4299,
    originalPrice: 9999,
    discount: "57% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 41,
    isFeatured: false,
    badge: "PARTY WEAR",
    images: [blazer6],
    description: "Statement party blazer woven with a subtle tonal damask jacquard weave in deep wine burgundy, finished with black satin shawl lapels.",
    fabric: "Silk-Poly Jacquard Blend with Satin Lapel",
    care: "Specialist dry clean only."
  }
];

export const BRAND_INFO = {
  name: "Male Order Erise",
  shortName: "Male Order",
  storeTitle: "Male Order Bodakdev",
  category: "Apparel & Clothing",
  tagline: "Tailoring of ethnic wear, suiting, shirting, and all types of traditional, party & wedding wear",
  phone: "9106688717",
  phoneDisplay: "+91 91066 88717",
  whatsappNumber: "919106688717",
  timings: "11:00 am till 09:00 pm",
  timingsDisplay: "11:00 am till 09:00 pm",
  shippingNotice: "Free express shipping on all orders.",
  googleMapsLink: "https://maps.app.goo.gl/gjsVJZEEbnEVsemeA",
  mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16484.46831769934!2d72.50545508715818!3d23.0342519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b5460078c1%3A0x658e0b3cafb018a1!2sMale%20Order%20Erise!5e1!3m2!1sen!2sin!4v1791451546085!5m2!1sen!2sin",
  addressDisplay: "Bodakdev, Ahmedabad, Gujarat, India",
  socials: {
    instagram: "https://instagram.com/maleordererise",
    whatsapp: "https://wa.me/919106688717",
    maps: "https://maps.app.goo.gl/gjsVJZEEbnEVsemeA"
  }
};
