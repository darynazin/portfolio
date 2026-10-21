import "./ProjectStack.scss";


type ProjectStackProps = {
  icons: string[][];
};

const ProjectStack: React.FC<ProjectStackProps> = ({ icons }) => {
  return (
    <section className="section-wrapper">
      <div className="projectStack section">
          <div className="projectStack-icons">
            {icons.map((item) => (
              <div key={item[1]} className="projectStack-icon">
                <img src={item[0]} className="projectStack-icon__icon" alt={item[1]+" icon"} title={item[1]} />
              </div>
            ))}
          </div>
       
      
    </div>
    </section>
  );
};

export default ProjectStack;
