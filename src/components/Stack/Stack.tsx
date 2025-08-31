import "./Stack.scss";
import { stack } from "../../data/stack";

const Stack: React.FC = () => {
  return (
    <section className="stack">
      <h1 className="stack-title">My Stack</h1>
      {stack.map((section) => (
        <div key={section.index} className="stack-section">
          <h2>{section.title}</h2>
          <div className="stack-items">
            {section.items.map((tech) => (
              <div key={tech.idx} className="stack-item">
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
