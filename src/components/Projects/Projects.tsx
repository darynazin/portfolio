
import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Projects.scss";

function Projects() {
  const [visible, setVisible] = useState(false);
  const projectsListRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  function goToProject(slug: string) {
    navigate(`/portfolio/${slug}`);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: [0, 0.1] }
    );

    const node = projectsListRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrapper">
      <div className="projects section" id="projects">
        <h1 className="projects-title">
          {t("projects.title")}
        </h1>

        <div className="projects-list" ref={projectsListRef}>
          {projects.map((project) => {
            const translatedProject = t(
              `projects.${project.index + 1}`,
              { returnObjects: true }
            ) as {
              title: string;
              description: string;
            };

            return (
              <div
                key={project.index}
                className="project-card-container"
                onClick={() =>
                  goToProject(
                    project.title.toLowerCase().replace(/\s+/g, "-")
                  )
                }
              >
                <div className="project-card-content">
                  <div
                    className={`project-card-info ${
                      visible ? "visible" : ""
                    }`}
                  >
                    <div className="project-card-text">
                      <h3 className="project-card-title">
                        {translatedProject.title}
                      </h3>

                      <div className="project-card-desc">
                        {translatedProject.description}

                        <p className="project-card-tech">
                          {project.tech.join(" | ")}
                        </p>
                      </div>

                      <div>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card-btn"
                            onClick={(event) => event.stopPropagation()}
                          >
                            Demo
                          </a>
                        )}

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card-btn btn2"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className="project-card-image"
                  src={project.mockup}
                  alt={translatedProject.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
