
import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Header.scss";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const isHome = pathname === "/portfolio/";
  const isProject = pathname.startsWith("/portfolio/") && !isHome;

  useEffect(() => {
    const node = topRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div ref={topRef} style={{ height: "1px" }} />

      <nav className={`nav-container${scrolled ? " scrolled" : ""}`}>
        {isHome && (
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("header.toggleMenu")}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        )}

        {isProject && (
          <Link to="/portfolio/" className="burger back-link">
            {t("navigation.home")}
          </Link>
        )}

        <div
          className={`nav-wrapper ${isProject ? " nav-wrapper--project" : ""}`}
        >
          <ul className={`navbar ${menuOpen ? "active" : ""}`}>
            {isHome && (
              <>
                <li>
                  <a href="#home" onClick={() => setMenuOpen(false)}>
                    {t("navigation.home")}
                  </a>
                </li>

                <li>
                  <a href="#experience" onClick={() => setMenuOpen(false)}>
                    {t("navigation.experience")}
                  </a>
                </li>

                <li>
                  <a href="#projects" onClick={() => setMenuOpen(false)}>
                    {t("navigation.projects")}
                  </a>
                </li>

                <li>
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    {t("navigation.contact")}
                  </a>
                </li>
              </>
            )}

            {isProject && (
              <li>
                <Link
                  to="/portfolio/"
                  onClick={() => setMenuOpen(false)}
                >
                  ← {t("navigation.backToHome")}
                </Link>
              </li>
            )}

            <LanguageSwitcher />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
