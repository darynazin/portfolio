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
        <Link to="/projects">← Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project">
      <div className="project__container">

        <header className="project__header">
          <span className="project__eyebrow">Selected project</span>
          <h1>{project.title}</h1>
          <div className="project__stack">
            <ProjectStack icons={project.icons} />
          </div>
        </header>

        <section className="project__gallery" aria-label="Project screenshots">
          <Swiper images={project.image} />
        </section>

        <section className="project__overview">
          <div className="project__intro">
            <span className="project__eyebrow">Overview</span>
            <h2>About the project</h2>
            <p>{project.fullDescription.desc}</p>
          </div>

          <aside className="project__details">
            <div className="project__detail">
              <span>Frontend</span>
              <p>{project.fullDescription.frontend}</p>
            </div>

            <div className="project__detail">
              <span>Backend</span>
              <p>{project.fullDescription.backend}</p>
            </div>
          </aside>
        </section>

        <section className="project__features">
          <div className="project__section-heading">
            <span className="project__eyebrow">What it can do</span>
            <h2>Features</h2>
          </div>

          <div className="project__feature-grid">
            {project.features.map((feature, index) => (
              <article className="project__feature" key={index}>
                <span className="project__feature-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  {feature.frontend && (
                    <div className="project__feature-group">
                      <h3>Frontend</h3>
                      <p>{feature.frontend.join(", ")}</p>
                    </div>
                  )}

                  {feature.backend && (
                    <div className="project__feature-group">
                      <h3>Backend</h3>
                      <p>{feature.backend.join(", ")}</p>
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