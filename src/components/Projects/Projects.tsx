import { projects } from "../../data/projects";
import "./Projects.scss";


function Projects() {

  return (
    <section className="projects" id="projects">
      <h2>Things I’ve Worked on, Some of Them</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div
            key={project.index}
            className="project-card"
          >
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              <p className="project-card-tech">
                {project.tech.join(" | ")}
              </p>
              <button className="project-card-btn">View Details</button>
            </div>
            <div className="project-card-image">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
