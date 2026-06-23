import React, { useState } from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";
import "./WorkCard.css";

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="work_container">
      <div className="project_container">
        {ProjectCardData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              view={value.view}
              text={value.text}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
