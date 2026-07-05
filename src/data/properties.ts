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

export const properties: Property[] = [];

export const featuredProperties = properties.filter((p) => p.featured);

export const WHATSAPP_DIRECT_URL = "https://wa.me/33652616860";
