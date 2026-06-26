import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";

export type Property = {
  id: string;
  title: string;
  area: string;
  locationNote: string;
  priceDisplay: string;
  sizeSqm: number;
  bedrooms: number;
  description: string;
  image: string;
  whatsappUrl: string;
};

const WA_BASE = "https://wa.me/33652616860";
const wa = (msg: string) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

export const properties: Property[] = [
  {
    id: "villa-cap-pines",
    title: "Villa des Pins",
    area: "Cap d'Antibes",
    locationNote: "West-facing waterfront, walking distance to Plage de la Garoupe",
    priceDisplay: "Price on application",
    sizeSqm: 520,
    bedrooms: 6,
    description:
      "A serene contemporary villa nestled among Mediterranean pines, with an infinity pool framing uninterrupted views across the bay.",
    image: property1,
    whatsappUrl: wa("Hello Nigel, I'd like more information about Villa des Pins, Cap d'Antibes."),
  },
  {
    id: "villa-belle-epoque",
    title: "Villa Belle Époque",
    area: "Cap d'Antibes",
    locationNote: "Historic estate on the eastern shore, private mooring",
    priceDisplay: "€28,500,000",
    sizeSqm: 780,
    bedrooms: 8,
    description:
      "A restored Belle Époque masterpiece set in manicured gardens of palm and cypress, with sweeping terraces opening onto the sea.",
    image: property2,
    whatsappUrl: wa("Hello Nigel, I'd like more information about Villa Belle Époque, Cap d'Antibes."),
  },
  {
    id: "penthouse-cannes-croisette",
    title: "Penthouse Croisette",
    area: "Cannes",
    locationNote: "Top-floor residence overlooking the bay and Lérins Islands",
    priceDisplay: "€9,200,000",
    sizeSqm: 240,
    bedrooms: 4,
    description:
      "A minimalist penthouse with full-height glazing, a wraparound terrace, and a private rooftop pool — a discreet address on the Croisette.",
    image: property3,
    whatsappUrl: wa("Hello Nigel, I'd like more information about Penthouse Croisette, Cannes."),
  },
  {
    id: "mas-mougins",
    title: "Mas des Lavandes",
    area: "Mougins",
    locationNote: "Provençal estate in the hills, 20 minutes from the coast",
    priceDisplay: "€6,750,000",
    sizeSqm: 410,
    bedrooms: 5,
    description:
      "An authentic stone mas surrounded by lavender, olive groves and umbrella pines — the Riviera's softer, slower counterpoint.",
    image: property4,
    whatsappUrl: wa("Hello Nigel, I'd like more information about Mas des Lavandes, Mougins."),
  },
];

export const WHATSAPP_CATALOG_URL = "https://wa.me/c/33652616860";
export const WHATSAPP_DIRECT_URL = WA_BASE;
