import { useState } from "react";
import type { Property } from "@/data/properties";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.692 1.45h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413A11.823 11.823 0 0 0 12.057 0zm0 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884a9.825 9.825 0 0 1 6.99 2.898 9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.885-9.887 9.885z" />
    </svg>
  );
}

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
  const [imgOk, setImgOk] = useState(true);
  const details: string[] = [];
  if (p.bedrooms) details.push(`${p.bedrooms} bedrooms`);
  if (p.sizeSqm) details.push(`${p.sizeSqm} m²`);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {imgOk ? (
          <img
            src={p.image}
            alt={p.title}
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
        <h3 className="mt-5 font-serif text-2xl md:text-3xl">{p.title}</h3>
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
          {p.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={p.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-charcoal px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-charcoal hover:text-white"
          >
            View details
          </a>
          <a
            href={p.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ev-red px-6 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-ev-red/90"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
