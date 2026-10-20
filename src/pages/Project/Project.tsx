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

        <Swiper
          images={[
            project.image[0],
            project.image[1],
            project.image[2]
          ]}
        />
        <div className="project__content">
          <h2>Technologies Used</h2>
          <ul className="project__technologies">
            {project.tech.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;