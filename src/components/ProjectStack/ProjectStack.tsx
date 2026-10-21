import "./ProjectStack.scss";

type ProjectStackProps = {
  icons: string[][];
};

const ProjectStack: React.FC<ProjectStackProps> = ({ icons }) => {
  return (
    <div className="projectStack" aria-label="Technologies used">
      <div className="projectStack-icons">
        {icons.map((item) => (
          <div
            key={item[1]}
            className="projectStack-icon"
            title={item[1]}
          >
            <img
              src={item[0]}
              alt={item[1]}
              className="projectStack-icon__icon"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStack;