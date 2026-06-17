import React from "react";
import Footer from "../../Components/Footer/Footer";
import Heroimg2 from "../../Components/Heroimg/Heroimg2/Heroimg2";
import NaveBar from "../../Components/NaveBar/NaveBar";
import PricingCard from "../../Components/PricingCard/PricingCard";
import Work from "../../Components/WorkCard/Work";

const Project = () => {
  return (
    <div>
      <NaveBar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
