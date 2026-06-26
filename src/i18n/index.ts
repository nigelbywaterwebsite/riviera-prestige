import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import fr from "./locales/fr";
import sv from "./locales/sv";
import no from "./locales/no";
import da from "./locales/da";
import ru from "./locales/ru";

export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "sv", label: "Svenska" },
  { code: "no", label: "Norsk" },
  { code: "da", label: "Dansk" },
  { code: "ru", label: "Русский" },
] as const;

export type LangCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

const STORAGE_KEY = "nb_lang";

function detectInitial(): LangCode {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
    if (stored && SUPPORTED_LANGUAGES.some((l) => l.code === stored)) return stored;
  } catch {
    /* ignore */
  }
  const nav = window.navigator?.language?.slice(0, 2).toLowerCase();
  // Norwegian variants
  if (nav === "nb" || nav === "nn") return "no";
  const match = SUPPORTED_LANGUAGES.find((l) => l.code === nav);
  return match ? (match.code as LangCode) : "en";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sv: { translation: sv },
      no: { translation: no },
      da: { translation: da },
      ru: { translation: ru },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    returnObjects: true,
  });
}

export function initClientLanguage() {
  if (typeof window === "undefined") return;
  const lang = detectInitial();
  if (i18n.language !== lang) void i18n.changeLanguage(lang);
}

export function setLanguage(code: LangCode) {
  void i18n.changeLanguage(code);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore */
    }
  }
}

export default i18n;
