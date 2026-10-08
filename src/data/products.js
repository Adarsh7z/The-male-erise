// Office Casuals Local High-Resolution Photography Assets (1024x1024, optimized < 150KB)
import oc1 from '../assets/office/oc-1-cuban-linen.jpg';
import oc2 from '../assets/office/oc-2-pleated-trouser.jpg';
import oc3 from '../assets/office/oc-3-oxford-shirt.jpg';
import oc4 from '../assets/office/oc-4-knit-polo.jpg';
import oc5 from '../assets/office/oc-5-chino-trouser.jpg';
import oc6 from '../assets/office/oc-6-merino-knit.jpg';

// Kurta-Pyjama Local High-Resolution Photography Assets (1024x1024, optimized < 150KB)
import kurta1 from '../assets/kurtas/kurta-1-ivory-silk.jpg';
import kurta2 from '../assets/kurtas/kurta-2-navy-embroidered.jpg';
import kurta3 from '../assets/kurtas/kurta-3-yellow-festive.jpg';
import kurta4 from '../assets/kurtas/kurta-4-grey-silk.jpg';
import kurta5 from '../assets/kurtas/kurta-5-lilac-jacket.jpg';
import kurta6 from '../assets/kurtas/kurta-6-white-linen.jpg';

// Blazers Local High-Resolution Photography Assets (1024x1024, optimized < 150KB)
import blazer1 from '../assets/blazers/blazer-1-navy-notch.jpg';
import blazer2 from '../assets/blazers/blazer-2-charcoal-tweed.jpg';
import blazer3 from '../assets/blazers/blazer-3-velvet-peak.jpg';
import blazer4 from '../assets/blazers/blazer-4-sand-linen.jpg';
import blazer5 from '../assets/blazers/blazer-5-savile-double-breasted.jpg';
import blazer6 from '../assets/blazers/blazer-6-wine-jacquard.jpg';

