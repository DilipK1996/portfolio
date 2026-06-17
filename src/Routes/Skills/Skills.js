import React from "react";
import NaveBar from "../../Components/NaveBar/NaveBar";
import Footer from "../../Components/Footer/Footer";
import SkillsContaint from "../../Components/SkillsCoontaint/SkillsContainr";
import Heroimg3 from "../../Components/Heroimg/HeroImg3/HeroImg3";

const Skills = () => {
  return (
    <div>
      <NaveBar />
      <Heroimg3
        heading="SKILLS"
        text="Here is my Skills that enhance my knowledge."
      />
      <SkillsContaint />
      <Footer />
    </div>
  );
};

export default Skills;
