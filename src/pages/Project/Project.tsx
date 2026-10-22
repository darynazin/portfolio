import { useParams, Link } from "react-router-dom";
import { projects } from "../../data/projects";
import Swiper from "../../components/Swiper/Swiper";
import ProjectStack from "../../components/ProjectStack/ProjectStack";
import "./Project.scss";

function Project() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <main className="project project--not-found">
        <p>We couldn't find this project.</p>
        <Link to="/portfolio/">← Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="project">
      <div className="project__container">
        <section className="project__gallery" aria-label="Project screenshots">
          <Swiper images={project.image} />
        </section>
        <section className="project__overview">
          <div className="project__intro">
            <span className="project__eyebrow">Overview</span>
            <header className="project__header">
              <h1>{project.title}</h1>
            </header>
            <div className="project__stack">
              <ProjectStack icons={project.icons} />
            </div>
            <p>{project.fullDescription.desc}</p>
          </div>
          <aside className="project__details">
            {project.fullDescription.automation && (
              <div className="project__detail">
                <span>Automation</span>
                <p>{project.fullDescription.automation}</p>
              </div>)}
            {project.fullDescription.frontend && (
              <div className="project__detail">
                <span>Frontend</span>
                <p>{project.fullDescription.frontend}</p>
              </div>)}
            {project.fullDescription.backend && (
              <div className="project__detail">
                <span>Backend</span>
                <p>{project.fullDescription.backend}</p>
              </div>)}
          </aside>
        </section>
        <section className="project__features">
          <div className="project__section-heading">
            <span className="project__eyebrow">Features</span>
          </div>
          <div className="project__feature-grid">
            {project.features.map((feature, index) => (
              <article className="project__feature" key={index}>
                <div>
                  {feature.frontend && (
                    <div className="project__feature-group">
                      <h3>Frontend</h3>
                      <p className="project__feature-description">
                        {feature.frontend.map((item) => <div key={item}>{item}</div>)}
                      </p>
                    </div>
                  )}
                  {feature.backend && (
                    <div className="project__feature-group">
                      <h3>Backend</h3>
                      <p className="project__feature-description">
                        {feature.backend.map((item) => <div key={item}>{item}</div>)}
                      </p>
                    </div>
                  )}
                  {feature.automation && (
                    <div className="project__feature-group">
                      <h3>Automation</h3>
                      <p className="project__feature-description">
                        {feature.automation.map((item) => <div key={item}>{item}</div>)}
                      </p>
                    </div>
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