import "./Stack.scss";
import { stack } from "../../data/stack";

const Stack: React.FC = () => {
  return (
    <section className="stack">
      <h4 className="stack-title">My Stack</h4>
      {stack.map((section) => (
        <div key={section.title} className="stack-section">
          <h2>{section.title}</h2>
          <div className="stack-items">
            {section.items.map((tech) => (
              <div key={tech.name} className="stack-item">
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stack;
