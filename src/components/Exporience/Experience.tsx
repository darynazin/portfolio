
import { useState } from "react";
import "./Experience.scss";
import { useTranslation } from "react-i18next";

function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const experienceItems = t("experience.items", {
    returnObjects: true,
  }) as {
    index: number;
    title: {
      company: string;
      position: string;
      duration: string;
    };
    content: string;
  }[];

  const toggleAccordion = (index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="section-wrapper">
      <div id="experience" className="section">
        <div className="accordion">
          <h1 className="accordion-header">
            {t("experience.title")}
          </h1>

          {experienceItems.map(({ index, title, content }) => (
            <div key={index}>
              <div
                className={`accordion-item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-title">
                  <div>
                    <p>{title.company}</p>
                    <h3 className="accordion-position">
                      {title.position}
                    </h3>
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
      </div>
    </section>
  );
}

export default Experience;
