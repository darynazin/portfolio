import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Swiper from "../../components/Swiper/Swiper";

function Project() {
  const { slug } = useParams<{ slug: string }>();

  const project = projects.find((project) => project.title.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="project">
      <header className="project__header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </header>

      <Swiper
        images={[
          project.image[0],
          project.image[1],
          project.image[2],
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
    </main>
  );
}

export default Project;