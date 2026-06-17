import React from "react";
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";

const Work = () => {
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
