import React from "react";
import "./Heroimg.css";
import pic from "../../assets/pic1.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="heroimg">
      <div className="mask">
        <img className="img" src={pic} alt="images" />
      </div>
      <div className="content">
        <p>HI, I AM DILIP KUMAR</p>
        <h1>Front-End Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Heroimg;
