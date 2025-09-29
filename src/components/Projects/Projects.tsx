import { projects } from "../../data/projects";
import "./Projects.scss";


function Projects() {
  return (
    <section className="section-wrapper">
      <div className="projects section" id="projects">
      <h1 className="projects-title">Things I’ve Worked on, Some of Them</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.index}
            className="project-card-container"
          >
            <div className="project-card-content">
              <div className="project-card-info">
                <div className="project-card-text">
                  <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">
                  {project.description}
                </p>
                <p className="project-card-tech">
                  {project.tech.join(" | ")}
                </p>
                </div>
                <a href={project.demo}
                   target="_blank"
                   className="project-card-btn">Demo</a>
                <a href={project.github}
                   target="_blank"
                   className="project-card-btn">Code</a>
              </div>
            </div>
            <img className="project-card-image" src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
