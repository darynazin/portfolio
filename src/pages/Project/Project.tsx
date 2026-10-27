
import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Swiper from "../../components/Swiper/Swiper";
import ProjectStack from "../../components/ProjectStack/ProjectStack";
import { useTranslation } from "react-i18next";
import "./Project.scss";

type TranslatedFeature = {
  frontend?: string[];
  backend?: string[];
  automation?: string[];
};

type TranslatedProject = {
  title: string;
  description: string;
  fullDescription: {
    desc: string;
    frontend?: string;
    backend?: string;
    automation?: string;
  };
  features: TranslatedFeature[];
};

function Project() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  // Match using the original title so language changes don't break URLs.
  const project = projects.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <main className="project project--not-found">
        <p>{t("errors.noProject")}</p>
        <Link to="/portfolio/">
          ← {t("navigation.backToHome")}
        </Link>
      </main>
    );
  }

  // JSON keys are "1", "2", "3", and "4".
  const projectKey = String(projects.indexOf(project) + 1);

  const translatedProject = t(`projects.${projectKey}`, {
    returnObjects: true,
  }) as TranslatedProject;

  const renderFeatureGroup = (
    heading: string,
    items?: string[]
  ) => {
    if (!items?.length) return null;

    return (
      <div className="project__feature-group">
        <h3>{heading}</h3>
        <div className="project__feature-description">
          {items.map((item, index) => (
            <div key={`${heading}-${index}`}>{item}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="project">
      <div className="project__container">
        <section
          className="project__gallery"
          aria-label={t("projects.sections.gallery")}
        >
          <Swiper images={project.image} />
        </section>

        <section className="project__overview">
          <div className="project__intro">
            <span className="project__eyebrow">
              {t("projects.sections.overview")}
            </span>

            <header className="project__header">
              <h1>{translatedProject.title}</h1>
            </header>

            <div className="project__stack">
              <ProjectStack icons={project.icons} />
            </div>

            <p>{translatedProject.fullDescription.desc}</p>
          </div>

          <aside className="project__details">
            {translatedProject.fullDescription.automation && (
              <div className="project__detail">
                <span>{t("projects.sections.automation")}</span>
                <p>{translatedProject.fullDescription.automation}</p>
              </div>
            )}

            {translatedProject.fullDescription.frontend && (
              <div className="project__detail">
                <span>{t("projects.sections.frontend")}</span>
                <p>{translatedProject.fullDescription.frontend}</p>
              </div>
            )}

            {translatedProject.fullDescription.backend && (
              <div className="project__detail">
                <span>{t("projects.sections.backend")}</span>
                <p>{translatedProject.fullDescription.backend}</p>
              </div>
            )}
          </aside>
        </section>

        <section className="project__features">
          <div className="project__section-heading">
            <span className="project__eyebrow">
              {t("projects.sections.features")}
            </span>
          </div>

          <div className="project__feature-grid">
            {translatedProject.features.map((feature, index) => (
              <article className="project__feature" key={index}>
                <div>
                  {renderFeatureGroup(
                    t("projects.sections.frontend"),
                    feature.frontend
                  )}

                  {renderFeatureGroup(
                    t("projects.sections.backend"),
                    feature.backend
                  )}

                  {renderFeatureGroup(
                    t("projects.sections.automation"),
                    feature.automation
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Project;
