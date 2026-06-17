import React from "react";
import "../Heroimg2/Heroimg2.css";

const Heroimg3 = (props) => {
  return (
    <div className="hero_img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Heroimg3;