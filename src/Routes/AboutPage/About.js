import React from "react";
import AboutContent from "../../Components/AboutContent/AboutContent";
import Footer from "../../Components/Footer/Footer";
import Heroimg2 from "../../Components/Heroimg/Heroimg2/Heroimg2";
import NaveBar from "../../Components/NaveBar/NaveBar";

const About = () => {
  return (
    <div>
      <NaveBar />
      <Heroimg2 heading="ABOUT" text="I am a friendly Front-End Developer." />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;
