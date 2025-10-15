import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import "./Projects.scss";

function Projects() {
  const [visible, setVisible] = useState(false);
  const projectsListRef = useRef(null);

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
        <h1 className="projects-title">Things I’ve Worked on, Some of Them</h1>
        <div className="projects-list" ref={projectsListRef}>
          {projects.map((project) => (
            <div key={project.index} className="project-card-container">
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
                      <a
                        href={project.demo}
                        target="_blank"
                        className="project-card-btn"
                      >
                        Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="project-card-btn btn2"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="project-card-image"
                src={project.image}
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
