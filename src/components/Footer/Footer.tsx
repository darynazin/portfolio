
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.copyright")}
        </p>

        <button
          className="footer-link"
          onClick={() => setShowPrivacy(true)}
        >
          {t("footer.privacyPolicy")}
        </button>
      </footer>

      {showPrivacy && (
        <div
          className="modal-overlay"
          onClick={() => setShowPrivacy(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
            >
              ×
            </button>

            <h1>{t("footer.privacyPolicy")}</h1>

            <div className="privacy-section">
              <h2>
                {t("footer.sections.informationCollected.title")}
              </h2>

              <p>
                {t("footer.sections.informationCollected.description")}
              </p>

              <ul>
                <li>
                  {t("footer.sections.informationCollected.items.fullName")}
                </li>
                <li>
                  {t("footer.sections.informationCollected.items.email")}
                </li>
                <li>
                  {t("footer.sections.informationCollected.items.message")}
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>
                {t("footer.sections.informationUsage.title")}
              </h2>

              <p>
                {t("footer.sections.informationUsage.description")}
              </p>

              <ul>
                <li>
                  {t("footer.sections.informationUsage.items.responding")}
                </li>
                <li>
                  {t("footer.sections.informationUsage.items.improving")}
                </li>
              </ul>

              <p>
                {t("footer.sections.informationUsage.sharing")}
              </p>
            </div>

            <div className="privacy-section">
              <h2>
                {t("footer.sections.dataSecurity.title")}
              </h2>

              <p>
                {t("footer.sections.dataSecurity.description")}
              </p>
            </div>

            <div className="privacy-section">
              <h2>
                {t("footer.sections.policyChanges.title")}
              </h2>

              <p>
                {t("footer.sections.policyChanges.description")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
