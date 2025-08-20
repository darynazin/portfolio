import "./Stack.scss";
import { stack } from "../../data/stack";

const Stack: React.FC = () => {
  return (
    <div className="stack">
      <h4 className="stack__title">✱ My Stack</h4>
      {stack.map((section) => (
        <div key={section.title} className="stack__section">
          <h2>{section.title}</h2>
          <div className="stack__items">
            {section.items.map((tech) => (
              <div key={tech.name} className="stack__item">
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stack;
