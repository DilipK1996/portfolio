import React from "react";
import "./WorkCard.css";
import { NavLink } from "react-router-dom";

const WorkCard = ({ imgsrc, title, text, view, isExpanded, onToggle, amountOfWords = 120 }) => {
  const truncatedText =
    text.slice(0, amountOfWords) + (text.length > amountOfWords ? "..." : "");

  return (
    <div className={isExpanded ? "project_card" : "iS_project_card"}>
      <img src={imgsrc} alt="image" />
      <h2 className="project_title">{title}</h2>
      <div className="pro_details">
        <p>{isExpanded ? text : truncatedText}</p>
        {text.length > amountOfWords && (
          <span onClick={onToggle} className="read_more_btn">
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        )}
        <div className="pro_btns">
          <NavLink to={view} target="_blank" className="btn view_btn ">
            View
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
