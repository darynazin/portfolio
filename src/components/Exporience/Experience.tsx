import { useState } from "react";
import './Experience.scss';
import { experienceData } from "../../data/experience";

function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div id="experience">
      <div className="accordion">
        <h1 className="accordion-header">My Experience</h1>
        {experienceData.map(({ title, content }, idx) => (
          <div className="accordion-item" key={idx}>
            <div
              className="accordion-title"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <div>
                <p>{title.company}</p>
                <h3 className="accordion-position">{title.position}</h3>
                <p>({title.duration})</p>
              </div>
              {activeIndex === idx ? '▼' : '▶'}
            </div>
            {activeIndex === idx && (
              <div className="accordion-content">{content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience