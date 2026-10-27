import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "de" | "en") => {
    void i18n.changeLanguage(language);
  };

  return (
    <div
      className="language-switcher"
      aria-label="Choose language"
    >
      <button
        type="button"
        onClick={() => changeLanguage("de")}
        aria-pressed={i18n.language.startsWith("de")}
      >
        DE
      </button>

      <span aria-hidden="true">|</span>

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        aria-pressed={i18n.language.startsWith("en")}
      >
        EN
      </button>
    </div>
  );
}