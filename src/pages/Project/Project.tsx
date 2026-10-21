import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Swiper from "../../components/Swiper/Swiper";
import ProjectStack from "../../components/ProjectStack/ProjectStack";
import "./Project.scss";

function Project() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project section-wrapper">
      <div className="section">
        <header className="project__header">
          <h1>{project.title}</h1>
          <ProjectStack icons={project.icons} />
        </header>

        <div className="project__description">
          <Swiper
            images={[
              project.image[0],
              project.image[1],
              project.image[2]
            ]}
          />
          <div className="project__content">
            <p>{project.fullDescription.desc}</p>
            <p><strong>Frontend:</strong> {project.fullDescription.frontend}</p>
            <p><strong>Backend:</strong> {project.fullDescription.backend}</p>
            <div className="project__links">
            </div>
          </div>
        </div>
         <div className="project__content">
            <h2>Features</h2>
            {project.features.map((feature, index) => (
              <div key={index}>
                {feature.frontend && (
                  <p><strong>Frontend:</strong> {feature.frontend.join(", ")}</p>
                )}
                {feature.backend && (
                  <p><strong>Backend:</strong> {feature.backend.join(", ")}</p>
                )}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Project;