
import "./Hero.scss"
import DarynaPhoto from "../../assets/images/daryna.png"
import { useTranslation } from "react-i18next"
import CV_EN from "../../assets/documents/Daryna_Zinchenko_CV_EN.pdf"
import CV_DE from "../../assets/documents/Daryna_Zinchenko_CV_ DE.pdf"

function Hero() {
  const { t, i18n } = useTranslation()

  const cv = i18n.resolvedLanguage?.startsWith("de")
    ? CV_DE
    : CV_EN

  const cvFilename = i18n.resolvedLanguage?.startsWith("de")
    ? "Daryna_Zinchenko_CV_DE.pdf"
    : "Daryna_Zinchenko_CV_EN.pdf"

  return (
    <section id="home" className="hero-container">
      <div className="hero">
        <div className="hero-image-container">
          <div className="hero-image">
            <img src={DarynaPhoto} alt={t("hero.imageAlt")} />
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/daryna-zinchenko/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/darynazin"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://wa.me/+491786549057"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="hero-text">
          <div className="hero-text-content">
            <h1 className="hero-title">Daryna Zinchenko</h1>

            <p className="hero-description">
              {t("hero.description")}
            </p>

            <div className="hero-buttons">
              <a href={cv} download={cvFilename}>
                <button className="hero-btn cv">
                  {t("hero.cta")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
