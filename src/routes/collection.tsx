import { createFileRoute, Link } from "@tanstack/react-router";
import { PropertyCard } from "@/components/PropertyCard";
import { properties, WHATSAPP_CATALOG_URL } from "@/data/properties";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "The Collection — Nigel Bywater · Engel & Völkers" },
      {
        name: "description",
        content:
          "The full curated collection of luxury properties offered by Nigel Bywater on the Cap d'Antibes and the French Riviera.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl tracking-wide md:text-2xl">Nigel Bywater</span>
            <span className="eyebrow mt-1 text-[0.6rem]">Engel &amp; Völkers</span>
          </Link>
          <Link
            to="/"
            className="text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-ev-red"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="eyebrow">The Collection</p>
        <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-6xl red-rule">
          Every available property
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          The complete selection of homes currently represented by Nigel, from waterfront estates
          on Cap d'Antibes to refined apartments in Cannes and the surrounding hills.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {properties.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>

        <div className="mt-24 flex flex-col items-center text-center">
          <div className="h-px w-12 bg-ev-red" />
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 border border-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-charcoal hover:text-white"
          >
            Browse the full collection on WhatsApp
          </a>
        </div>
      </main>
    </div>
  );
}
