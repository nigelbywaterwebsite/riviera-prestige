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
    sizeSqm: 892,
    bedrooms: 8,
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
    bedrooms: 7,
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
    bedrooms: 5,
    description:
      "One of the largest water's-edge properties on the Cap d'Antibes, on the sought-after eastern side. 315 m² of refined living space set in 1,478 m² of grounds, south-facing with multiple terraces and uninterrupted sea views.",
    image: "/images/waterfront-villa-cap-dantibes.jpg",
    whatsappUrl: "https://wa.me/p/26029839086718626/33652616860",
    featured: true,
  },
  {
    slug: "belle-epoque-villa-cap-dantibes",
    title: "Belle Époque villa with sea views",
    area: "Cap d'Antibes",
    locationNote: "Quiet, elevated position on Cap d'Antibes",
    priceDisplay: "€4,500,000",
    sizeSqm: 235,
    bedrooms: 5,
    description:
      "Elegant Belle Époque-style villa of approx. 235 m² on a 1,253 m² landscaped garden in a quiet, elevated position on Cap d'Antibes, with swimming pool and outstanding panoramic Mediterranean views.",
    image: "/images/belle-epoque-villa-cap-dantibes.jpg",
    whatsappUrl: "https://wa.me/p/26388668954100869/33652616860",
    featured: true,
  },
  {
    slug: "contemporary-villa-secured-domain",
    title: "Contemporary villa in a prestigious secured domain",
    area: "Cap d'Antibes",
    locationNote: "Secured domain with guardian, moments from beaches and shops",
    priceDisplay: "€4,200,000",
    sizeSqm: 228,
    bedrooms: 5,
    description:
      "Exceptional contemporary villa of approx. 228 m² in a prestigious secured domain with a guardian, moments from the beaches and shops — modern elegance with Riviera tranquillity.",
    image: "/images/contemporary-villa-secured-domain.jpg",
    whatsappUrl: "https://wa.me/p/35392695136984175/33652616860",
    featured: false,
  },
];

export const featuredProperties = properties.filter((p) => p.featured);

export const WHATSAPP_CATALOG_URL = "https://wa.me/c/33652616860";
export const WHATSAPP_DIRECT_URL = "https://wa.me/33652616860";
