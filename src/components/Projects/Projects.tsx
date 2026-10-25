import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import "./Projects.scss";

function Projects() {
  const [visible, setVisible] = useState(false);
  const projectsListRef = useRef(null);
  const navigate = useNavigate();

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

    if (projectsListRef.current) {
      observer.observe(projectsListRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-wrapper">
      <div className="projects section" id="projects">
        <h1 className="projects-title">Selected Works</h1>
        <div className="projects-list" ref={projectsListRef}>
          {projects.map((project) => (
            <div key={project.index} className="project-card-container" onClick={() => goToProject(project.title.toLowerCase().replace(/\s+/g, "-"))}>
              <div className="project-card-content">
                <div
                  className={`project-card-info ${visible ? "visible" : ""}`}
                >
                  <div className="project-card-text">
                    <h3 className="project-card-title">{project.title}</h3>
                    <div className="project-card-desc">
                      {project.description}
                      <p className="project-card-tech">
                        {project.tech.join(" | ")}
                      </p>
                    </div>
                    <div>
                      {project.demo && (
                        <a
                        href={project.demo}
                        target="_blank"
                        className="project-card-btn"
                        onClick={(event) => event.stopPropagation()}
                      >
                        Demo
                      </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
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
                alt={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
