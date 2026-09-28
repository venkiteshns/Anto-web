export const SITE_CONFIG = {
  name: "Godrej Florenne",
  developer: "GODREJ PROPERTIES",
  subheading: "FLORENNE",
  location: "WHITEFIELD, BENGALURU",
  tagline: "NEW LAUNCH",
  heroEyebrow: "WHITEFIELD, BENGALURU · NEW LAUNCH",
  heroHeading: {
    line1: "French Renaissance",
    line2: "Reborn in",
    line3: "Whitefield",
  },
  filterText: {
    prefix: "I am looking for a",
    inText: "in",
    atPriceText: "at the price of",
  },
  heroCta: "EXPLORE RESIDENCES",
  introEyebrow: "SOUKYA ROAD, WHITEFIELD · FROM ABOVE",
  introHeading: {
    beforeItalic: "A Row-Villa ",
    italicWord: "Estate",
    afterItalic: ", Seen\nfrom the Sky",
  },
  introDescription:
    "Twenty acres of connected G+3 French Renaissance row villas — each set just 3 ft from its neighbour — with blue slate mansard roofs and cream limestone façades set among tree-lined avenues, landscaped gardens and a grand central clubhouse in the heart of Whitefield, Bengaluru.",
  imageGrid: [
    {
      src: "/images/estate-daylight.jpg",
      alt: "Aerial view of French Renaissance row villas with blue slate mansard roofs",
      caption: "The 20-acre estate at dusk",
    },
    {
      src: "/images/estate-dusk.jpg",
      alt: "Aerial dusk view of connected luxury row villas with illuminated avenues",
      caption: "Tree-lined avenues at dusk",
    },
  ],
};

export const NAV_LINKS = [
  { label: "RESIDENCES", href: "#typologies" },
  { label: "ENQUIRE", href: "#amenities" },
  { label: "ABOUT", href: "#locale" },
];

export const CONFIGURATION_OPTIONS = [
  "Any Configuration",
  "4 BHK Row Villa",
  "5 BHK Row Villa",
  "Grand Châteaux 5+ BHK",
];

export const PHASE_OPTIONS = [
  "Any Phase",
  "Phase 1 (The Promenade)",
  "Phase 2 (The Boulevard)",
  "All Phases",
];

export const PRICE_OPTIONS = [
  "Any Price",
  "₹ 4.5 Cr - 6 Cr",
  "₹ 6 Cr - 8 Cr",
  "₹ 8 Cr+",
];

export interface TypologyCardData {
  id: string;
  price?: string;
  title: string;
  phase: string;
  beds: string;
  baths: string;
  area: string;
  elevator: string;
  villaImage: string;
  bedroomImage: string;
  bedroomDescription: string;
}

export const TYPOLOGIES_DATA: TypologyCardData[] = [
  {
    id: "card-1",
    price: "₹5.40 Cr*",
    title: "4 Bed Optima",
    phase: "PHASE 1",
    beds: "4 Beds",
    baths: "4 Baths",
    area: "3,725 sq ft",
    elevator: "G+3 · KONE & MITSUBISHI ELEVATORS",
    villaImage: "/images/villa-optima.jpg",
    bedroomImage: "/images/bedroom-1.jpg",
    bedroomDescription:
      "A serene master suite with a walk-in wardrobe and private terrace, paired with three further bedrooms — each with its own en-suite bath and garden-facing arched windows.",
  },
  {
    id: "card-2",
    price: "₹5.90 Cr*",
    title: "4 Bed Premia",
    phase: "PHASE 1",
    beds: "4 Beds",
    baths: "5 Baths",
    area: "4,061 sq ft",
    elevator: "G+3 · KONE & MITSUBISHI ELEVATORS",
    villaImage: "/images/villa-premia.jpg",
    bedroomImage: "/images/bedroom-2.jpg",
    bedroomDescription:
      "A master suite with a private lounge and dressing room, a ground-floor guest bedroom, and three upper bedrooms with en-suite baths framed by tall classical windows.",
  },
  {
    id: "card-3",
    price: "₹6.55 Cr*",
    title: "4 Bed Luxe",
    phase: "PHASE 1",
    beds: "4 Beds",
    baths: "5 Baths",
    area: "4,515 sq ft",
    elevator: "G+3 · KONE & MITSUBISHI ELEVATORS",
    villaImage: "/images/villa-luxe.jpg",
    bedroomImage: "/images/bedroom-3.jpg",
    bedroomDescription:
      "A double-height master salon with a fireplace and rooftop access, a dedicated study-bedroom, and three en-suite bedrooms with calm garden views.",
  },
  {
    id: "card-4",
    title: "5 Bed Luxe",
    phase: "PHASE 1",
    beds: "5 Beds",
    baths: "6 Baths",
    area: "5,523 sq ft",
    elevator: "G+3 · KONE & MITSUBISHI ELEVATORS",
    villaImage: "/images/villa-optima.jpg",
    bedroomImage: "/images/bedroom-2.jpg",
    bedroomDescription:
      "Five luxury bedrooms — a double-height master suite with a canopy bed and private terrace, a ground-floor senior suite, and three en-suite family bedrooms with panoramic rooftop views.",
  },
  {
    id: "card-5",
    title: "4 Bed Optima",
    phase: "PHASE 2",
    beds: "4 Beds",
    baths: "4 Baths",
    area: "3,725 sq ft",
    elevator: "G+3 · KONE & MITSUBISHI ELEVATORS",
    villaImage: "/images/villa-premia.jpg",
    bedroomImage: "/images/bedroom-1.jpg",
    bedroomDescription:
      "A serene master suite with a walk-in wardrobe and private terrace, paired with three further bedrooms — each with its own en-suite bath and garden-facing arched windows.",
  },
];