export const PRODUCTS = [
  // =========================================================================
  // SECTION 1: Office casuals (Exactly 6 Men's Products, 4 Garment Types)
  // =========================================================================
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
    images: [oc1],
    description: "Breathable sand linen shirt crafted with a structured Cuban open revere collar and mother-of-pearl buttons. Tailored for effortless boardroom-to-evening transitions.",
    fabric: "100% French Flax Linen",
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
    images: [oc2],
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
    images: [oc3],
    description: "Crisp sky blue pin-striped executive dress shirt woven from 100% long-staple Supima cotton. Classic spread collar and barrel cuffs for daily business rigor.",
    fabric: "100% Long-Staple Supima Cotton",
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
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewsCount: 29,
    isFeatured: false,
    badge: "Smart Casual",
    images: [oc4],
    description: "Fine-gauge knitted navy polo with structured collar, 3-button placket, and ribbed cuffs. Luxurious soft handfeel perfect under blazers or worn solo.",
    fabric: "Mercerized Combed Cotton Knit",
    care: "Dry flat, cool iron inside out."
  },
  {
    id: "moe-oc-05",
    name: "Erise Stretch Cotton Chino Trouser",
    category: "Office casuals",
    categorySlug: "office-casuals",
    price: 2099,
    originalPrice: 4699,
    discount: "55% OFF",
    sizes: ["30", "32", "34", "36", "38"],
    rating: 4.9,
    reviewsCount: 33,
    isFeatured: false,
    badge: "Atelier Essential",
    images: [oc5],
    description: "Tailored slim-fit khaki chinos cut from breathable stretch cotton twill. Flat front design with side slant pockets and piped back pockets.",
    fabric: "98% Combed Cotton Twill, 2% Elastane",
    care: "Machine wash cold with like colors, tumble dry low."
  },
  {
    id: "moe-oc-06",
    name: "Erise Merino Blend Crew Neck Knit",
    category: "Office casuals",
    categorySlug: "office-casuals",
    price: 2299,
    originalPrice: 4999,
    discount: "54% OFF",
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewsCount: 26,
    isFeatured: true,
    badge: "Winter Warmth",
    images: [oc6],
    description: "Fine-gauge burgundy knit sweater tailored in an extrafine merino wool blend. Ribbed neck, hem, and cuffs for sophisticated cool-weather office layering.",
    fabric: "70% Extrafine Merino Wool, 30% Cotton",
    care: "Hand wash cold or gentle dry clean, lay flat to dry."
  },

  // =========================================================================
  // SECTION 2: Kurta-pyjama (Exactly 6 Men's Products, 6 Colors, 3 Looks)
  // =========================================================================
  {
    id: "moe-kp-01",
    name: "Erise Ivory Cotton Silk Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 2999,
    originalPrice: 6499,
    discount: "54% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 5.0,
    reviewsCount: 64,
    isFeatured: true,
    badge: "Bestseller",
    images: [kurta1],
    description: "Artisanal ivory cotton-silk kurta featuring a refined mandarin collar, mother-of-pearl buttons, and fine natural silk sheen, paired with tailored churidar pyjamas.",
    fabric: "Pure Cotton Silk Blend",
    care: "Gentle hand wash or dry clean."
  },
  {
    id: "moe-kp-02",
    name: "Navy Embroidered Festive Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 3499,
    originalPrice: 7999,
    discount: "56% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 4.9,
    reviewsCount: 58,
    isFeatured: true,
    badge: "Contemporary",
    images: [kurta2],
    description: "Sartorial deep navy raw silk kurta detailed with intricate tone-on-tone resham embroidery across the placket and collar, paired with crisp ivory pyjamas.",
    fabric: "Pure Bhagalpuri Raw Silk",
    care: "Specialist dry clean only."
  },
  {
    id: "moe-kp-03",
    name: "Pastel Yellow Festive Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 3199,
    originalPrice: 6999,
    discount: "54% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 47,
    isFeatured: true,
    badge: "Festive Essential",
    images: [kurta3],
    description: "Vibrant festive sunflower yellow kurta adorned with artisanal chikankari thread embroidery and mirror-work accents, paired with white pyjamas.",
    fabric: "Fine Chanderi Cotton Silk",
    care: "Gentle dry clean only."
  },
  {
    id: "moe-kp-04",
    name: "Grey Textured Silk Kurta Pyjama",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 2799,
    originalPrice: 5999,
    discount: "53% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 4.9,
    reviewsCount: 43,
    isFeatured: true,
    badge: "Smart Traditional",
    images: [kurta4],
    description: "Subtle steel grey jacquard textured silk kurta featuring self-woven patterns, tailored mandarin collar, metallic accent buttons, and classic light grey pyjamas.",
    fabric: "100% Jacquard Silk Blend",
    care: "Dry clean recommended."
  },
  {
    id: "moe-kp-05",
    name: "Pastel Lilac Nehru Jacket Kurta Set",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 4299,
    originalPrice: 9499,
    discount: "55% OFF",
    sizes: ["38", "40", "42", "44", "46"],
    rating: 5.0,
    reviewsCount: 62,
    isFeatured: false,
    badge: "Festive Royalty",
    images: [kurta5],
    description: "Regal 3-piece ethnic ensemble: pastel lilac cotton-silk kurta and pyjama paired with a tailored geometric jacquard Nehru bandi jacket featuring brass buttons.",
    fabric: "Silk-Cotton Kurta with Woven Brocade Jacket",
    care: "Dry clean only."
  },
  {
    id: "moe-kp-06",
    name: "White Linen Everyday Kurta Pyjama",
    category: "Kurta-pyjama",
    categorySlug: "kurta-pyjama",
    price: 1999,
    originalPrice: 4299,
    discount: "54% OFF",
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 35,
    isFeatured: false,
    badge: "Daily Wear",
    images: [kurta6],
    description: "Crisp pure white breathable linen everyday kurta paired with straight-cut relaxed pyjamas. Effortlessly light and airy for daily comfort and informal gatherings.",
    fabric: "100% Pure Organic Linen",
    care: "Machine wash cold, line dry in shade."
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
  addressDisplay: "Bodakdev, Ahmedabad, Gujarat, India",
  socials: {
    instagram: "https://instagram.com/maleordererise",
    whatsapp: "https://wa.me/919106688717",
    maps: "https://maps.app.goo.gl/gjsVJZEEbnEVsemeA"
  }
};
