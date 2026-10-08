import kurta1 from '../assets/kurtas/kurta-1-black-embroidered.jpg';
import kurta2 from '../assets/kurtas/kurta-2-grey-silk.jpg';
import kurta3 from '../assets/kurtas/kurta-3-yellow-festive.jpg';
import kurta4 from '../assets/kurtas/kurta-4-navy-silk.jpg';
import kurta5 from '../assets/kurtas/kurta-5-ivory-resham.jpg';
import kurta6 from '../assets/kurtas/kurta-6-black-heritage.jpg';

import blazer1 from '../assets/blazers/blazer-1-navy-notch.jpg';
import blazer2 from '../assets/blazers/blazer-2-charcoal-tweed.jpg';
import blazer3 from '../assets/blazers/blazer-3-velvet-peak.jpg';
import blazer4 from '../assets/blazers/blazer-4-sand-linen.jpg';
import blazer5 from '../assets/blazers/blazer-5-savile-double-breasted.jpg';
import blazer6 from '../assets/blazers/blazer-6-wine-jacquard.jpg';

export const PRODUCTS = [
  // --- SECTION 1: Office casuals (Menswear Only) ---
  {
    id: "moe-oc-01",
    name: "Erise Cuban Collar Pure Linen Shirt",
    category: "Office casuals",
    categorySlug: "office-casuals",
    price: 1899,
    originalPrice: 4299,
    discount: "56% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewsCount: 42,
    isFeatured: true,
    badge: "Bestseller",
    images: [
      "/photos/mob-p01-a.jpg",
      "/photos/mob-p01-b.jpg"
    ],
    description: "Breathable French flax linen with a structured Cuban open collar and mother-of-pearl buttons. Tailored for effortless boardroom-to-evening transitions.",
    fabric: "100% French Linen",
    care: "Gentle cold machine wash, line dry in shade."
  },
  {
    id: "moe-oc-02",
    name: "Erise Double-Pleated Tailored Trouser",
    category: "Office casuals",
    categorySlug: "office-casuals",
    price: 2199,
    originalPrice: 4999,
    discount: "56% OFF",
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.8,
    reviewsCount: 38,
    isFeatured: true,
    badge: "Popular",
    images: [
      "/photos/mob-p03-a.jpg",
      "/photos/mob-p03-b.jpg"
    ],
    description: "High-waisted sartorial silhouette with sharp double front pleats and side tab adjusters. Fluid drape with comfort stretch.",
    fabric: "Poly-Viscose Wool Blend with 2% Elastane",
    care: "Dry clean or gentle steam iron."
  },
  {
    id: "moe-oc-03",
    name: "Executive Supima Cotton Oxford Shirt",
    category: "Office casuals",
    categorySlug: "office-casuals",
    price: 1699,
    originalPrice: 3899,
    discount: "56% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewsCount: 51,
    isFeatured: true,
    badge: "Workwear",
    images: [
      "/photos/mob-p02-a.jpg",
      "/photos/mob-p02-b.jpg"
    ],
    description: "Crisp 100-ply long staple American Supima cotton oxford weave with tailored button-down collar and reinforced French seams.",
    fabric: "100% Supima Long Staple Cotton",
    care: "Machine wash warm, warm iron."
  },
  {
    id: "moe-oc-04",
    name: "Erise Knit Milano Office Polo",
    category: "Office casuals",
    categorySlug: "office-casuals",
    price: 1599,
    originalPrice: 3499,
    discount: "54% OFF",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewsCount: 29,
    isFeatured: false,
    badge: "Smart Casual",
    images: [
      "/photos/mob-p04-a.jpg",
      "/photos/mob-p04-b.jpg"
    ],
    description: "Fine-gauge knitted polo with ribbed hem and cuffs. Luxurious soft handfeel perfect under blazers or worn solo.",
    fabric: "Mercerized Combed Cotton Knit",
    care: "Dry flat, cool iron inside out."
  },

  // --- SECTION 2: Kurta-pyjama (100% Men's Attire Only — From Reference Screenshot) ---
  {
    id: "moe-kp-01",
    name: "Black Embroidered Men's Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 3999,
    originalPrice: 8999,
    discount: "56% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 5.0,
    reviewsCount: 64,
    isFeatured: true,
    badge: "Festive Royalty",
    images: [
      kurta1,
      kurta6
    ],
    description: "Handcrafted black silk kurta with intricate resham thread embroidery and geometric border accents, accompanied by a coordinating patterned stole and tailored black trousers.",
    fabric: "Pure Raw Silk with Georgette Stole",
    care: "Dry clean only."
  },
  {
    id: "moe-kp-02",
    name: "Grey Textured Silk Kurta Pyjama",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 3499,
    originalPrice: 7999,
    discount: "56% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 4.9,
    reviewsCount: 47,
    isFeatured: true,
    badge: "Bestseller",
    images: [
      kurta2,
      kurta4
    ],
    description: "Artisanal grey jacquard textured silk kurta featuring self-woven patterns, tailored mandarin collar, and classic ivory churidar pyjamas.",
    fabric: "100% Jacquard Silk Blend",
    care: "Dry clean recommended."
  },
  {
    id: "moe-kp-03",
    name: "Royal Mustard Embroidered Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 2999,
    originalPrice: 6999,
    discount: "57% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 39,
    isFeatured: true,
    badge: "Festive Essential",
    images: [
      kurta3,
      kurta5
    ],
    description: "Vibrant festive mustard yellow kurta adorned with fine sequin and mirror-work thread embroidery, paired with draped pleated white dhoti-pyjamas.",
    fabric: "Chanderi Silk with Cotton Mulmul Lining",
    care: "Gentle dry clean only."
  },
  {
    id: "moe-kp-04",
    name: "Royal Navy Blue Silk Kurta Pyjama",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 3299,
    originalPrice: 7499,
    discount: "56% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 5.0,
    reviewsCount: 58,
    isFeatured: true,
    badge: "Contemporary",
    images: [
      kurta4,
      kurta2
    ],
    description: "Sartorial deep navy blue raw silk kurta distinguished by a diagonal hand-embroidered resham panel, metallic button placket, and tailored white pyjamas.",
    fabric: "Pure Bhagalpuri Raw Silk",
    care: "Specialist dry clean only."
  },
  {
    id: "moe-kp-05",
    name: "Ivory Resham Floral Embroidered Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 3699,
    originalPrice: 8499,
    discount: "56% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.9,
    reviewsCount: 43,
    isFeatured: false,
    badge: "Wedding Special",
    images: [
      kurta5,
      kurta3
    ],
    description: "Regal ivory silk kurta lavishly detailed with pastel resham floral embroidery on the chest and collar, paired with crisp straight-cut tailored trousers.",
    fabric: "Mulberry Silk with Resham Embroidery",
    care: "Dry clean only."
  },
  {
    id: "moe-kp-06",
    name: "Heritage Black Floral Sherwani Kurta",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 4499,
    originalPrice: 9999,
    discount: "55% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 5.0,
    reviewsCount: 61,
    isFeatured: false,
    badge: "Grand Occasion",
    images: [
      kurta6,
      kurta1
    ],
    description: "Grand black occasion sherwani-style kurta featuring multi-colored Kashmiri-inspired floral resham needlework and tailored mandarin collar, paired with black trousers.",
    fabric: "Heavy Silk Brocade with Hand Embroidery",
    care: "Specialist dry clean only."
  },

  // --- SECTION 3: Blazers (Menswear Only) ---
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
    id: "moe-bz-02",
    name: "Charcoal Herringbone Tweed Blazer",
    category: "Blazers",
    categorySlug: "blazers",
    price: 4799,
    originalPrice: 11299,
    discount: "58% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 39,
    isFeatured: true,
    badge: "WINTER WARMTH",
    images: [blazer2],
    description: "Heritage winter tweed blazer woven in a rich charcoal herringbone pattern. Features structured shoulders, notch lapels, ticket pocket, and flap pockets.",
    fabric: "100% Shetland Pure New Wool Tweed",
    care: "Dry clean only."
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
  address: "Bodakdev, Ahmedabad, Gujarat, India",
  addressDisplay: "Bodakdev, Ahmedabad, Gujarat, India",
  socials: {
    instagram: "https://instagram.com/maleordererise",
    whatsapp: "https://wa.me/919106688717",
    maps: "https://maps.app.goo.gl/gjsVJZEEbnEVsemeA"
  }
};
