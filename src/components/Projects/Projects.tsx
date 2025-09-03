import { projects } from "../../data/projects";
import "./Projects.scss";


function Projects() {
  return (
    <section className="projects" id="projects">
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
                <button className="project-card-btn">View Details</button>

              </div>
            </div>
            <img className="project-card-image" src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
