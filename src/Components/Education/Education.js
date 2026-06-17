import React from "react";
import NaveBar from "../NaveBar/NaveBar";
import Footer from "../Footer/Footer";
import Heroimg4 from "../Heroimg/HeroImage4/HeroImage4";
import EducationDetailsData from "./EducationDetailsData";

const Education = () => {
  return (
    <>
      <NaveBar />
      <Heroimg4 heading="EDUCATION" text="Here Is My Academics" />
      <EducationDetailsData />
      <Footer />
    </>
  );
};

export default Education;
