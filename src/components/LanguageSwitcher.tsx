import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, setLanguage, type LangCode } from "@/i18n";

export function LanguageSwitcher({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const current =
    SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) ?? SUPPORTED_LANGUAGES[0];

  const triggerCls =
    variant === "light" ? "text-white/90 hover:text-white" : "text-charcoal hover:text-ev-red";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.22em] transition-colors ${triggerCls}`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.code.toUpperCase()}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M3 4.5l3 3 3-3" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-3 min-w-[10rem] border border-border bg-background py-2 shadow-xl"
        >
          {SUPPORTED_LANGUAGES.map((l) => {
            const active = l.code === current.code;
            return (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(l.code as LangCode);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-cream ${
                    active ? "text-ev-red" : "text-charcoal"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
