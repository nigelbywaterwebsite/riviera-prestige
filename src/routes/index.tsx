import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const heroImage = "/images/hero-cap-antibes.jpg";
const nigelPortraitUrl = "/images/nigel-portrait.jpeg";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SITE_URL, WHATSAPP_DIRECT_URL } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Nigel Bywater",
  url: SITE_URL,
  image: `${SITE_URL}/images/nigel-portrait.jpeg`,
  description:
    "Property advisor with Engel & Völkers, specialising in luxury homes on Cap d'Antibes and across the French Riviera.",
  email: "nigel.bywater@engelvoelkers.com",
  telephone: "+33652616860",
  areaServed: ["Cap d'Antibes", "Antibes", "Cannes", "French Riviera"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antibes",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  memberOf: { "@type": "Organization", name: "Engel & Völkers" },
  knowsLanguage: ["en", "fr"],
};

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
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}${heroImage}` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Home,
});

const NAV = [
  { href: "#about", key: "nav.about" },
  { href: "#services", key: "nav.services" },
  { href: "#testimonials", key: "nav.testimonials" },
  { href: "#contact", key: "nav.contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
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
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-charcoal border-b border-white/10 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <a href="#top" className="flex flex-col leading-tight text-white">
          <span className="font-serif text-xl tracking-wide md:text-2xl">Nigel Bywater</span>
          <span className="eyebrow mt-1 text-[0.6rem] text-white/80">Engel &amp; Völkers</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-white/90 transition-colors hover:text-ev-red"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher variant="light" />
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("nav.menuToggle")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-charcoal border-t border-white/10">
          <nav className="flex flex-col gap-1 px-6 py-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.22em] text-white/90 border-b border-white/10 transition-colors hover:text-ev-red"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="pt-4">
              <LanguageSwitcher variant="light" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="relative h-[50svh] min-h-[430px] w-full overflow-hidden">
      <div className="absolute top-20 left-0 right-0 bottom-0">
        <img
          src={heroImage}
          alt={t("hero.imageAlt")}
          width={1600}
          height={1065}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Diagonal scrim — darker at lower-left where the copy sits, fading toward upper-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-0 right-0 bottom-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 75%)",
        }}
      />
      {/* Gentle bottom-up wash for extra seat under the buttons */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pt-28 pb-10 md:px-10 md:pb-12">
        <div className="fade-up max-w-2xl text-white">
          <p
            className="eyebrow font-medium text-white"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            {t("hero.eyebrow")}
          </p>
          <h1
            className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.55)" }}
          >
            {t("hero.name")}
          </h1>
          <div className="mt-5 h-px w-12 bg-ev-red" />
          <p
            className="mt-5 max-w-xl font-sans text-base font-light text-white/95 md:text-lg"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
          >
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              to="/collection"
              className="inline-flex items-center justify-center bg-ev-red px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white shadow-lg transition-colors hover:bg-ev-red/90"
            >
              {t("hero.cta1")}
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/80 bg-white/5 px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white backdrop-blur-[2px] transition-colors hover:bg-white hover:text-charcoal"
            >
              {t("hero.cta2")}
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

function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          {/* Portrait source is only 400x367 — render at native size/ratio to avoid upscale blur.
              If a higher-res portrait (≥1000px wide) becomes available, restore aspect-[4/5] cover. */}
          <div className="relative max-w-[400px] overflow-hidden bg-muted">
            <img
              src={nigelPortraitUrl}
              alt={t("about.portraitAlt")}
              loading="lazy"
              width={400}
              height={367}
              className="h-auto w-full"
            />
          </div>
          <div className="mt-4 h-px w-10 bg-ev-red" />
        </div>

        <div className="md:col-span-7 md:pt-8">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
            {t("about.title")}
          </h2>
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground/85">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>
          <div className="mt-8 border-l-2 border-ev-red pl-5">
            <p className="text-[15px] italic leading-relaxed text-foreground/80">
              {t("about.languagesNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as {
    title: string;
    body: string;
  }[];
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading eyebrow={t("services.eyebrow")} title={t("services.title")}>
          {t("services.intro")}
        </SectionHeading>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <div key={s.title} className="bg-background p-8 md:p-10">
              <p className="font-serif text-xl text-ev-red">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-serif text-2xl">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as {
    quote: string;
    author: string;
    place: string;
  }[];
  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow={t("testimonials.eyebrow")}
          title={t("testimonials.title")}
          align="center"
        />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {items.map((tt) => (
            <figure key={tt.author + tt.place} className="flex flex-col">
              <div className="h-px w-8 bg-ev-red" />
              <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-foreground/90 md:text-[1.4rem]">
                "{tt.quote}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {tt.author} · {tt.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow">{t("contact.eyebrow")}</p>
        <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl red-rule">
          {t("contact.title")}
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {t("contact.intro")}
        </p>
        <p className="mt-5 max-w-2xl text-[15px] italic leading-relaxed text-foreground/75">
          {t("contact.languagesNote")}
        </p>

        <dl className="mt-14 grid gap-10 border-t border-border pt-10 text-sm md:grid-cols-3 md:gap-12">
          <div>
            <dt className="eyebrow text-[0.6rem] text-muted-foreground">{t("contact.whatsapp")}</dt>
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
            <dt className="eyebrow text-[0.6rem] text-muted-foreground">{t("contact.email")}</dt>
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
            <dt className="eyebrow text-[0.6rem] text-muted-foreground">{t("contact.ev")}</dt>
            <dd className="mt-2">
              <a
                href="https://www.engelvoelkers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-charcoal underline-offset-4 hover:underline"
              >
                {t("contact.evLink")}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center md:px-10">
        <div>
          <p className="font-serif text-lg">Nigel Bywater</p>
          <p className="eyebrow mt-2 text-[0.6rem] text-muted-foreground">{t("footer.role")}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          <LanguageSwitcher variant="dark" />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nigel Bywater. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const { t } = useTranslation();
  return (
    <a
      href={WHATSAPP_DIRECT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsappAria")}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 0C5.495 0 .16 5.335.157 11.892c0 2.096.548 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 0 0 5.692 1.45h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413A11.823 11.823 0 0 0 12.057 0zm0 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884a9.825 9.825 0 0 1 6.99 2.898 9.825 9.825 0 0 1 2.892 6.994c-.003 5.45-4.437 9.885-9.887 9.885z" />
      </svg>
    </a>
  );
}
