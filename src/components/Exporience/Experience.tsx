import { useState } from "react";
import "./Experience.scss";
import hoverSound from '../../assets/sounds/hover.wav';
import { experienceData } from "../../data/experience";

function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHover = () => {
    new Audio(hoverSound).play();
  };

  return (
    <section id="experience">
      <div className="accordion">
        <h1 className="accordion-header">My Experience</h1>
        {experienceData.map(({ index, title, content }) => (
          <div key={index}>
            <div
              className={`accordion-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div onMouseEnter={handleHover} className="accordion-title">
                <div>
                  <p>{title.company}</p>
                  <h3 className="accordion-position">{title.position}</h3>
                  <p>({title.duration})</p>
                </div>
              </div>
            </div>
            <p
              className={`accordion-content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
