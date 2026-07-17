import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SITE_URL } from "@/data/site";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "The Collection — Nigel Bywater · Engel & Völkers" },
      {
        name: "description",
        content:
          "A new curated collection of luxury properties from Nigel Bywater on the Cap d'Antibes and the French Riviera is coming soon.",
      },
      { property: "og:title", content: "The Collection — Nigel Bywater" },
      { property: "og:url", content: `${SITE_URL}/collection` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/collection` }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl tracking-wide md:text-2xl">Nigel Bywater</span>
            <span className="eyebrow mt-1 text-[0.6rem]">Engel &amp; Völkers</span>
          </Link>
          <div className="flex items-center gap-8">
            <LanguageSwitcher variant="dark" />
            <Link
              to="/"
              className="text-xs font-medium uppercase tracking-[0.22em] text-charcoal hover:text-ev-red"
            >
              {t("collection.back")}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center md:px-10 md:py-40">
        <p className="eyebrow">{t("collection.eyebrow")}</p>
        <h1 className="mt-5 font-serif text-4xl tracking-tight md:text-6xl">
          {t("collection.comingSoonTitle")}
        </h1>
        <div className="mt-8 h-px w-12 bg-ev-red" />
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
          {t("collection.comingSoonBody")}
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-ev-red"
        >
          {t("collection.back")}
        </Link>
      </main>
    </div>
  );
}