export const LOCALE_DATA = {
  eyebrow: "SOUKYA ROAD, WHITEFIELD",
  heading: "The Locale",
  description:
    "Set on Soukya Road in Whitefield, Florenne places Bengaluru’s finest tech parks, schools, hospitals and retail within an easy, unhurried reach.",
  columns: [
    {
      time: "15–35 MIN DRIVE",
      title: "Tech Parks &\nEmployment",
      description: "ITPL, EPIP Zone, Hoodi and Bagmane ORR within easy reach",
    },
    {
      time: "NEARBY PROXIMITY",
      title: "Education &\nHealthcare",
      description: "NPS Whitefield, TISB, Greenwood High, Manipal & Vydehi Hospitals",
    },
    {
      time: "15–25 MIN DRIVE",
      title: "Retail &\nConnectivity",
      description: "Phoenix Marketcity, Nexus Shantiniketan, Metro Purple Line",
    },
  ],
  footerNote:
    "Direct connectivity to Whitefield Main Road, Old Madras Road (NH 75) and the Satellite Town Ring Road (STRR), with the Namma Metro Purple Line ~15 minutes away.",
};

export const AMENITIES_DATA = {
  eyebrow: "AMENITIES & LIFESTYLE",
  heading: "A Resort,\nAt Home",
  description:
    "Over 75% open space, a grand multi-level clubhouse and a full spectrum of wellness, sports and family amenities — all within the gates of Florenne.",
  buttonText: "EXPLORE THE COMMUNITY",
  items: [
    {
      id: "amenity-1",
      title: "Clubhouse & Recreation",
      description:
        "A grand multi-level clubhouse with a resort-style pool, indoor games arcade, mini-theatre, spa, library and banquet spaces for every gathering.",
      icon: "clubhouse",
    },
    {
      id: "amenity-2",
      title: "Wellness & Fitness",
      description:
        "A state-of-the-art gymnasium with a dedicated senior citizens’ zone, yoga and meditation decks, jogging tracks and cycling loops through green space.",
      icon: "wellness",
    },
    {
      id: "amenity-3",
      title: "Sports & Nature",
      description:
        "Tennis, basketball and cricket courts, an amphitheatre, pet park and over 75% open space composed of themed gardens and tree-lined avenues.",
      icon: "sports",
    },
    {
      id: "amenity-4",
      title: "Safely & Smart Living",
      description:
        "Multi-tier 24/7 security with CCTV, video door phones, EV charging, rainwater harvesting, solar power and full backup for every common area.",
      icon: "security",
    },
    {
      id: "amenity-5",
      title: "Private Elevators",
      description:
        "Every G+3 connected row villa — set just 3 ft from its neighbour — is served by its own private KONE and Mitsubishi elevator linking all four floors, ground to rooftop terrace.",
      icon: "elevator",
    },
  ],
};
