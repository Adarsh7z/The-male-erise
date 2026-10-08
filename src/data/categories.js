import ocCover from '../assets/office/oc-1-cuban-linen.jpg';
import kurtaCover from '../assets/kurtas/kurta-1-ivory-silk.jpg';
import blazerCover from '../assets/blazers/blazer-1-navy-notch.jpg';

export const CATEGORIES = [
  {
    id: "office-casuals",
    name: "Office casuals",
    shortName: "Office Casuals",
    slug: "office-casuals",
    itemCount: 6,
    image: ocCover,
    description: "Refined linen button-downs, Cuban collars, smart pleated trousers & relaxed office-ready essentials."
  },
  {
    id: "kurta-pyjama",
    name: "Kurta-pyjama",
    shortName: "Kurta-Pyjama",
    slug: "kurta-pyjama",
    itemCount: 6,
    image: kurtaCover,
    description: "Artisanal handwoven silk kurtas, tailored pyjamas, and contemporary festive ethnic silhouettes for men."
  },
  {
    id: "blazers",
    name: "Blazers",
    shortName: "Blazers",
    slug: "blazers",
    itemCount: 6,
    image: blazerCover,
    description: "Tailored single-breasted notch lapel blazers, structured double-breasted jackets & luxury party blazers."
  }
];
