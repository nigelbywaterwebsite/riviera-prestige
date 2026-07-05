import { useState } from "react";
import { useTranslation } from "react-i18next";
import { tr, type Property } from "@/data/properties";


function Placeholder() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#e9e3d8] via-[#f1ece2] to-[#d9d2c4]">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.6" className="text-charcoal/30">
        <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
      </svg>
    </div>
  );
}

export function PropertyCard({ property: p }: { property: Property }) {
  const { t, i18n } = useTranslation();
  const [imgOk, setImgOk] = useState(true);
  const title = tr(p, "title", i18n.language);
  const description = tr(p, "description", i18n.language);
  const details: string[] = [];
  if (p.bedrooms) details.push(t("card.bedrooms", { count: p.bedrooms }));
  if (p.sizeSqm) details.push(`${p.sizeSqm} m²`);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {imgOk ? (
          <img
            src={p.image}
            alt={title}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <Placeholder />
        )}
        {p.area && (
          <div className="absolute left-0 top-0 bg-background/95 px-4 py-2">
            <p className="eyebrow text-[0.6rem]">{p.area}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col">
        <div className="h-px w-10 bg-ev-red" />
        <h3 className="mt-5 font-serif text-2xl md:text-3xl">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.locationNote}</p>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
          <span className="font-medium text-charcoal">{p.priceDisplay}</span>
          {details.map((d) => (
            <span key={d} className="text-muted-foreground before:mr-4 before:content-['·']">
              {d}
            </span>
          ))}
        </div>

        <p className="mt-5 line-clamp-3 text-[15px] leading-relaxed text-foreground/80">
          {description}
        </p>

      </div>
    </article>
  );
}
