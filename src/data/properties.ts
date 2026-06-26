type LangSuffix = "fr" | "sv" | "no" | "da" | "ru";
type Translatable<K extends string> = {
  [P in K | `${K}_${LangSuffix}`]?: string;
} & { [P in K]: string };

export type Property = {
  slug: string;
  area: string;
  locationNote: string;
  priceDisplay: string;
  sizeSqm: number | null;
  bedrooms: number | null;
  image: string;
  whatsappUrl: string;
  featured: boolean;
} & Translatable<"title"> &
  Translatable<"description">;

/** Pick a translated field with English fallback. */
export function tr<K extends "title" | "description">(
  p: Property,
  key: K,
  lang: string,
): string {
  const suffix = lang.toLowerCase().slice(0, 2);
  if (suffix === "en") return p[key];
  const localised = (p as unknown as Record<string, string | undefined>)[`${key}_${suffix}`];
  return localised && localised.trim().length > 0 ? localised : p[key];
}

export const properties: Property[] = [
  {
    slug: "villa-indoor-pool-port-gallice",
    title: "Magnificent villa with indoor pool",
    area: "Cap d'Antibes",
    locationNote: "West side of Cap d'Antibes, steps from Port Gallice",
    priceDisplay: "€23,000,000",
    sizeSqm: null,
    bedrooms: null,
    description:
      "Exclusive villa on the west side of Cap d'Antibes, steps from Port Gallice, with spectacular sea views, an indoor swimming pool and top-of-the-range amenities.",
    image: "/images/villa-indoor-pool-port-gallice.jpg",
    whatsappUrl: "https://wa.me/p/26841914132070132/33652616860",
    featured: true,
  },
  {
    slug: "historic-property-cap-dantibes",
    title: "Historic property steps from the sea",
    area: "Cap d'Antibes",
    locationNote: "Cap d'Antibes, 400 m from the Mediterranean",
    priceDisplay: "€17,000,000",
    sizeSqm: 590,
    bedrooms: null,
    description:
      "Approx. 590 m² property in Cap d'Antibes, only 400 m from the sea, combining historical charm with contemporary design.",
    image: "/images/historic-property-cap-dantibes.jpg",
    whatsappUrl: "https://wa.me/p/26346852281602767/33652616860",
    featured: true,
  },
  {
    slug: "waterfront-villa-cap-dantibes",
    title: "Waterfront villa",
    area: "Cap d'Antibes",
    locationNote: "Eastern Cap d'Antibes, moments from Maison de Bacon & Keller Plage",
    priceDisplay: "€15,950,000",
    sizeSqm: 315,
    bedrooms: null,
    description:
      "One of the largest water's-edge properties on the Cap d'Antibes, on the sought-after eastern side. 315 m² of refined living space set in 1,478 m² of grounds, south-facing with multiple terraces and uninterrupted sea views.",
    image: "/images/waterfront-villa-cap-dantibes.jpg",
    whatsappUrl: "https://wa.me/p/26029839086718626/33652616860",
    featured: true,
  },
  {
    slug: "villa-eden-roc-keller-cap-dantibes",
    title: "Elegant villa in a prestigious setting",
    area: "Cap d'Antibes",
    locationNote: "Halfway between Hotel du Cap-Eden-Roc and Keller beach",
    priceDisplay: "€6,170,000",
    sizeSqm: null,
    bedrooms: null,
    description:
      "Elegant villa in one of the most sought-after areas of Cap d'Antibes, between the iconic Hotel du Cap-Eden-Roc and Keller beach. Generous, light-filled spaces opening onto landscaped exteriors — ideal for entertaining and daily life.",
    image: "/images/villa-eden-roc-keller-cap-dantibes.jpg",
    whatsappUrl: "https://wa.me/p/26322745180701715/33652616860",
    featured: true,
  },
  {
    slug: "belle-epoque-villa-cap-dantibes",
    title: "Belle Époque villa with sea views",
    area: "Cap d'Antibes",
    locationNote: "Quiet, elevated position on Cap d'Antibes",
    priceDisplay: "€4,500,000",
    sizeSqm: 235,
    bedrooms: null,
    description:
      "Elegant Belle Époque-style villa of approx. 235 m² on a 1,253 m² landscaped garden in a quiet, elevated position on Cap d'Antibes, with swimming pool and outstanding panoramic Mediterranean views.",
    image: "/images/belle-epoque-villa-cap-dantibes.jpg",
    whatsappUrl: "https://wa.me/p/26388668954100869/33652616860",
    featured: true,
  },
  {
    slug: "croix-des-gardes-apartment-cannes",
    title: "Superb 5-bedroom apartment, Croix des Gardes",
    area: "Cannes",
    locationNote: "Croix des Gardes, Cannes — prestigious residence by the Gray d'Albion architect",
    priceDisplay: "€2,750,000",
    sizeSqm: 270,
    bedrooms: 5,
    description:
      "Sumptuous renovated 270 m² apartment in a prestigious, secure and calm residence with a wooded park and swimming pool. Beaches and shops just a few steps away.",
    image: "/images/croix-des-gardes-apartment-cannes.jpg",
    whatsappUrl: "https://wa.me/p/26327275630227578/33652616860",
    featured: true,
  },
  {
    slug: "contemporary-villa-secured-domain",
    title: "Contemporary villa in a prestigious secured domain",
    area: "",
    locationNote: "Secured domain with guardian, moments from beaches and shops",
    priceDisplay: "€4,200,000",
    sizeSqm: 228,
    bedrooms: null,
    description:
      "Exceptional contemporary villa of approx. 228 m² in a prestigious secured domain with a guardian, moments from the beaches and shops — modern elegance with Riviera tranquillity.",
    image: "/images/contemporary-villa-secured-domain.jpg",
    whatsappUrl: "https://wa.me/p/35392695136984175/33652616860",
    featured: false,
  },
  {
    slug: "antibes-heights-renovation-villa",
    title: "Contemporary villa under full renovation",
    area: "Antibes",
    locationNote: "Heights of Antibes, end of a semi-private driveway",
    priceDisplay: "€2,300,000",
    sizeSqm: 227,
    bedrooms: null,
    description:
      "Exceptional 227 m² contemporary villa, currently undergoing full renovation, on 3,500 m² of landscaped grounds with sweeping sea and mountain views — with the rare option to add a private padel court.",
    image: "/images/antibes-heights-renovation-villa.jpg",
    whatsappUrl: "https://wa.me/p/26614867018146135/33652616860",
    featured: false,
  },
  {
    slug: "provencal-villa-antibes-heights",
    title: "Provençal villa with panoramic view",
    area: "Antibes",
    locationNote: "Atop Antibes, peaceful preserved setting",
    priceDisplay: "€2,150,000",
    sizeSqm: null,
    bedrooms: null,
    description:
      "Superb villa nestled atop Antibes with breathtaking views over rolling hills and mountains. Meticulously landscaped gardens, impeccable maintenance, blending Provençal charm with tasteful contemporary touches; minutes from the highway and shops.",
    image: "/images/provencal-villa-antibes-heights.jpg",
    whatsappUrl: "https://wa.me/p/26507925845534591/33652616860",
    featured: false,
  },
  {
    slug: "rue-hoche-apartment-cannes",
    title: "3-bedroom renovated top-floor apartment",
    area: "Cannes",
    locationNote: "Rue Hoche, heart of Cannes, near the Palais des Festivals",
    priceDisplay: "€1,295,000",
    sizeSqm: null,
    bedrooms: 3,
    description:
      "Top-floor (3rd) 3-bedroom apartment on the sought-after rue Hoche in central Cannes, in a bourgeois building with elevator. Fully renovated by an interior designer, with a balcony, steps from shops, restaurants, beaches and the Palais des Festivals.",
    image: "/images/rue-hoche-apartment-cannes.jpg",
    whatsappUrl: "https://wa.me/p/35700478446206023/33652616860",
    featured: false,
  },
  {
    slug: "antibes-rooftop-apartment",
    title: "Exceptional apartment with 104 m² rooftop terrace",
    area: "Antibes",
    locationNote: "Antibes — prestigious residence, due-south facing",
    priceDisplay: "€1,150,000",
    sizeSqm: 104,
    bedrooms: null,
    description:
      "Rare south-facing apartment of approx. 104 m² combining contemporary elegance and comfort, crowned by an exceptional 104 m² roof terrace with 360° panoramic sea and mountain views.",
    image: "/images/antibes-rooftop-apartment.jpg",
    whatsappUrl: "https://wa.me/p/25964924623190590/33652616860",
    featured: false,
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export const WHATSAPP_CATALOG_URL = "https://wa.me/c/33652616860";
export const WHATSAPP_DIRECT_URL = "https://wa.me/33652616860";
