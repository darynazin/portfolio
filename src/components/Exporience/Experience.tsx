import './Experience.scss';
import { experienceData } from "../../data/experience";

function Experience() {
  return (
    <section id="experience">
      <div className="accordion">
        <h1 className="accordion-header">My Experience</h1>
        {experienceData.map(({ title, content }, idx) => (
          <>
            <div className="accordion-item" key={idx}>
              <div className="accordion-title">
                <div>
                  <p>{title.company}</p>
                  <h3 className="accordion-position">{title.position}</h3>
                  <p>({title.duration})</p>
                </div>
              </div>
            </div>
            <p className="accordion-content">{content}</p>
          </>
        ))}
      </div>
    </section>
  );
}

export default Experience