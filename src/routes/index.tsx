import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/hero-riviera.jpg";
import nigelPortrait from "@/assets/nigel-portrait.jpg";
import {
  properties,
  WHATSAPP_CATALOG_URL,
  WHATSAPP_DIRECT_URL,
} from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nigel Bywater — Luxury Property Advisor, Cap d'Antibes & French Riviera" },
      {
        name: "description",
        content:
          "Nigel Bywater, property advisor with Engel & Völkers, specialising in luxury homes on Cap d'Antibes and across the French Riviera.",
      },
      { property: "og:title", content: "Nigel Bywater — Luxury Property Advisor" },
      {
        property: "og:description",
        content:
          "Curated luxury properties on Cap d'Antibes and the French Riviera, with Engel & Völkers.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: Home,
});

const NAV = [
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Properties />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="flex flex-col leading-tight text-white">
          <span className="font-serif text-xl tracking-wide md:text-2xl">Nigel Bywater</span>
          <span className="eyebrow mt-1 text-[0.6rem] text-white/80">Engel &amp; Völkers</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-white/90 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.22em] text-white/90 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Cap d'Antibes coastline at twilight"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-start justify-end px-6 pb-24 md:px-10 md:pb-32">
        <div className="fade-up max-w-3xl text-white">
          <p className="eyebrow text-white/80">Engel &amp; Völkers · Côte d'Azur</p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Nigel Bywater
          </h1>
          <div className="mt-6 h-px w-12 bg-ev-red" />
          <p className="mt-6 max-w-xl font-serif text-xl font-light italic text-white/95 md:text-2xl">
            Luxury property advisor — Cap d'Antibes &amp; the French Riviera, with Engel &amp; Völkers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#properties"
              className="inline-flex items-center justify-center bg-ev-red px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-ev-red/90"
            >
              View Properties
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/70 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Speak with Nigel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-5 font-serif text-4xl tracking-tight md:text-5xl red-rule ${
          align === "center" ? "center" : ""
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

function Properties() {
  return (
    <section id="properties" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Featured Properties" title="A curated selection">
          A discreet portfolio of homes across Cap d'Antibes and the wider Riviera, chosen for
          their setting, their architecture, and the lives they make possible.
        </SectionHeading>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <div className="h-px w-12 bg-ev-red" />
          <p className="mt-8 max-w-xl text-base text-muted-foreground">
            The full collection is shared privately, on request.
          </p>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 border border-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-charcoal hover:text-white"
          >
            Browse the full collection on WhatsApp
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property: p }: { property: (typeof properties)[number] }) {
  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute left-0 top-0 bg-background/95 px-4 py-2">
          <p className="eyebrow text-[0.6rem]">{p.area}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="h-px w-10 bg-ev-red" />
        <h3 className="mt-5 font-serif text-2xl md:text-3xl">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.locationNote}</p>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-1 text-sm">
          <span className="font-medium text-charcoal">{p.priceDisplay}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{p.bedrooms} bedrooms</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{p.sizeSqm} m²</span>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">{p.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#contact"
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

function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={nigelPortrait}
              alt="Portrait of Nigel Bywater"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 h-px w-10 bg-ev-red" />
        </div>

        <div className="md:col-span-7 md:pt-8">
          <p className="eyebrow">About Nigel</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
            A trusted hand on the Riviera.
          </h2>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground/85">
            <p>
              For more than two decades, Nigel Bywater has guided international buyers and sellers
              through the most discreet addresses on the French Riviera. His practice is built on
              long-standing relationships, deep local knowledge, and a consultative approach that
              prizes clarity over haste.
            </p>
            <p>
              Based on the Cap d'Antibes — perhaps the most coveted peninsula on the Côte d'Azur —
              Nigel works as a property advisor with Engel &amp; Völkers, offering a curated view of
              the market and the privacy his clients expect.
            </p>
            <p>
              Off duty, you'll find him on one of the region's storied golf courses; an enthusiast
              of the slower side of Riviera life, and a quiet ambassador for everything it has to
              offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    title: "Discreet Sourcing",
    body: "Off-market and pre-launch opportunities, matched to a precise brief and shared privately.",
  },
  {
    title: "Valuations",
    body: "Considered, evidence-based valuations grounded in current Riviera market activity.",
  },
  {
    title: "End-to-end Guidance",
    body: "From first visit to signed acte authentique — coordination, negotiation, and follow-through.",
  },
  {
    title: "A Local Network",
    body: "Notaires, architects, interior designers, concierges — a trusted circle, at your service.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow="Services" title="How I work">
          A measured, personal service for buyers and sellers of fine property on the Côte d'Azur.
        </SectionHeading>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <p className="font-serif text-xl text-ev-red">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Nigel's discretion and judgement were extraordinary. He understood what we were looking for before we did — and found it on Cap d'Antibes.",
    author: "Private client",
    place: "London / Antibes",
  },
  {
    quote:
      "A calm, considered advisor. He guided the entire process with a steadiness that is rare in this market.",
    author: "Private client",
    place: "Geneva",
  },
  {
    quote:
      "He represents the very best of Engel & Völkers on the Riviera. Knowledgeable, connected, and genuinely a pleasure to work with.",
    author: "Private client",
    place: "New York / Cannes",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading eyebrow="In Their Words" title="Testimonials" align="center" />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.author + t.place} className="flex flex-col">
              <div className="h-px w-8 bg-ev-red" />
              <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-foreground/90 md:text-[1.4rem]">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t.author} · {t.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl red-rule">
            Begin the conversation.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Whether you are considering a purchase, a discreet sale, or simply a perspective on
            the market — I would be delighted to speak with you.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow text-[0.6rem] text-muted-foreground">WhatsApp</dt>
              <dd className="mt-2">
                <a
                  href={WHATSAPP_DIRECT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-charcoal underline-offset-4 hover:underline"
                >
                  +33 6 52 61 68 60
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.6rem] text-muted-foreground">Email</dt>
              <dd className="mt-2">
                <a
                  href="mailto:nigel.bywater@engelvoelkers.com"
                  className="text-base text-charcoal underline-offset-4 hover:underline"
                >
                  nigel.bywater@engelvoelkers.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.6rem] text-muted-foreground">Engel &amp; Völkers</dt>
              <dd className="mt-2">
                <a
                  href="https://www.engelvoelkers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-charcoal underline-offset-4 hover:underline"
                >
                  View advisor profile →
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Message" name="message" textarea required />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-ev-red"
          >
            {sent ? "Thank you — I will be in touch." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-charcoal placeholder-transparent focus:border-ev-red focus:outline-none focus:ring-0";
  return (
    <label className="block">
      <span className="eyebrow text-[0.6rem] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={`${cls} resize-none mt-1`} />
      ) : (
        <input name={name} type={type} required={required} className={`${cls} mt-1`} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-serif text-lg">Nigel Bywater</p>
          <p className="eyebrow mt-2 text-[0.6rem] text-muted-foreground">
            Property Advisor · Engel &amp; Völkers
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nigel Bywater. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_DIRECT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.692 1.45h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413A11.823 11.823 0 0 0 12.057 0zm0 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884a9.825 9.825 0 0 1 6.99 2.898 9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.885-9.887 9.885z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
