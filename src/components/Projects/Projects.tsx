import { projects } from "../../data/projects";
import "./Projects.scss";


const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>✱ Things I’ve Worked on, Some of Them</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.featured ? "featured" : ""}`}
          >
            <div className="project-card__content">
              <h4 className="project-card__label">Featured Project</h4>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <p className="project-card__tech">
                {project.tech.join(" | ")}
              </p>
              <button className="project-card__btn">View Details</button>
            </div>
            <div className="project-card__image">
              <h4>{project.subtitle}</h4>
              <img src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
