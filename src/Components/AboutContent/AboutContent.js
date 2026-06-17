import React from "react";
import { useNavigate } from "react-router-dom";
import pic from "../../assets/pic14.jpg";
import pic1 from "../../assets/pic13.jpg";
import "./AboutContent.css";
import { Grid } from "@mui/material";
import resume from "../../assets/Resume/Dilip_CV_React_4yr_Exp.pdf";

const AboutContent = () => {
  const navigate = useNavigate();

  const handleDownload = () =>{
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Dilip_CV_React_4yr_Exp.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="about">
      <div className="left">
        <h1>Who I Am?</h1>
        <p>
          I am a react front-end developer. I create responsive websites for my
          clients.
        </p>
        <Grid className="contact_btn">
          <button className="btn" onClick={() => navigate("/contact")}>
            Contact
          </button>
          <button className="btn download" onClick={handleDownload} >Resume</button>
        </Grid>
      </div>
      <div className="right">
        <div className="img_container">
          <div className="img_stack top">
            <img src={pic} alt="true" className="img" />
          </div>
          <div className="img_stack bottom">
            <img src={pic1} alt="true" className="img" />
          </div>
        </div>
      </div>
      <p className="about_text">
        Hello, I'm Dilip Kumar, a passionate React.js developer with 2 years of
        experience in creating dynamic and responsive web applications.
        Throughout my career, I've had the opportunity to work on multiple
        projects, thriving on the challenges of front-end development. I am
        particularly adept at leveraging React's component-based architecture to
        deliver intuitive user experiences. Driven by a deep curiosity for
        emerging web technologies and a commitment to continuous improvement in
        my craft, I enjoy collaborating with teams to translate complex
        requirements into elegant, scalable solutions. My approach combines
        meticulous attention to detail with a creative problem-solving mindset,
        ensuring that every project I undertake meets the highest standards of
        quality and usability. Outside of coding, I'm passionate about cricket.
        I believe in the power of the game to teach valuable life lessons such
        as teamwork, perseverance, and strategic thinking. Cricket has instilled
        in me a strong sense of discipline and the importance of collaboration,
        both of which I carry into my professional life. Whether it's working on
        a project or playing a match, I always strive to perform at my best and
        support my team. I'm currently seeking opportunities that will allow me
        to apply my expertise in React.js while learning and growing within a
        dynamic team environment. Let's connect and discuss how I can contribute
        to your next project!
      </p>
    </div>
  );
};

export default AboutContent;
